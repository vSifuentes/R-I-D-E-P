import Link from "next/link";

interface LogoProps {
  href?: string;
  showFullName?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  variant?: "light" | "dark"; // light para fundo claro, dark para fundo escuro
}

export default function Logo({ 
  href = "/", 
  showFullName = false, 
  size = "medium",
  className = "",
  variant = "light"
}: LogoProps) {
  const sizeClasses = {
    small: "text-lg",
    medium: "text-xl md:text-2xl",
    large: "text-4xl md:text-5xl lg:text-6xl"
  };

  const fullNameSizeClasses = {
    small: "text-[10px]",
    medium: "text-xs md:text-sm",
    large: "text-sm md:text-base"
  };

  // Cores individuais para cada letra
  const letterColors = {
    i: variant === "dark" ? "#F4A261" : "#F4A261", // Laranja
    d: variant === "dark" ? "#F9C80E" : "#F9C80E", // Amarelo
    e: variant === "dark" ? "#2A9D8F" : "#2A9D8F", // Verde
    p: "#5F8B9B", // Azul acinzentado sempre
  };
  
  const fullNameColor = variant === "dark" ? "#FFFFFF" : "#0F5E5E";
  
  // Gradiente do R ajustado para fundo escuro (mais claro) ou claro, terminando em azul
  const rGradient = variant === "dark" 
    ? "linear-gradient(135deg, #E63946 0%, #F4A261 20%, #F9C80E 40%, #2A9D8F 60%, #5F8B9B 80%, #5F8B9B 100%)"
    : "linear-gradient(135deg, #E63946 0%, #F4A261 20%, #F9C80E 40%, #2A9D8F 60%, #5F8B9B 80%, #5F8B9B 100%)";

  const logoContent = (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-0.5 md:gap-1">
        {/* R estilizado com gradiente multicolorido (arco-íris) */}
        <span 
          className={`${sizeClasses[size]} font-bold logo-r`}
          style={{
            background: rGradient,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            display: "inline-block",
            textShadow: variant === "light" ? "0 1px 2px rgba(0, 0, 0, 0.1)" : "none",
            filter: variant === "light" ? "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2))" : "none"
          }}
        >
          R
        </span>
        {/* I - Laranja */}
        <span 
          className={`${sizeClasses[size]} font-bold`}
          style={{ color: letterColors.i }}
        >
          I
        </span>
        {/* D - Amarelo */}
        <span 
          className={`${sizeClasses[size]} font-bold`}
          style={{ color: letterColors.d }}
        >
          D
        </span>
        {/* E - Verde */}
        <span 
          className={`${sizeClasses[size]} font-bold`}
          style={{ color: letterColors.e }}
        >
          E
        </span>
        {/* P - Azul acinzentado ou branco */}
        <span 
          className={`${sizeClasses[size]} font-bold`}
          style={{ color: letterColors.p }}
        >
          P
        </span>
      </div>
      {/* Nome completo em teal (opcional) */}
      {showFullName && (
        <div 
          className={`${fullNameSizeClasses[size]} font-medium mt-0.5 leading-tight`}
          style={{ color: fullNameColor }}
        >
          <div>Rede Internacional de Pesquisas sobre</div>
          <div>Desenvolvimento Profissional de Professores</div>
        </div>
      )}
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

