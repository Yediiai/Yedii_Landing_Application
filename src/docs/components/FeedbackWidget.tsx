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
    <div className="my-10 p-5 sm:p-6 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-2xs">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Was this documentation helpful?
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Your feedback directly improves our developer guides and platform documentation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleVote("helpful")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors cursor-pointer shadow-2xs ${
              vote === "helpful"
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold"
                : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Yes</span>
          </button>

          <button
            onClick={() => handleVote("unhelpful")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors cursor-pointer shadow-2xs ${
              vote === "unhelpful"
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold"
                : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            <ThumbsDown className="w-3.5 h-3.5" />
            <span>No</span>
          </button>
        </div>
      </div>

      {vote !== null && !submitted && (
        <form onSubmit={handleCommentSubmit} className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
          <label className="block text-xs text-zinc-600 dark:text-zinc-400">
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
              className="flex-1 px-3 py-1.5 text-xs rounded-md border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 shadow-2xs"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-medium transition-colors cursor-pointer shadow-2xs"
            >
              <Send className="w-3 h-3" />
              <span>Submit</span>
            </button>
          </div>
        </form>
      )}

      {submitted && (
        <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
          <Check className="w-3.5 h-3.5" />
          <span>Thank you! Your feedback has been recorded.</span>
        </div>
      )}
    </div>
  );
}
