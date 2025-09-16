"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconHome,
  IconSearch,
  IconArchive,
  IconTag,
  IconSettings,
} from "@/components/icons";
import cn from "@/utils/cn";

const paths: {
  name: string;
  path: string;
  icon: (props: { isActive: boolean }) => React.ReactNode;
}[]
  = [
    {
      name: "Home",
      path: "/",
      icon: ({ isActive }) => <IconHome className={`size-6 ${isActive ? "fill-blue-500" : "fill-neutral-600"}`} />,
    },
    {
      name: "Search",
      path: "/search",
      icon: ({ isActive }) => <IconSearch className={`size-6 ${isActive ? "fill-blue-500" : "fill-neutral-600"}`} />,
    },
    {
      name: "Archive",
      path: "/archive",
      icon: ({ isActive }) => <IconArchive className={`size-6 fill-transparent ${isActive ? "stroke-blue-500" : "stroke-neutral-600"}`} />,
    },
    {
      name: "Tags",
      path: "/tags",
      icon: ({ isActive }) => <IconTag className={`size-6 fill-transparent ${isActive ? "stroke-blue-500" : "stroke-neutral-600"}`} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: ({ isActive }) => <IconSettings className={`size-6 ${isActive ? "fill-blue-500" : "fill-neutral-600"}`} />,
    },
  ];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white py-3 px-4 border-t border-t-neutral-200 shadow-lg" aria-label="Main navigation">
      <ul className="flex w-full" role="list">
        {paths.map(({ name, path, icon: Icon }) => {
          const isActive = path === "/" ? pathname === "/" : pathname?.startsWith(path);
          return (
            <li key={name} className={cn(
              "rounded py-1 flex justify-center items-center grow",
              isActive ? "bg-blue-50 text-blue-500" : "bg-transparent",
            )}>
              <Link
                href={path}
                className="flex flex-col justify-center items-center"
                aria-label={name}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon isActive={isActive} />
                <span className="hidden md:block text-xs">{name}</span>
                <span className="sr-only md:hidden">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
