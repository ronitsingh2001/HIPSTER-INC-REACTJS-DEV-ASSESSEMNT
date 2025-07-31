import type { ReactNode } from "react";
import { useTheme } from "../Context/ThemeContext";

export default function MainContentWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <main className={`${theme === "theme2" ? "pt-6 sm:w-[85vw]" : "pt-24"} px-12 h-screen overflow-scroll`}>
      {children}
    </main>
  );
}
