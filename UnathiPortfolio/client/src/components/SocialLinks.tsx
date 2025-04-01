import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Button variant="outline" size="icon" asChild>
        <a 
          href="https://github.com/ums-1994" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <Github className="h-5 w-5" />
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild>
        <a 
          href="https://linkedin.com/in/unathi-m-sibanda" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild>
        <a 
          href="mailto:umsibanda.1994@gmail.com"
          aria-label="Email Contact"
        >
          <Mail className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
}