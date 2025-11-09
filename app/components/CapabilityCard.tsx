"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type CapabilityCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  };
};

export function CapabilityCard({ icon, title, description, cta }: CapabilityCardProps) {
  return (
    <motion.article
      className="capability-card"
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="capability-icon">{icon}</div>
      <div className="capability-copy">
        <h3>{title}</h3>
        <p>{description}</p>
        {cta ? (
          <Link className="capability-cta" href={cta.href}>
            {cta.label}
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}

