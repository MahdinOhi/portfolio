import { Mail, Phone, ExternalLink } from "lucide-react";
import SectionCard from "./SectionCard";

const socialLinks = [
  { name: "Codeforces", url: "https://codeforces.com/profile/MahdinOhi" },
  { name: "Facebook", url: "https://www.facebook.com/mahdin.ohi07" },
  { name: "GitHub", url: "https://github.com/MahdinOhi" },
  { name: "Instagram", url: "https://www.instagram.com/xenon_spectre/" },
  { name: "LeetCode", url: "https://leetcode.com/u/MahdinOhi/" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mahdin-ohi-3b55a0280/",
  },
  { name: "Medium", url: "https://medium.com/@mahdinislamohi" },
];

const ContactSection = () => {
  return (
    <SectionCard id="contact" title="CONTACT">
      <h3 className="font-heading font-bold text-xl mb-4">Contact Me</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="brutal-card-sm bg-primary flex items-center gap-3 transition-all duration-100">
          <Mail className="w-5 h-5 shrink-0" />

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Email
            </p>

            <a
              href="mailto:mahdinislamohi@gmail.com"
              className="font-heading font-bold text-sm underline"
            >
              mahdinislamohi@gmail.com
            </a>
          </div>
        </div>

        <div className="brutal-card-sm bg-accent flex items-center gap-3 transition-all duration-100">
          <Phone className="w-5 h-5 shrink-0" />

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              WhatsApp (Recommended)
            </p>

            <a
              href="https://wa.me/8801996652863"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-bold text-sm underline"
            >
              +8801996652863
            </a>
          </div>
        </div>
      </div>

      <h3 className="font-heading font-bold text-xl mb-4">Others</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="brutal-card-sm bg-secondary flex items-center justify-between transition-all duration-100 cursor-pointer hover:-translate-x-[2px] hover:-translate-y-[2px]">
              <span className="font-heading font-bold text-sm">
                {link.name}
              </span>

              <ExternalLink className="w-4 h-4 shrink-0" />
            </div>
          </a>
        ))}
      </div>
    </SectionCard>
  );
};

export default ContactSection;
