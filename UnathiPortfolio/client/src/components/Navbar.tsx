import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Unathi Sibanda
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link 
              key={href} 
              href={href}
              className="relative"
            >
              {location === href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full bg-foreground"
                />
              )}
              {label}
            </Link>
          ))}

          <Button asChild variant="outline">
            <a href="/Unathi_Sibanda_CV.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}