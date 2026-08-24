type SocialLinksProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
};

const socialLinks = [
  {
    href: "https://wa.me/37067966793?text=Sveiki%2C%20noriu%20pasikonsultuoti%20d%C4%97l%20svetain%C4%97s.",
    label: "Rašyti per WhatsApp",
    background: "bg-[#25D366]",
    focus: "focus-visible:outline-[#25D366]",
    shadow: "shadow-[#25D366]/25",
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3A12.93 12.93 0 0 0 5.01 22.7L3.3 29l6.45-1.69A12.96 12.96 0 1 0 16.04 3Zm0 23.72a10.74 10.74 0 0 1-5.48-1.5l-.39-.23-3.83 1 1.02-3.73-.25-.39a10.76 10.76 0 1 1 8.93 4.85Zm5.9-8.06c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.61a9.75 9.75 0 0 1-1.8-2.24c-.19-.32-.02-.5.14-.66.15-.14.32-.38.49-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/share/1DdJnAuZuq/",
    label: "Atidaryti SiteStudio Facebook profilį",
    background: "bg-[#1877F2]",
    focus: "focus-visible:outline-[#1877F2]",
    shadow: "shadow-[#1877F2]/25",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
      </svg>
    ),
  },
  {
    href: "https://m.me/61588234395137",
    label: "Rašyti per Messenger",
    background: "bg-[linear-gradient(135deg,#00B2FF,#006AFF,#A033FF)]",
    focus: "focus-visible:outline-[#006AFF]",
    shadow: "shadow-[#006AFF]/25",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.15 2 11.27c0 2.92 1.46 5.52 3.74 7.22V22l3.42-1.88c.9.26 1.86.41 2.84.41 5.52 0 10-4.15 10-9.26S17.52 2 12 2Zm.99 12.48-2.55-2.72-4.98 2.72 5.47-5.81 2.62 2.72 4.91-2.72-5.47 5.81Z" />
      </svg>
    ),
  },
] as const;

const sizeClasses = {
  sm: { link: "h-8 w-8", icon: "h-4 w-4", gap: "gap-2" },
  md: { link: "h-11 w-11", icon: "h-5 w-5", gap: "gap-3" },
  lg: { link: "h-14 w-14", icon: "h-7 w-7", gap: "gap-4" },
} as const;

export default function SocialLinks({ size = "md", className = "", animated = true }: SocialLinksProps) {
  const classes = sizeClasses[size];

  return (
    <div
      className={`items-center ${classes.gap} ${className}`}
      role="group"
      aria-label="Socialiniai kontaktai"
    >
      {socialLinks.map((social, index) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`${animated ? `social-contact-icon social-contact-icon-delay-${index}` : ""} ${classes.link} ${social.background} ${social.focus} ${social.shadow} inline-flex shrink-0 items-center justify-center rounded-full text-white shadow-md transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-3`}
        >
          <span className={`${classes.icon} block [&>svg]:h-full [&>svg]:w-full`}>{social.icon}</span>
        </a>
      ))}
    </div>
  );
}
