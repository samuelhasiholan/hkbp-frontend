import Link from "next/link";
import { ChevronDown, ChevronRight, Church, Menu } from "lucide-react";
import { NAVIGATION } from "@/src/constants/navigation";
import { getSiteSettings } from "@/app/_lib/backend-content";

type NavigationItem = {
  title: string;
  href: string;
  children?: NavigationItem[];
};

function DesktopDropdownItem({ item }: { item: NavigationItem }) {
  if (!item.children?.length) {
    return (
      <Link
        className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-hkbp-soft hover:text-hkbp-link"
        href={item.href}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div className="group/submenu relative">
      <Link
        className="flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-hkbp-soft hover:text-hkbp-link"
        href={item.href}
      >
        {item.title}
        <ChevronRight size={15} aria-hidden="true" />
      </Link>
      <div className="invisible absolute left-full top-0 z-10 ml-2 w-64 rounded-md border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition group-hover/submenu:visible group-hover/submenu:opacity-100">
        {item.children.map((child) => (
          <Link
            className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-hkbp-soft hover:text-hkbp-link"
            href={child.href}
            key={child.href}
          >
            {child.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileNavigationItem({ item }: { item: NavigationItem }) {
  return (
    <div>
      <Link
        className="block rounded-md px-2 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-hkbp-soft hover:text-hkbp-link"
        href={item.href}
      >
        {item.title}
      </Link>
      {item.children?.length ? (
        <div className="grid gap-1 pl-4">
          {item.children.map((child) => (
            <MobileNavigationItem item={child} key={child.href} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export async function SiteHeader() {
  const settings = await getSiteSettings();
  const { siteIdentity } = settings;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-hkbp-brand text-white">
            {siteIdentity.logoUrl ? (
              <img src={siteIdentity.logoUrl} alt="" className="h-full w-full object-cover" />
            ) : (
              <Church size={22} aria-hidden="true" />
            )}
          </span>
          <span className="min-w-0">
            <span className="block text-base font-bold leading-tight text-slate-950">
              {siteIdentity.siteName}
            </span>
            <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">
              {siteIdentity.denomination}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu utama">
          {NAVIGATION.map((item) =>
            item.children?.length ? (
              <div className="group relative" key={item.href}>
                <Link
                  href={item.href}
                  className="flex h-10 items-center gap-1 rounded-md px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-hkbp-link"
                >
                  {item.title}
                  <ChevronDown size={15} aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-md border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <DesktopDropdownItem item={child} key={child.href} />
                  ))}
                </div>
              </div>
            ) : (
              <Link
                className="flex h-10 items-center rounded-md px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-hkbp-link"
                href={item.href}
                key={item.href}
              >
                {item.title}
              </Link>
            ),
          )}
        </nav>

        <details className="group relative lg:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-slate-200 text-slate-800 transition hover:bg-slate-100 [&::-webkit-details-marker]:hidden">
            <Menu size={20} aria-hidden="true" />
            <span className="sr-only">Buka menu</span>
          </summary>
          <nav
            className="absolute right-0 mt-3 max-h-[calc(100vh-5rem)] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto rounded-md border border-slate-200 bg-white p-3 shadow-xl"
            aria-label="Menu mobile"
          >
            {NAVIGATION.map((item) => (
              <div className="border-b border-slate-100 py-2 last:border-0" key={item.href}>
                <Link className="block py-2 text-sm font-bold text-slate-950" href={item.href}>
                  {item.title}
                </Link>
                {item.children?.length ? (
                  <div className="grid gap-1 pb-1 pl-3">
                    {item.children.map((child) => (
                      <MobileNavigationItem item={child} key={child.href} />
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
