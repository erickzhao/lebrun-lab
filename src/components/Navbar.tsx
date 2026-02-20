/**
 * Site-wide navigation bar — rendered as a React island (`client:load`).
 *
 * This must be a React component rather than a static Astro component because
 * it needs client-side interactivity: the shadcn NavigationMenu dropdowns
 * and the mobile hamburger toggle both require JavaScript event handlers.
 *
 * Structure mirrors the original Gatsby navbar:
 *  - Brand logo + "Lebrun Lab"
 *  - "Lab" dropdown → About, Principal Investigator, Lab members, Alumni
 *  - "Research" dropdown → Projects, Publications, Protocol
 *  - Individual links → Home, News, Contact, Donate, Links
 */
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Home,
  FlaskConical,
  Microscope,
  Newspaper,
  Globe,
  DollarSign,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** A single link item rendered inside a dropdown menu. */
function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <span className="text-sm font-medium leading-none">{children}</span>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

/** A top-level navbar link (no dropdown). */
function NavLink({
  href,
  icon: Icon,
  children,
  onClick,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary no-underline transition-colors hover:text-primary/70"
    >
      <Icon className="size-4" />
      {children}
    </a>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-container-wide items-center justify-between px-4">
        {/* Brand */}
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-bold font-heading text-primary no-underline"
        >
          <img src="/img/favicon-32x32.png" alt="Logo" className="size-6" />
          Lebrun Lab
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => { setMobileOpen(!mobileOpen); }}
          className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* Desktop navigation — shadcn NavigationMenu handles dropdowns */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary no-underline transition-colors hover:text-primary/70">
                    <Home className="size-4" /> Home
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Lab dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-1.5 text-primary">
                  <FlaskConical className="size-4" /> Lab
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1 p-2">
                    <DropdownLink href="/about">About</DropdownLink>
                    <DropdownLink href="/principal-investigator">Principal Investigator</DropdownLink>
                    <DropdownLink href="/team">Lab Members</DropdownLink>
                    <DropdownLink href="/alumni">Alumni</DropdownLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Research dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-1.5 text-primary">
                  <Microscope className="size-4" /> Research
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1 p-2">
                    <DropdownLink href="/research">Projects</DropdownLink>
                    <DropdownLink href="/publications">Publications</DropdownLink>
                    <DropdownLink href="/protocol">Protocol</DropdownLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/news" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary no-underline transition-colors hover:text-primary/70">
                    <Newspaper className="size-4" /> News
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/contact" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary no-underline transition-colors hover:text-primary/70">
                    <Globe className="size-4" /> Contact
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/donate" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary no-underline transition-colors hover:text-primary/70">
                    <DollarSign className="size-4" /> Donate
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/links" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-primary no-underline transition-colors hover:text-primary/70">
                    <ExternalLink className="size-4" /> Links
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile menu — simple list of links, toggled by the hamburger button */}
      <div className={cn("border-t border-border md:hidden", mobileOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 py-3">
          <NavLink href="/" icon={Home} onClick={() => { setMobileOpen(false); }}>Home</NavLink>

          <p className="px-3 pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Lab</p>
          <NavLink href="/about" icon={FlaskConical} onClick={() => { setMobileOpen(false); }}>About</NavLink>
          <NavLink href="/principal-investigator" icon={FlaskConical} onClick={() => { setMobileOpen(false); }}>Principal Investigator</NavLink>
          <NavLink href="/team" icon={FlaskConical} onClick={() => { setMobileOpen(false); }}>Lab Members</NavLink>
          <NavLink href="/alumni" icon={FlaskConical} onClick={() => { setMobileOpen(false); }}>Alumni</NavLink>

          <p className="px-3 pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Research</p>
          <NavLink href="/research" icon={Microscope} onClick={() => { setMobileOpen(false); }}>Projects</NavLink>
          <NavLink href="/publications" icon={Microscope} onClick={() => { setMobileOpen(false); }}>Publications</NavLink>
          <NavLink href="/protocol" icon={Microscope} onClick={() => { setMobileOpen(false); }}>Protocol</NavLink>

          <NavLink href="/news" icon={Newspaper} onClick={() => { setMobileOpen(false); }}>News</NavLink>
          <NavLink href="/contact" icon={Globe} onClick={() => { setMobileOpen(false); }}>Contact</NavLink>
          <NavLink href="/donate" icon={DollarSign} onClick={() => { setMobileOpen(false); }}>Donate</NavLink>
          <NavLink href="/links" icon={ExternalLink} onClick={() => { setMobileOpen(false); }}>Links</NavLink>
        </div>
      </div>
    </nav>
  );
}
