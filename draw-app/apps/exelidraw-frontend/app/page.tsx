"use client"
import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, Layers, Share2, Lock, InfinityIcon } from "lucide-react";
import { Button }  from "@/components/button"
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import CanvasPreview from "@/components/CanvasPreview";

const features = [
  { icon: Zap, title: "Lightning Fast", description: "..." },
  { icon: Users, title: "Real-time Collaboration", description: "..." },
  { icon: Layers, title: "Infinite Canvas", description: "..." },
  { icon: Share2, title: "Easy Sharing", description: "..." },
  { icon: Lock, title: "Secure", description: "..." },
  { icon: InfinityIcon, title: "Free & Open Source", description: "..." },
];

const steps = [
  { number: "01", title: "Open & Draw", description: "Jump straight into a blank canvas. No signup required." },
  { number: "02", title: "Collaborate", description: "Share a link and sketch together with anyone, anywhere." },
  { number: "03", title: "Export & Share", description: "Download your work or embed it directly into docs and slides." },
];


export default function Home() {
  return (
  <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 canvas-dots opacity-40" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                ✏️ Open Source Whiteboard
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-6xl font-bold leading-tight tracking-tight text-foreground sm:text-7xl lg:text-8xl"
            >
              Where ideas{" "}
              <span className="text-gradient">come alive</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              A collaborative virtual whiteboard for sketching hand-drawn diagrams.
              Simple, fast, and beautiful — just like drawing on paper.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button variant="hero" size="lg" className="gap-2 px-8">
                Start Drawing Free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="hero-outline" size="lg">
                View on GitHub
              </Button>
            </motion.div>
          </div>

          {/* Canvas Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-accent/60" />
              <div className="h-3 w-3 rounded-full bg-primary/40" />
              <span className="ml-2 text-xs text-muted-foreground">Untitled — Sketchflow</span>
            </div>
            <div className="p-4">
              <CanvasPreview />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Everything you need to sketch
            </h2>
            <p className="mt-4 text-muted-foreground">
              Powerful tools wrapped in a simple, intuitive interface.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Simple as 1-2-3
            </h2>
          </motion.div>

          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <span className="font-display text-5xl font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center canvas-dots"
          >
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Ready to sketch?
            </h2>
            <p className="mt-4 text-muted-foreground">
              No signup required. Start drawing in seconds.
            </p>
            <Button variant="hero" size="lg" className="mt-8 gap-2 px-10">
              Open Canvas <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display text-xl font-bold text-foreground">Sketchflow</span>
          <p className="text-sm text-muted-foreground">Open source. Free forever. Made with ❤️</p>
        </div>
      </footer>
    </div>
  )
}