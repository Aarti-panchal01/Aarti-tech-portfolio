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
          want to see&rdquo;; here&rsquo;s the skimmable version.
        </p>

        {/* What I do */}
        <h2 className="label mt-10 border-b border-hairline pb-2 text-soft">
          What I do
        </h2>
        <p className="mt-4">
          I&rsquo;m a product engineer at{" "}
          <a href="https://inverix.in">Inverix</a>, where I built a production
          multilingual voice AI endpoint that holds real phone calls, and a
          C4GT &rsquo;26 fellow rebuilding India&rsquo;s 104 health helpline.
          My job, over and over, is turning something chaotic into software
          that ships &mdash; lately, voice agents that get tested automatically.
        </p>

        {/* What I've shipped */}
        <h2 className="label mt-10 border-b border-hairline pb-2 text-soft">
          What I&rsquo;ve shipped
        </h2>
        <ul className="mt-4 list-none space-y-4">
          <li>
            <span className="font-medium text-ink">
              <a href="https://voxharness-web.vercel.app">voxharness</a>
            </span>{" "}
            &mdash; voice AI CI testing harness; calls your agent, plays the
            customer, scores it. Zero humans.{" "}
            <span className="label text-soft">
              <a href="https://voxharness-web.vercel.app">Live &#8599;</a>
              &ensp;
              <a href="https://github.com/Aarti-panchal01/voxharness">
                GitHub &#8599;
              </a>
            </span>
          </li>
          <li>
            <span className="font-medium text-ink">
              <a href="https://agent-aria.streamlit.app">ARIA</a>
            </span>{" "}
            &mdash; autonomous research agent that grades its own work and
            replans.{" "}
            <span className="label text-soft">
              <a href="https://agent-aria.streamlit.app">Live &#8599;</a>
              &ensp;
              <a href="https://github.com/Aarti-panchal01/aria-agent">
                GitHub &#8599;
              </a>
            </span>
          </li>
          <li>
            <span className="font-medium text-ink">
              <a href="https://khojapp.in">Khoj</a>
            </span>{" "}
            &mdash; campus lost-and-found, 500+ users across 20+ campuses.{" "}
            <span className="label text-soft">
              <a href="https://khojapp.in">Live &#8599;</a>
              &ensp;
              <a href="https://github.com/Aarti-panchal01">GitHub &#8599;</a>
            </span>
          </li>
          <li>
            <span className="font-medium text-ink">
              <a href="https://github.com/PSMRI/Helpline104-UI-NEXT">
                Helpline104
              </a>
            </span>{" "}
            &mdash; India&rsquo;s national 104 helpline, Angular 4&rarr;20
            migration (solo, 28 PRs).{" "}
            <span className="label text-soft">
              <a href="https://github.com/PSMRI/Helpline104-UI-NEXT">
                GitHub &#8599;
              </a>
            </span>
          </li>
        </ul>

        {/* Where I work */}
        <h2 className="label mt-10 border-b border-hairline pb-2 text-soft">
          Where I work
        </h2>
        <ul className="mt-4 list-none space-y-3 text-soft">
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="text-ink">Product Engineer at Inverix</span>{" "}
              &mdash; multilingual voice AI (sub-1.4s, real calls), Aadhaar/OVS
              integration
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="text-ink">
                C4GT 2026 Fellow at Piramal Swasthya
              </span>{" "}
              &mdash; rebuilding India&rsquo;s 104 health helpline
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="text-ink">Founder of Khoj</span> &mdash; 500+
              users, 20+ Bengaluru campuses
            </span>
          </li>
        </ul>

        <p className="mt-8 text-soft">
          Also: a 2-qubit liquid-state NMR quantum computer at Quanad Lab (
          <a href="/blog/2-qubit-quantum-computer-liquid-state-nmr/">
            written up
          </a>
          ), ProofChain AI at RIFT &rsquo;26, rank 113/200+ in the AWS AI
          League, and NCC Air Wing (2 nationals, Best Air Contingent Award).
        </p>

        <ul className="mt-8 list-none space-y-4 sm:space-y-2">
          <li className="flex flex-col sm:flex-row sm:gap-x-3">
            <span className="label shrink-0 text-soft sm:w-36 sm:pt-1">
              my projects
            </span>
            <span>
              <span className="num" aria-hidden="true">
                &rarr;&ensp;
              </span>
              <a href="https://github.com/Aarti-panchal01">
                stalk my GitHub, it&rsquo;s public anyway
              </a>
            </span>
          </li>
          <li className="flex flex-col sm:flex-row sm:gap-x-3">
            <span className="label shrink-0 text-soft sm:w-36 sm:pt-1">
              the formal version
            </span>
            <span>
              <span className="num" aria-hidden="true">
                &rarr;&ensp;
              </span>
              <a href="https://linkedin.com/in/aarti-panchal-93196a319">
                LinkedIn, where I pretend to be serious
              </a>
            </span>
          </li>
          <li className="flex flex-col sm:flex-row sm:gap-x-3">
            <span className="label shrink-0 text-soft sm:w-36 sm:pt-1">
              how I think
            </span>
            <span>
              <span className="num" aria-hidden="true">
                &rarr;&ensp;
              </span>
              <a href="/blog/">my blog</a>
            </span>
          </li>
          <li className="flex flex-col sm:flex-row sm:gap-x-3">
            <span className="label shrink-0 text-soft sm:w-36 sm:pt-1">
              the creative side
            </span>
            <span>
              <span className="num" aria-hidden="true">
                &rarr;&ensp;
              </span>
              <a href="https://aarti-panchal.site">aarti-panchal.site</a>
            </span>
          </li>
          <li className="flex flex-col sm:flex-row sm:gap-x-3">
            <span className="label shrink-0 text-soft sm:w-36 sm:pt-1">
              everything else
            </span>
            <span>
              <span className="num" aria-hidden="true">
                &rarr;&ensp;
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
