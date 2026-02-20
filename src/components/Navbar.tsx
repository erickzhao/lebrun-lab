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

const navLinkClass =
  "flex flex-row items-center gap-1.5 px-3 py-2 text-sm text-primary no-underline hover:bg-transparent hover:text-primary/70";

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
}

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
    <a href={href} onClick={onClick} className={navLinkClass}>
      <Icon className="size-4" />
      {children}
    </a>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => { setMobileOpen(false); };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-container-wide items-center justify-between px-4">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-bold font-heading text-primary no-underline"
        >
          <img src="/img/favicon-32x32.png" alt="Logo" className="size-5" />
          Lebrun Lab
        </a>

        <button
          type="button"
          onClick={() => { setMobileOpen(!mobileOpen); }}
          className="p-2 text-primary md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/" className={navLinkClass}>
                    <Home className="size-4" /> Home
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="gap-1.5 text-primary">
                  <FlaskConical className="size-4" /> Lab
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-44 gap-0.5 p-1.5">
                    <DropdownLink href="/about">About</DropdownLink>
                    <DropdownLink href="/principal-investigator">Principal Investigator</DropdownLink>
                    <DropdownLink href="/team">Lab Members</DropdownLink>
                    <DropdownLink href="/alumni">Alumni</DropdownLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="gap-1.5 text-primary">
                  <Microscope className="size-4" /> Research
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-44 gap-0.5 p-1.5">
                    <DropdownLink href="/research">Projects</DropdownLink>
                    <DropdownLink href="/publications">Publications</DropdownLink>
                    <DropdownLink href="/protocol">Protocol</DropdownLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/news" className={navLinkClass}>
                    <Newspaper className="size-4" /> News
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/contact" className={navLinkClass}>
                    <Globe className="size-4" /> Contact
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/donate" className={navLinkClass}>
                    <DollarSign className="size-4" /> Donate
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/links" className={navLinkClass}>
                    <ExternalLink className="size-4" /> Links
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className={cn("border-t border-border md:hidden", mobileOpen ? "block" : "hidden")}>
        <div className="space-y-0.5 px-4 py-2">
          <NavLink href="/" icon={Home} onClick={closeMobile}>Home</NavLink>

          <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Lab</p>
          <NavLink href="/about" icon={FlaskConical} onClick={closeMobile}>About</NavLink>
          <NavLink href="/principal-investigator" icon={FlaskConical} onClick={closeMobile}>Principal Investigator</NavLink>
          <NavLink href="/team" icon={FlaskConical} onClick={closeMobile}>Lab Members</NavLink>
          <NavLink href="/alumni" icon={FlaskConical} onClick={closeMobile}>Alumni</NavLink>

          <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Research</p>
          <NavLink href="/research" icon={Microscope} onClick={closeMobile}>Projects</NavLink>
          <NavLink href="/publications" icon={Microscope} onClick={closeMobile}>Publications</NavLink>
          <NavLink href="/protocol" icon={Microscope} onClick={closeMobile}>Protocol</NavLink>

          <NavLink href="/news" icon={Newspaper} onClick={closeMobile}>News</NavLink>
          <NavLink href="/contact" icon={Globe} onClick={closeMobile}>Contact</NavLink>
          <NavLink href="/donate" icon={DollarSign} onClick={closeMobile}>Donate</NavLink>
          <NavLink href="/links" icon={ExternalLink} onClick={closeMobile}>Links</NavLink>
        </div>
      </div>
    </nav>
  );
}
