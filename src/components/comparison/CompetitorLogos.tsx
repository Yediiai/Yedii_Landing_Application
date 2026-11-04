import React from "react";

export function YediiLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div
      className={`rounded-lg bg-[#141C2E] text-white flex items-center justify-center font-bold font-mono text-sm shadow-xs ${className}`}
      title="Yedii Logo"
    >
      Y
    </div>
  );
}

export function IntercomLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Intercom Logo"
    >
      <rect width="32" height="32" rx="8" fill="#0057FF" />
      <path
        d="M8.5 12C8.5 10.6193 9.61929 9.5 11 9.5H21C22.3807 9.5 23.5 10.6193 23.5 12V20C23.5 21.3807 22.3807 22.5 21 22.5H11C9.61929 22.5 8.5 21.3807 8.5 20V12Z"
        fill="white"
      />
      <circle cx="12" cy="16" r="1.5" fill="#0057FF" />
      <circle cx="16" cy="16" r="1.5" fill="#0057FF" />
      <circle cx="20" cy="16" r="1.5" fill="#0057FF" />
      <path d="M11 22.5L9 25V22.5H11Z" fill="white" />
    </svg>
  );
}

export function ZendeskLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Zendesk Logo"
    >
      <rect width="32" height="32" rx="8" fill="#03363D" />
      <path d="M9 10H16.5L9 17.5V10Z" fill="#78A300" />
      <path d="M23 10V17.5C18.8579 17.5 15.5 14.1421 15.5 10H23Z" fill="#F7A823" />
      <path d="M9 22V14.5C13.1421 14.5 16.5 17.8579 16.5 22H9Z" fill="#F7A823" />
      <path d="M23 22H15.5L23 14.5V22Z" fill="#78A300" />
    </svg>
  );
}

export function FreshdeskLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Freshdesk Logo"
    >
      <rect width="32" height="32" rx="8" fill="#0D824B" />
      <path
        d="M16 8C11.5817 8 8 11.5817 8 16C8 18.3 8.97 20.37 10.53 21.84L9.5 24.5L12.55 23.63C13.6 23.87 14.78 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8Z"
        fill="white"
      />
      <path
        d="M13.5 16.5C14.0523 16.5 14.5 16.0523 14.5 15.5C14.5 14.9477 14.0523 14.5 13.5 14.5C12.9477 14.5 12.5 14.9477 12.5 15.5C12.5 16.0523 12.9477 16.5 13.5 16.5Z"
        fill="#0D824B"
      />
      <path
        d="M18.5 16.5C19.0523 16.5 19.5 16.0523 19.5 15.5C19.5 14.9477 19.0523 14.5 18.5 14.5C17.9477 14.5 17.5 14.9477 17.5 15.5C17.5 16.0523 17.9477 16.5 18.5 16.5Z"
        fill="#0D824B"
      />
      <path
        d="M13.5 19C14.2 19.8 15.1 20.2 16 20.2C16.9 20.2 17.8 19.8 18.5 19"
        stroke="#0D824B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TidioLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tidio Logo"
    >
      <rect width="32" height="32" rx="8" fill="#0556F3" />
      <path
        d="M11 11H21V15H17.5V23H14.5V15H11V11Z"
        fill="white"
      />
      <circle cx="21" cy="21" r="2" fill="#00D284" />
    </svg>
  );
}

export function CompetitorLogo({
  id,
  className = "w-6 h-6",
}: {
  id: string;
  className?: string;
}) {
  switch (id) {
    case "intercom":
      return <IntercomLogo className={className} />;
    case "zendesk":
      return <ZendeskLogo className={className} />;
    case "freshdesk":
      return <FreshdeskLogo className={className} />;
    case "tidio":
      return <TidioLogo className={className} />;
    default:
      return <YediiLogo className={className} />;
  }
}

