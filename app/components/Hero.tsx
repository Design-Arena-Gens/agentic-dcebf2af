"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="hero-kicker">AI Coding Co-Pilot</span>
        <h1>
          Build modern web products faster with an agent that{" "}
          <span className="hero-highlight">ships production-ready code.</span>
        </h1>
        <p>
          From ideation to deployment, delegate complex Next.js, React, and API tasks to an autonomous coding assistant that
          designs, implements, tests, and launches on Vercel.
        </p>
        <div className="hero-actions">
          <Link href="#capabilities" className="btn btn-primary">
            Explore capabilities
          </Link>
          <Link href="#workflow" className="btn btn-secondary">
            See the workflow
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="hero-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
      />
    </section>
  );
}

