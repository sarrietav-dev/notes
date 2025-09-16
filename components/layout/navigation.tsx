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

const paths = [
  {
    name: "Home",
    path: "/",
    icon: () => <IconHome className="fill-neutral-600 size-6" />,
  },
  {
    name: "Search",
    path: "/search",
    icon: () => <IconSearch className="fill-neutral-600 size-6" />,
  },
  {
    name: "Archive",
    path: "/archive",
    icon: () => <IconArchive className="stroke-neutral-600 size-6 fill-transparent" />,
  },
  {
    name: "Tags",
    path: "/tags",
    icon: () => <IconTag className="stroke-neutral-600 size-6 fill-transparent" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: () => <IconSettings className="fill-neutral-600 size-6" />,
  },
];

export default function Navigation() {
  const pathname = usePathname();

  function navItemClasses(path: string) {
    const isActive =
      path === "/" ? pathname === "/" : pathname?.startsWith(path);

    return cn(
      "rounded py-1 flex justify-center items-center grow",
      isActive ? "bg-blue-50 text-blue-500 fill-blue-500" : "bg-transparent",
    );
  }

  return (
    <nav className="bg-white py-3 px-4 border-t border-t-neutral-200 shadow-lg">
      <ul className="flex w-full">
        {paths.map(({ name, path, icon: Icon }) => (
          <li key={name} className={navItemClasses(path)}>
            <Link
              href={path}
              className="flex flex-col justify-center items-center"
            >
              <Icon />
              <p className="hidden md:block text-xs">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
