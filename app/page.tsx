import { Hero } from "./components/Hero";
import { CapabilityCard } from "./components/CapabilityCard";
import { SectionHeading } from "./components/SectionHeading";
import { WorkflowTimeline } from "./components/WorkflowTimeline";
import { TechGrid } from "./components/TechGrid";

const CAPABILITIES = [
  {
    title: "Full-stack web delivery",
    description:
      "Designs responsive UIs, configures Next.js App Router, manages server actions, and wires up APIs with zero boilerplate left for you.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V18a1 1 0 0 1-1 1h-6.75a.25.25 0 0 1-.25-.25V16a.75.75 0 0 0-.75-.75H5A1 1 0 0 1 4 14.25z"
          fill="currentColor"
          opacity=".2"
        />
        <path
          d="M7.5 5A2.5 2.5 0 0 1 10 2.5h4A2.5 2.5 0 0 1 16.5 5v3A2.5 2.5 0 0 1 14 10.5h-4A2.5 2.5 0 0 1 7.5 8z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    title: "API & database fluency",
    description:
      "Implements REST, GraphQL, Supabase, and serverless functions with proper typing, error handling, caching, and observability baked in.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4.5 6.5C4.5 4.567 8.358 3 12 3s7.5 1.567 7.5 3.5S15.642 10 12 10s-7.5-1.567-7.5-3.5Z"
          fill="currentColor"
        />
        <path
          d="M4.5 12c0-1.933 3.858-3.5 7.5-3.5s7.5 1.567 7.5 3.5-3.858 3.5-7.5 3.5-7.5-1.567-7.5-3.5Zm0 5.5c0-1.933 3.858-3.5 7.5-3.5s7.5 1.567 7.5 3.5S15.642 21 12 21s-7.5-1.567-7.5-3.5Z"
          fill="currentColor"
          opacity=".3"
        />
      </svg>
    )
  },
  {
    title: "Automated quality gates",
    description:
      "Sets up linting, prettier, Vitest or Playwright suites, and CI scripts to keep regressions out. Generates fixtures and mocks with thoughtful coverage.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M10.75 4H7.25A1.25 1.25 0 0 0 6 5.25v13.5A1.25 1.25 0 0 0 7.25 20h9.5A1.25 1.25 0 0 0 18 18.75V9.75a.75.75 0 0 0-.22-.53l-4-4a.75.75 0 0 0-.53-.22h-1.75Z"
          fill="currentColor"
        />
        <path
          d="m13 4.5 4.5 4.5H14a1 1 0 0 1-1-1z"
          fill="currentColor"
          opacity=".5"
        />
      </svg>
    )
  },
  {
    title: "UX polish & storytelling",
    description:
      "Crafts narrative-driven landing pages, interactive dashboards, and documentation that explain complex systems with clarity.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 5.75A1.75 1.75 0 0 1 8.75 4h6.5A1.75 1.75 0 0 1 17 5.75v12.5A1.75 1.75 0 0 1 15.25 20h-6.5A1.75 1.75 0 0 1 7 18.25Z"
          fill="currentColor"
          opacity=".2"
        />
        <path
          d="M10 7h4a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2Zm0 4h4a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2Zm0 4h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    title: "Data and AI integrations",
    description:
      "Connects analytics, streaming data pipelines, vector databases, and OpenAI or Anthropic APIs to infuse intelligence into your product.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 4a4 4 0 0 1 4 4v2h1.5a1.5 1.5 0 0 1 0 3H16v1.25a4 4 0 1 1-8 0V13H6.5a1.5 1.5 0 0 1 0-3H8V8a4 4 0 0 1 4-4Z"
          fill="currentColor"
        />
        <path
          d="M8.5 18.5a3.5 3.5 0 0 0 7 0V17h-7Z"
          fill="currentColor"
          opacity=".35"
        />
      </svg>
    )
  },
  {
    title: "Continuous delivery ready",
    description:
      "Produces Vercel-ready deployments, environment setups, observability hooks, and rollout plans so shipping to prod is a one-command affair.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 4c.26 0 .512.102.698.284l7.5 7.35a.75.75 0 0 1-1.047 1.073L18 11.62V18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6.38l-1.151 1.087a.75.75 0 1 1-1.047-1.073l7.5-7.35A.98.98 0 0 1 12 4Z"
          fill="currentColor"
        />
      </svg>
    )
  }
];

const WORKFLOW_STEPS = [
  {
    title: "Understand & scope",
    description:
      "Ingests requirements, audits existing code, identifies constraints, and plans milestones with traceable assumptions.",
    detail: "Outputs architecture, data models, timelines, and risk analysis before touching code."
  },
  {
    title: "Design & implement",
    description:
      "Translates product ideas into clean components, API layers, and data flows using best-in-class patterns and tooling.",
    detail: "Writes production-grade code with inline documentation, accessibility, and performance tuning."
  },
  {
    title: "Validate & iterate",
    description:
      "Runs automated tests, manual QA scripts, and targeted experiments to guarantee quality and UX polish.",
    detail: "Surfaces findings, proposes iterations, and implements improvements within the same loop."
  },
  {
    title: "Ship & monitor",
    description:
      "Deploys to Vercel, configures observability, sets up on-call guidelines, and keeps documentation in sync.",
    detail: "Supports gradual rollouts, feature flags, and incident playbooks to maintain momentum."
  }
];

export default function Page() {
  return (
    <main>
      <Hero />
      <section id="capabilities" className="section section-capabilities">
        <SectionHeading
          eyebrow="What can this agent build?"
          title="Deliver ambitious web products end-to-end"
          description="Gain a teammate that merges product thinking with engineering execution across the stack. Every engagement ships with clarity, automation, and momentum."
        />
        <div className="capability-grid">
          {CAPABILITIES.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </section>
      <section id="workflow" className="section section-workflow">
        <SectionHeading
          eyebrow="How it works"
          title="A transparent agentic workflow"
          description="A predictable four-phase lifecycle keeps communication crisp and deliverables flowing, from first commit to production launch."
        />
        <WorkflowTimeline steps={WORKFLOW_STEPS} />
      </section>
      <section id="tooling" className="section section-tooling">
        <SectionHeading
          eyebrow="Tech stack"
          title="Opinionated about modern tooling"
          description="Plug into proven frameworks, hosting, and QA stacks so you never start from zero or maintain brittle scripts again."
        />
        <TechGrid />
      </section>
      <section className="section section-cta">
        <div className="cta-panel">
          <h2>Ready to build your next release?</h2>
          <p>
            Drop in a product vision, and the agent will scope workloads, craft interfaces, wire up data, validate the experience, and ship it to
            Vercel in a single stream of commits.
          </p>
          <a className="btn btn-primary" href="mailto:founder@example.com">
            Start a build sprint
          </a>
        </div>
      </section>
    </main>
  );
}

