"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu as MenuIcon, X } from "lucide-react";

export interface NavSubItem {
  title: string;
  description?: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavSubItem[];
  description?: string;
}

interface ResponsiveNavMenuProps {
  navItems: NavItem[];
}

export default function ResponsiveNavMenu({
  navItems,
}: ResponsiveNavMenuProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href || "#"}
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-100 to-blue-200 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-shadow"
                          >
                            <div className="text-2xl font-bold text-blue-900 mb-3">
                              {item.label} Portal
                            </div>
                            <p className="text-sm leading-tight text-blue-800">
                              {item.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {item.children.map((child) => (
                        <ListItem
                          key={child.href}
                          href={child.href}
                          title={child.title}
                        >
                          {child.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.href || "#"} passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button
          className="text-gray-800"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 px-4 py-6 md:hidden">
          <ul className="space-y-4 text-gray-800">
            {navItems.map((item) =>
              item.children ? (
                <MobileDropdown key={item.label} title={item.label}>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block w-full px-3 py-2 text-sm hover:text-blue-600 hover:bg-blue-50 rounded-md text-left"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </MobileDropdown>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href || "#"}
                    className="block w-full py-2 text-base font-medium hover:text-blue-600 hover:bg-blue-50 rounded-md text-left"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
}

const MobileDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <li>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex justify-between items-center text-base font-medium focus:outline-none"
      >
        <span>{title}</span>
        <span
          className={`transition-transform transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {open && <ul className="mt-2 pl-2 space-y-1">{children}</ul>}
    </li>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
