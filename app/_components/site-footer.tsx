import Link from "next/link";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { NAVIGATION } from "@/src/constants/navigation";
import { getSiteSettings } from "@/app/_lib/backend-content";

export async function SiteFooter() {
  const settings = await getSiteSettings();
  const { contactInfo, footerSettings, siteIdentity, socialLinks } = settings;
  const copyright =
    footerSettings.copyrightText ||
    `© ${new Date().getFullYear()} ${siteIdentity.siteName}.`;

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <h2 className="text-lg font-bold">{siteIdentity.siteName}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            {footerSettings.description}
          </p>
          {socialLinks.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-white/10 px-3 text-xs font-bold text-slate-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                  href={item.url}
                  key={`${item.label}-${item.url}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
            Menu
          </h3>
          <div className="mt-3 grid gap-2">
            {NAVIGATION.slice(0, 5).map((item) => (
              <Link
                className="text-sm text-slate-200 hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
            Kontak
          </h3>
          <div className="mt-3 grid gap-3 text-sm text-slate-200">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {contactInfo.address}
            </p>
            {contactInfo.phone ? (
              <p className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {contactInfo.phone}
              </p>
            ) : null}
            {contactInfo.email ? (
              <p className="flex gap-2">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {contactInfo.email}
              </p>
            ) : null}
            {contactInfo.officeHours ? (
              <p className="flex gap-2">
                <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {contactInfo.officeHours}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        {copyright}
      </div>
    </footer>
  );
}
