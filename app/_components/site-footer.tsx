import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAVIGATION } from "@/src/constants/navigation";
import { SITE_NAME } from "@/app/_data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <h2 className="text-lg font-bold">{SITE_NAME}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Website jemaat untuk informasi ibadah, organisasi, warta, berita,
            dan pelayanan gereja.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Menu
          </h3>
          <div className="mt-3 grid gap-2">
            {NAVIGATION.slice(0, 5).map((item) => (
              <Link className="text-sm text-slate-200 hover:text-white" href={item.href} key={item.href}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Kontak
          </h3>
          <div className="mt-3 grid gap-3 text-sm text-slate-200">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              Jl. Gereja HKBP No. 1, Indonesia
            </p>
            <p className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              08xx-xxxx-xxxx
            </p>
            <p className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              sekretariat@hkbpjemaat.org
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} {SITE_NAME}. Hak cipta dilayani untuk kemuliaan Tuhan.
      </div>
    </footer>
  );
}
