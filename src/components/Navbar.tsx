"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isIndexPage =
    location.pathname === "/" || location.pathname === "/index";

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 20);
    };

    if (isIndexPage) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }

    return () => {
      if (isIndexPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isIndexPage]);

  const desktopLinkClasses = isScrolled
    ? "text-sm font-medium tracking-tight text-foreground/80 transition-colors hover:text-primary"
    : "text-sm font-medium tracking-tight text-white transition-colors hover:text-white/70";

  const triggerClasses = isScrolled
    ? "flex items-center gap-1 text-sm font-medium tracking-tight text-foreground/80 transition-colors hover:text-primary"
    : "flex items-center gap-1 text-sm font-medium tracking-tight text-white transition-colors hover:text-white/70";

  const ctaClasses = isScrolled
    ? "px-4 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 border border-black"
    : "px-4 py-2 text-sm font-semibold rounded-full border border-white text-white transition-colors hover:border-white/70 hover:text-white/70";

  const mobileLinkClasses =
    "text-base font-medium text-foreground transition-colors hover:text-primary";

  const mobileSubLinkClasses =
    "block text-sm text-foreground/65 transition-colors hover:text-primary";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${
        isScrolled
          ? "sticky top-0 inset-x-0 bg-background/90 backdrop-blur-md border-b border-white/60 shadow-sm "
          : "absolute top-0 inset-x-0 bg-transparent"
      } z-50 w-full transition-all duration-300`}>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Link to="/" className="flex items-center gap-2">
            logo
          </Link>
        </motion.div>

        <motion.div
          className="hidden items-center gap-6 md:flex"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}>
            <Link to="/about" className={desktopLinkClasses}>
              About
            </Link>
          </motion.div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuPrimitive.Trigger className={triggerClasses}>
                  Capabilities
                  <ChevronDown className="h-3 w-3" />
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                  <div className="w-full min-w-[220px] max-w-[280px] rounded-xl border border-border bg-background shadow-lg p-1">
                    <Link
                      to="/services"
                      className="flex flex-col gap-1 px-4 py-3 rounded-lg transition-colors hover:bg-secondary">
                      <span className="text-sm font-semibold text-foreground">
                        Service Index
                      </span>
                      <span className="text-xs text-foreground/65">
                        A high-level snapshot of our blueprints.
                      </span>
                    </Link>
                    <Link
                      to="/services/publication"
                      className="flex flex-col gap-1 px-4 py-3 rounded-lg transition-colors hover:bg-secondary">
                      <span className="text-sm font-semibold text-foreground">
                        Editorial Programs
                      </span>
                      <span className="text-xs text-foreground/65">
                        Long-form narratives for digital journals.
                      </span>
                    </Link>
                    <Link
                      to="/services/article"
                      className="flex flex-col gap-1 px-4 py-3 rounded-lg transition-colors hover:bg-secondary">
                      <span className="text-sm font-semibold text-foreground">
                        Thought Pieces
                      </span>
                      {/* <span className="text-xs text-foreground/65">
                        Sharp storytelling for product launches.
                      </span> */}
                    </Link>
                    <Link
                      to="/services/seo"
                      className="flex flex-col gap-1 px-4 py-3 rounded-lg transition-colors hover:bg-secondary">
                      <span className="text-sm font-semibold text-foreground">
                        Findability
                      </span>
                      {/* <span className="text-xs text-foreground/65">
                        Precision optimisation for search visibility.
                      </span> */}
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}>
            <Link to="/search" className={desktopLinkClasses}>
              Resource Hub
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}>
            <Link to="/contact" className={desktopLinkClasses}>
              Connect
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}>
            <Link to="/apply" className={ctaClasses}>
              Join Now
            </Link>
          </motion.div>
        </motion.div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              className={`inline-flex items-center justify-center rounded-full border p-2 transition-colors ${
                isScrolled
                  ? "border-secondary text-foreground hover:bg-secondary"
                  : "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
              }`}>
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 border-l border-border bg-background p-0">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <div className="flex flex-col leading-tight">logo</div>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full border border-transparent p-2 text-foreground/70 transition-colors hover:border-border hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6 px-6 py-6">
                <Link
                  to="/about"
                  className={mobileLinkClasses}
                  onClick={() => setIsMenuOpen(false)}>
                  Studio
                </Link>

                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-foreground/60">
                    Capabilities
                  </p>
                  <div className="space-y-3 pl-3">
                    <Link
                      to="/services"
                      className={mobileSubLinkClasses}
                      onClick={() => setIsMenuOpen(false)}>
                      Service Index
                    </Link>
                    <Link
                      to="/services/publication"
                      className={mobileSubLinkClasses}
                      onClick={() => setIsMenuOpen(false)}>
                      Editorial Programs
                    </Link>
                    <Link
                      to="/services/article"
                      className={mobileSubLinkClasses}
                      onClick={() => setIsMenuOpen(false)}>
                      Thought Pieces
                    </Link>
                    <Link
                      to="/services/seo"
                      className={mobileSubLinkClasses}
                      onClick={() => setIsMenuOpen(false)}>
                      Findability
                    </Link>
                  </div>
                </div>

                <Link
                  to="/search"
                  className={mobileLinkClasses}
                  onClick={() => setIsMenuOpen(false)}>
                  Resource Hub
                </Link>

                <Link
                  to="/contact"
                  className={mobileLinkClasses}
                  onClick={() => setIsMenuOpen(false)}>
                  Connect
                </Link>

                <Link
                  to="/apply"
                  className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  onClick={() => setIsMenuOpen(false)}>
                  Join Now
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};
