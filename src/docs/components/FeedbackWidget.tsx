"use client";

import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, Check, Send } from "lucide-react";

interface FeedbackWidgetProps {
  articleId: string;
}

export function FeedbackWidget({ articleId }: FeedbackWidgetProps) {
  const [vote, setVote] = useState<"helpful" | "unhelpful" | null>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (type: "helpful" | "unhelpful") => {
    setVote(type);

    try {
      const stored = JSON.parse(localStorage.getItem("yedii_docs_feedback") || "[]");
      stored.push({
        articleId,
        isHelpful: type === "helpful",
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("yedii_docs_feedback", JSON.stringify(stored));
    } catch {}
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      const stored = JSON.parse(localStorage.getItem("yedii_docs_comments") || "[]");
      stored.push({
        articleId,
        vote,
        comment: comment.trim(),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("yedii_docs_comments", JSON.stringify(stored));
    } catch {}

    setSubmitted(true);
  };

  return (
    <div className="my-10 p-6 rounded-xl border border-[#E5E7EB] bg-white shadow-2xs">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-[#111827]">
            Was this documentation helpful?
          </h4>
          <p className="text-xs text-[#6B7280] mt-0.5">
            Your feedback directly improves our developer guides and platform documentation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleVote("helpful")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
              vote === "helpful"
                ? "bg-emerald-50 border-emerald-500 text-emerald-700"
                : "border-[#E5E7EB] text-[#374151] hover:border-black"
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Yes</span>
          </button>

          <button
            onClick={() => handleVote("unhelpful")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
              vote === "unhelpful"
                ? "bg-red-50 border-red-500 text-red-700"
                : "border-[#E5E7EB] text-[#374151] hover:border-black"
            }`}
          >
            <ThumbsDown className="w-3.5 h-3.5" />
            <span>No</span>
          </button>
        </div>
      </div>

      {vote !== null && !submitted && (
        <form onSubmit={handleCommentSubmit} className="mt-4 pt-4 border-t border-[#F3F4F6] space-y-3">
          <label className="block text-xs text-[#4B5563]">
            {vote === "helpful"
              ? "What was most helpful, or what could we expand on?"
              : "What was missing, unclear, or out of date?"}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Leave optional feedback..."
              className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] text-[#111827] focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141C2E] text-white text-xs font-medium hover:bg-black transition-colors cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Submit</span>
            </button>
          </div>
        </form>
      )}

      {submitted && (
        <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-700">
          <Check className="w-3.5 h-3.5" />
          <span>Thank you! Your feedback has been recorded.</span>
        </div>
      )}
    </div>
  );
}
