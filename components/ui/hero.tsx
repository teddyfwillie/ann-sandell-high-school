import React, { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundPosition?: string;
  children?: ReactNode;
}

export function Hero({
  title,
  subtitle,
  backgroundPosition = "center",
  children,
}: HeroProps) {
  return (
    <section
      className="relative text-gray-200 py-28"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/backgroundimg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: backgroundPosition,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
