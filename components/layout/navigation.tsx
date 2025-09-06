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
    icon: IconHome,
  },
  {
    name: "Search",
    path: "/search",
    icon: IconSearch,
  },
  {
    name: "Archive",
    path: "/archive",
    icon: IconArchive,
  },
  {
    name: "Tags",
    path: "/tags",
    icon: IconTag,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: IconSettings,
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
    <nav className="bg-white py-3 px-4">
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
