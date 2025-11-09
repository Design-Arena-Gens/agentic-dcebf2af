"use client";

import { motion } from "framer-motion";

const TECHNOLOGIES = [
  { name: "Next.js", description: "Hybrid static & server rendering, App Router, API routes" },
  { name: "React", description: "Component-driven UI with hooks, suspense, and concurrent features" },
  { name: "TypeScript", description: "Robust typing, domain modelling, and maintainable interfaces" },
  { name: "Tailwind CSS", description: "Utility-first styling with rapid iteration" },
  { name: "Node.js", description: "API integrations, serverless functions, background jobs" },
  { name: "Supabase", description: "Full-stack auth, storage, Postgres, and realtime" },
  { name: "Vercel", description: "Automated builds, previews, edge functions, global CDN" },
  { name: "Playwright", description: "End-to-end testing for shipping with confidence" }
];

export function TechGrid() {
  return (
    <motion.div
      className="tech-grid"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {TECHNOLOGIES.map((tech) => (
        <div key={tech.name} className="tech-tile">
          <h3>{tech.name}</h3>
          <p>{tech.description}</p>
        </div>
      ))}
    </motion.div>
  );
}

