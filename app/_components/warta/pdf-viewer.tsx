"use client";

import { Check, Copy, Download, ExternalLink, Share2 } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { WartaPdfVersion } from "@/app/_data/warta-content";

type PdfViewerProps = {
  title: string;
  date: string;
  pdfVersions: WartaPdfVersion[];
  description?: string;
};

type PdfDocumentProps = {
  children?: ReactNode;
  className?: string;
  file: string;
  loading?: ReactNode;
  onLoadSuccess?: ({ numPages }: { numPages: number }) => void;
};

type PdfPageProps = {
  className?: string;
  pageNumber: number;
  renderAnnotationLayer?: boolean;
  renderTextLayer?: boolean;
  width: number;
};

type ReactPdfComponents = {
  Document: ComponentType<PdfDocumentProps>;
  Page: ComponentType<PdfPageProps>;
};

export function PdfViewer({
  title,
  date,
  pdfVersions,
  description,
}: PdfViewerProps) {
  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const [reactPdf, setReactPdf] = useState<ReactPdfComponents | null>(null);
  const [selectedLanguage, setSelectedLanguage] =
    useState<WartaPdfVersion["language"]>(
      pdfVersions[0]?.language ?? "indonesia",
    );
  const [copied, setCopied] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [loadedFileUrl, setLoadedFileUrl] = useState("");
  const [pageWidth, setPageWidth] = useState(720);
  const selectedPdf =
    pdfVersions.find((version) => version.language === selectedLanguage) ??
    pdfVersions[0];

  const absoluteFileUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return selectedPdf?.fileUrl ?? "";
    }

    return new URL(selectedPdf?.fileUrl ?? "", window.location.origin).toString();
  }, [selectedPdf?.fileUrl]);

  useEffect(() => {
    let isActive = true;

    const loadReactPdf = async () => {
      const { Document, Page, pdfjs } = await import("react-pdf");

      pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.react-pdf.mjs";

      if (isActive) {
        setReactPdf({
          Document: Document as ComponentType<PdfDocumentProps>,
          Page: Page as ComponentType<PdfPageProps>,
        });
      }
    };

    void loadReactPdf();

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    const container = pdfContainerRef.current;

    if (!container) {
      return;
    }

    const updatePageWidth = () => {
      setPageWidth(Math.max(280, Math.min(container.clientWidth - 32, 900)));
    };
    const observer = new ResizeObserver(updatePageWidth);

    updatePageWidth();
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  if (!selectedPdf) {
    return null;
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(absoluteFileUrl);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = absoluteFileUrl;
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

  const sharePdf = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: `${title} - ${date} (${selectedPdf.label})`,
          url: absoluteFileUrl,
        });
        return;
      } catch {
        return;
      }
    }

    await copyLink();
  };

  return (
    <section className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-hkbp-link">
            PDF Warta {selectedPdf.label}
          </p>
          <h2 className="mt-1 text-xl font-bold text-slate-950">{title}</h2>
          <p className="mt-1 text-sm font-medium text-slate-500">{date}</p>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              {description}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-md border border-slate-200 bg-white p-1">
            {pdfVersions.map((version) => {
              const isSelected = version.language === selectedPdf.language;

              return (
                <button
                  className={`h-8 rounded px-3 text-xs font-bold transition ${
                    isSelected
                      ? "bg-hkbp-primary text-white"
                      : "text-slate-700 hover:bg-hkbp-soft hover:text-hkbp-link"
                  }`}
                  key={version.language}
                  onClick={() => {
                    setSelectedLanguage(version.language);
                    setCopied(false);
                  }}
                  type="button"
                >
                  {version.label}
                </button>
              );
            })}
          </div>
          <a
            className="inline-flex h-10 items-center gap-2 rounded-md bg-hkbp-primary px-3 text-sm font-bold text-white transition hover:bg-hkbp-primary-hover"
            download={selectedPdf.fileName}
            href={selectedPdf.fileUrl}
          >
            <Download size={17} aria-hidden="true" />
            Unduh
          </a>
          <button
            className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 transition hover:border-hkbp-border hover:bg-hkbp-soft hover:text-hkbp-link"
            onClick={sharePdf}
            type="button"
          >
            <Share2 size={17} aria-hidden="true" />
            Share
          </button>
          <button
            className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 transition hover:border-hkbp-border hover:bg-hkbp-soft hover:text-hkbp-link"
            onClick={copyLink}
            type="button"
          >
            {copied ? (
              <Check size={17} aria-hidden="true" />
            ) : (
              <Copy size={17} aria-hidden="true" />
            )}
            {copied ? "Tersalin" : "Salin"}
          </button>
          <a
            className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-hkbp-border hover:bg-hkbp-soft hover:text-hkbp-link"
            href={selectedPdf.fileUrl}
            rel="noreferrer"
            target="_blank"
            title={`Buka PDF ${selectedPdf.label} di tab baru`}
          >
            <ExternalLink size={17} aria-hidden="true" />
            <span className="sr-only">Buka PDF di tab baru</span>
          </a>
        </div>
      </div>

      <div
        className="h-[72vh] min-h-[34rem] overflow-auto bg-slate-100 p-4"
        ref={pdfContainerRef}
      >
        {reactPdf ? (
          <reactPdf.Document
            className="mx-auto grid justify-items-center gap-4"
            file={selectedPdf.fileUrl}
            loading={
              <div className="rounded-md bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm">
                Memuat PDF...
              </div>
            }
            onLoadSuccess={({ numPages: nextNumPages }) => {
              setLoadedFileUrl(selectedPdf.fileUrl);
              setNumPages(nextNumPages);
            }}
          >
            {loadedFileUrl === selectedPdf.fileUrl
              ? Array.from({ length: numPages }, (_, index) => (
                  <reactPdf.Page
                    className="overflow-hidden rounded-sm bg-white shadow-sm"
                    key={`${selectedPdf.fileUrl}-${index + 1}`}
                    pageNumber={index + 1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    width={pageWidth}
                  />
                ))
              : null}
          </reactPdf.Document>
        ) : (
          <div className="mx-auto w-fit rounded-md bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm">
            Memuat PDF...
          </div>
        )}
      </div>
    </section>
  );
}
