"use client";

import { motion } from "framer-motion";

type WorkflowStep = {
  title: string;
  description: string;
  detail: string;
};

const TIMELINE_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.5, ease: "easeOut" }
  })
};

export function WorkflowTimeline({ steps }: { steps: WorkflowStep[] }) {
  return (
    <ol className="workflow-timeline">
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          className="workflow-step"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={TIMELINE_VARIANTS}
        >
          <div className="workflow-step-index">{String(index + 1).padStart(2, "0")}</div>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <span className="workflow-detail">{step.detail}</span>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

