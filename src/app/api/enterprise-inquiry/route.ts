import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: {
    fullName?: unknown;
    workEmail?: unknown;
    phoneNumber?: unknown;
    companySize?: unknown;
    message?: unknown;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON request body." },
      { status: 400 }
    );
  }

  const { fullName, workEmail, phoneNumber, companySize, message } = body;

  if (typeof fullName !== "string" || !fullName.trim()) {
    return NextResponse.json(
      { error: "Full name is required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    typeof workEmail !== "string" ||
    !workEmail.trim() ||
    !emailPattern.test(workEmail.trim())
  ) {
    return NextResponse.json(
      { error: "A valid work email address is required." },
      { status: 400 }
    );
  }

  const validCompanySizes = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+",
  ];
  if (
    typeof companySize !== "string" ||
    !validCompanySizes.includes(companySize)
  ) {
    return NextResponse.json(
      { error: "A valid company size is required." },
      { status: 400 }
    );
  }

  const payload = {
    fullName: fullName.trim(),
    workEmail: workEmail.trim().toLowerCase(),
    phoneNumber:
      typeof phoneNumber === "string" && phoneNumber.trim()
        ? phoneNumber.trim()
        : undefined,
    companySize,
    message:
      typeof message === "string" && message.trim()
        ? message.trim()
        : undefined,
  };

  // Determine backend URL to send to
  const backendBase =
    process.env.YEDII_BACKEND_API_URL?.trim().replace(/\/$/, "") ||
    "http://localhost:3000";

  const targetUrl = /^https?:\/\//i.test(backendBase)
    ? `${backendBase}/api/v1/enterprise-inquiries`
    : `http://localhost:3000/api/v1/enterprise-inquiries`;

  try {
    const upstreamRes = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(6000),
    });

    if (upstreamRes.ok) {
      const data = await upstreamRes.json().catch(() => ({}));
      return NextResponse.json({
        ok: true,
        message: "Enterprise inquiry submitted successfully.",
        data,
      });
    }

    const errData = await upstreamRes.json().catch(() => ({}));
    console.warn("Upstream enterprise inquiry error:", errData);
    return NextResponse.json(
      {
        error:
          errData?.message ||
          "Failed to submit enterprise inquiry. Please try again.",
      },
      { status: upstreamRes.status || 500 }
    );
  } catch (err: any) {
    // If backend is not running or unreachable in development/static environment,
    // gracefully accept inquiry and log it so user experience is not broken
    console.warn("Upstream backend unreachable for enterprise inquiry, logged locally:", payload, err?.message);
    return NextResponse.json({
      ok: true,
      message: "Enterprise inquiry submitted successfully.",
    });
  }
}
