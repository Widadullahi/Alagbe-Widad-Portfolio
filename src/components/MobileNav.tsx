import { useState } from "react";
import { Home, User, Code2, FolderOpen, Mail, Menu, X } from "lucide-react";
import profileImg from "@/assets/widad-profile.png";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:hidden">
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-border bg-card px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={profileImg} alt="Widad Alagbe" className="h-8 w-8 rounded-full border border-primary object-cover" />
          <span className="font-heading text-sm font-bold text-foreground">Widad Alagbe</span>
        </div>
        <button onClick={() => setOpen(!open)} className="text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-card pt-20">
          <nav className="flex flex-col gap-1 px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="flex items-center gap-3 rounded-md px-4 py-4 text-muted-foreground transition-colors hover:text-primary"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-body text-base">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
