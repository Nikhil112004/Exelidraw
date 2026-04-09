"use client"
import { Pen } from "lucide-react";
import { Button } from "@/components/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-primary p-1.5">
            <Pen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl font-bold text-foreground">Sketchflow</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How it works</a>
          <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href={"/signin"}><Button  variant="ghost" size="sm">Sign In</Button></Link>
          <Link href={"/signup"}><Button variant="hero" size="sm">Sign Up</Button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;