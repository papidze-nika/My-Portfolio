import Styles from "./Home.module.css";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { StarBackground } from "@/components/StarBackground/StarBackground";
import { Navbar } from "@/layout/Navbar/Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle*/}
      <ThemeToggle />
      {/* Background Effects*/}
      <StarBackground />

      {/* Navbar*/}
      <Navbar />
      {/* Main Content*/}

      {/* Footer*/}
    </div>
  );
};
