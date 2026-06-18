"use client";

import { Check, Copy, MessageCircle, Send, Share2 } from "lucide-react";
import { useState } from "react";

type ShareActionsProps = {
  title: string;
};

export function ShareActions({ title }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      label: "WhatsApp",
      getUrl: (encodedTitle: string, encodedUrl: string) =>
        `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: MessageCircle,
    },
    {
      label: "Facebook",
      getUrl: (_encodedTitle: string, encodedUrl: string) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Share2,
    },
    {
      label: "X",
      getUrl: (encodedTitle: string, encodedUrl: string) =>
        `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: Send,
    },
  ];

  const openShareWindow = (
    getUrl: (encodedTitle: string, encodedUrl: string) => string,
  ) => {
    const encodedUrl = encodeURIComponent(window.location.href);
    const encodedTitle = encodeURIComponent(title);

    window.open(
      getUrl(encodedTitle, encodedUrl),
      "_blank",
      "noopener,noreferrer,width=720,height=640",
    );
  };

  const copyLink = async () => {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="rounded-md border border-slate-200 bg-white p-5">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
        Bagikan
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {shareLinks.map((link) => {
          const Icon = link.icon;

          return (
            <button
              className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
              key={link.label}
              onClick={() => openShareWindow(link.getUrl)}
              title={`Bagikan ke ${link.label}`}
              type="button"
            >
              <Icon size={18} aria-hidden="true" />
              <span className="sr-only">Bagikan ke {link.label}</span>
            </button>
          );
        })}
        <button
          className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
          onClick={copyLink}
          type="button"
        >
          {copied ? (
            <Check size={17} aria-hidden="true" />
          ) : (
            <Copy size={17} aria-hidden="true" />
          )}
          {copied ? "Tersalin" : "Salin tautan"}
        </button>
      </div>
    </div>
  );
}
