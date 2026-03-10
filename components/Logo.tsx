import Link from "next/link";
import Image from "next/image";
import ridepLogo from "@/public/ridep-logo.png";
import ridepAltLogo from "@/public/RIDEP.png";

interface LogoProps {
  href?: string;
  showFullName?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  variant?: "light" | "dark"; // light para fundo claro, dark para fundo escuro
  useAltLogo?: boolean;
}

export default function Logo({
  href = "/",
  showFullName = false,
  size = "large",
  className = "",
  variant = "light",
  useAltLogo = false,
}: LogoProps) {
  void showFullName;
  void variant;

  const sizeDimensions: Record<
    NonNullable<LogoProps["size"]>,
    { width: number; height: number }
  > = {
    small: { width: 140, height: 48 },
    medium: { width: 200, height: 68 },
    large: { width: 320, height: 108 },
  };

  const logoContent = (
    <div className={`flex flex-col ${className}`}>
      <Image
        src={useAltLogo ? ridepAltLogo : ridepLogo}
        alt="RIDEP - Rede Internacional de Pesquisas sobre Desenvolvimento Profissional de Professores"
        width={sizeDimensions[size].width}
        height={sizeDimensions[size].height}
        priority={size === "large"}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-80 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

