import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About me | Aarti Panchal",
};

export default function About() {
  return (
    <div className="mx-auto flex min-h-svh max-w-[42rem] flex-col px-6 pb-14">
      <SiteNav page="about" />

      <main className="pt-14 pb-14">
        <h1 className="text-3xl font-medium tracking-tight">About me</h1>

        <hr className="mt-5 border-hairline" />

        <p className="mt-8">
          I&rsquo;m Aarti Panchal. My GitHub bio says &ldquo;I build what I
          want to see,&rdquo; and this page is the longer version of that
          sentence.
        </p>

        <p className="mt-6">
          Khoj exists because a lost iPhone charger died in a WhatsApp group
          with 500 unread messages. A group chat is a stream, everything
          scrolls away; a lost-and-found is state, a found item stays found
          until someone claims it. So we built the plain, correct thing: posts
          with a category, a campus, a status, and a photo. React, Express,
          MongoDB. I pitched the MVP at NITK&rsquo;s Incub8, rebuilt it from
          the feedback, and we launched at PES University on January 14, 2026.
          It&rsquo;s live at <a href="https://khojapp.in">khojapp.in</a>.
        </p>

        <p className="mt-6">
          The C4GT fellowship is my deepest technical work. India&rsquo;s 104
          helpline runs on a web app built with Angular 4.1.3, a framework
          whose HTTP layer, component library, and build system no longer
          exist, so upgrading in place was impossible. I&rsquo;m rebuilding it
          on a fresh Angular 20 workspace: roughly 118 components and 65
          services reconstructed on standalone components, functional
          interceptors, RxJS 7, and ZardUI. Of the repo&rsquo;s 95 commits, 94
          are mine. Before the fellowship I&rsquo;d already landed
          contributions across AMRIT&rsquo;s open repos, and I contribute
          through GSSoC &rsquo;26 too.
        </p>

        <p className="mt-6">
          At Quanad Lab I spent a year, from August 2025, on a{" "}
          <span className="whitespace-nowrap">2-qubit</span> quantum computer
          made of liquid: nuclear spins as qubits, radio pulses as gates. The
          design is done and{" "}
          <a href="https://quantum-systems.hashnode.dev/building-a-2-qubit-quantum-computer-using-liquid-state-nmr">
            written up
          </a>
          ; the physical build stalled where a student lab stops being enough.
          It taught me that progress in quantum computing is gated less by
          understanding and more by infrastructure.
        </p>

        <p className="mt-6">
          Also: ARIA, a LangGraph research agent that grades its own results
          and replans anything under 7/10; ProofChain AI, on-chain developer
          credential verification built in about 24 hours at RIFT &rsquo;26;
          rank 113 of 200+ in the AWS AI League at AWS Summit Bengaluru 2026.
          Outside of code I&rsquo;m an NCC Air Wing cadet: 10+ camps, 2
          nationals, Best Air Contingent Award at AIVSC 2024, and a microlight
          sortie over Yelahanka on my 18th birthday.
        </p>

        <ul className="mt-8 list-none space-y-2">
          <li className="flex flex-wrap gap-x-3">
            <span className="label w-36 shrink-0 pt-1 text-soft">
              my projects
            </span>
            <span>
              <span className="num" aria-hidden="true">
                →&ensp;
              </span>
              <a href="https://github.com/Aarti-panchal01">GitHub</a>
            </span>
          </li>
          <li className="flex flex-wrap gap-x-3">
            <span className="label w-36 shrink-0 pt-1 text-soft">
              the formal version
            </span>
            <span>
              <span className="num" aria-hidden="true">
                →&ensp;
              </span>
              <a href="https://linkedin.com/in/aarti-panchal-93196a319">
                LinkedIn
              </a>
            </span>
          </li>
          <li className="flex flex-wrap gap-x-3">
            <span className="label w-36 shrink-0 pt-1 text-soft">
              how I think
            </span>
            <span>
              <span className="num" aria-hidden="true">
                →&ensp;
              </span>
              <a href="https://hashnode.com/@Aarti-panchal01">my blogs</a>
            </span>
          </li>
          <li className="flex flex-wrap gap-x-3">
            <span className="label w-36 shrink-0 pt-1 text-soft">
              the creative side
            </span>
            <span>
              <span className="num" aria-hidden="true">
                →&ensp;
              </span>
              <a href="https://aarti-panchal.site">aarti-panchal.site</a>
            </span>
          </li>
          <li className="flex flex-wrap gap-x-3">
            <span className="label w-36 shrink-0 pt-1 text-soft">
              everything else
            </span>
            <span>
              <span className="num" aria-hidden="true">
                →&ensp;
              </span>
              <a href="mailto:aartipanchal539@gmail.com">
                aartipanchal539@gmail.com
              </a>
            </span>
          </li>
        </ul>

        <p className="mt-8 text-soft italic">
          One life. Why not just do it all.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
