"use client";

import ResponsiveNavMenu from "@/components/common/Menu/page";
import ProfileSection from "@/components/common/ProfileSection/page";
import { Toggle } from "@/components/ui/toggle";
import Link from "next/link";
function Header() {
  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Employee",
      href: "/employee",
      description:
        "Empower your team — find all employee resources categorized for Senior Staff, Peers, and HR.",
      children: [
        {
          title: "Senior",
          href: "/employee/senior",
          description: "Access management tools and leadership insights.",
        },
        {
          title: "Peer",
          href: "/employee/peer",
          description: "Collaborate with your teammates and peers.",
        },
        {
          title: "HR",
          href: "/employee/hr",
          description: "Review policies, benefits, and employee support.",
        },
      ],
    },
    {
      label: "Organisation",
      href: "/organisation",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  const userMenu = [
    { label: "Profile", onClick: () => console.log("Go to Profile") },
    { label: "Billing", onClick: () => console.log("Go to Billing") },
    { label: "Team", onClick: () => console.log("Go to Team") },
    { label: "Subscription", onClick: () => console.log("Go to Subscription") },
  ];
  return (
    <>
      <div className="flex items-center justify-between px-4 py-4 gap-4">
        <div className="flex-1 text-left">
          <Link href="/">
            <Toggle>TeamMirror</Toggle>
          </Link>
        </div>

        <div className="flex-1 text-center">
          <ResponsiveNavMenu navItems={menuItems} />
        </div>

        <div className="flex-1 text-right">
          <ProfileSection
            avatarUrl="https://github.com/shadcn.png"
            fallback="CN"
            menuLabel="My Account"
            menuItems={userMenu}
          />
        </div>
      </div>
    </>
  );
}
export default Header;
