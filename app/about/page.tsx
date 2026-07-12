import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About me | Aarti Panchal",
};

export default function About() {
  return (
    <div className="mx-auto flex min-h-svh max-w-[42rem] flex-col px-6">
      <SiteNav page="about" />

      <main className="pt-16 pb-24">
        <h2 className="text-3xl font-medium tracking-tight">About me</h2>

        <hr className="mt-6 border-hairline" />

        <p className="mt-8">
          I&rsquo;m Aarti Panchal. My GitHub bio says &ldquo;I build what I
          want to see,&rdquo; and this page is the longer version of that
          sentence.
        </p>

        <p className="mt-7">
          Khoj exists because a lost iPhone charger died in a WhatsApp group
          with 500 unread messages. A group chat is a stream, everything
          scrolls away; a lost-and-found is state, a found charger stays found
          until someone claims it. So we built the plain, correct thing: lost
          and found items as posts with a category, a campus, a status, and a
          photo. React in front, Express and MongoDB behind, JWT auth so posts
          belong to real students. I pitched the MVP at NITK&rsquo;s Incub8,
          rebuilt it from the feedback, and we launched at PES University on
          January 14, 2026. It has since grown past 500 users across Bengaluru
          campuses.
        </p>

        <p className="mt-7">
          The C4GT fellowship is the deepest technical work I&rsquo;ve done.
          When you call 104 in much of India, a call-center agent works
          through a web app built on Angular 4.1.3, a framework whose HTTP
          layer, component library, and build system no longer exist.
          Upgrading version by version works like renovating a house room by
          room, and only when the walls are sound; here the walls themselves
          were discontinued. So the project builds a new house next door: a
          fresh Angular 20 workspace, and the old app&rsquo;s roughly 118
          components and 65 services reconstructed deliberately on modern
          primitives, standalone components, functional interceptors, RxJS 7,
          ZardUI on Tailwind. Since June 10 I&rsquo;ve landed the foundation,
          the auth flows, the agent dashboard, the inbound-call workspace with
          its CTI event listener and call timer, beneficiary registration,
          SNOMED CT search, prescription and screening forms, and the report
          suites. Of the repo&rsquo;s 95 commits, 94 are mine. It is public
          health infrastructure that clinical staff use every day, and when it
          ships, nothing about their job should feel broken.
        </p>

        <p className="mt-7">
          Before the fellowship I was already contributing to AMRIT&rsquo;s
          open repos: merged cleanups in MMU-UI, the ZardUI v2 component
          library in Common-UI (Button, Dialog, Form, Input, Loader,
          Pagination, Table, Toast), accessibility and test-suite fixes across
          the helpline modules. I&rsquo;m a GSSoC &rsquo;26 contributor as
          well.
        </p>

        <p className="mt-7">
          For about a year, starting August 2025, I worked at Quanad Lab on a{" "}
          <span className="whitespace-nowrap">2-qubit</span> quantum computer
          made of liquid: nuclear spins as qubits, radio pulses as gates,
          entanglement from the natural coupling between a hydrogen and a
          carbon-13 nucleus in the same molecule. The design work is done and{" "}
          <a href="https://quantum-systems.hashnode.dev/building-a-2-qubit-quantum-computer-using-liquid-state-nmr">
            written up
          </a>
          ; the physical build stalled exactly where a student lab stops being
          enough, because holding two spins coherent needs a high-stability
          spectrometer we did not have. It taught me that progress in quantum
          computing is gated less by understanding and more by infrastructure,
          which is not a sentence a textbook could have sold me.
        </p>

        <p className="mt-7">
          There&rsquo;s more: ARIA, a LangGraph research agent whose critic
          node scores every result and forces a replan below 7/10; ProofChain
          AI, on-chain developer credential verification built in about 24
          hours at RIFT &rsquo;26; a rank of 113 out of 200+ in the AWS AI
          League at AWS Summit Bengaluru 2026, in a field that included
          working engineers. Outside of code I&rsquo;m an NCC Air Wing cadet:
          10+ camps, 2 nationals, the Best Air Contingent Award at AIVSC 2024,
          and a microlight sortie over Yelahanka Air Force Station on my 18th
          birthday.
        </p>

        <p className="mt-7">
          If you want to see what I build, go to{" "}
          <a href="https://github.com/Aarti-panchal01">my GitHub</a>. If you
          want the formal version, go to{" "}
          <a href="https://linkedin.com/in/aarti-panchal-93196a319">
            my LinkedIn
          </a>
          . If you want to read how I think, go to{" "}
          <a href="https://hashnode.com/@Aarti-panchal01">my blogs</a>. If you
          want to talk, write to{" "}
          <a href="mailto:aartipanchal539@gmail.com">
            aartipanchal539@gmail.com
          </a>
          .
        </p>

        <p className="mt-10 text-soft italic">
          One life. Why not just do it all.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
