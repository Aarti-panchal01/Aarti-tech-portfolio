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
          I build production systems &mdash; voice AI that handles real phone
          calls, government infrastructure that serves millions, and tools that
          solve problems I ran into myself. Currently: Product Engineer at{" "}
          <a href="https://inverix.in">Inverix</a>, C4GT &rsquo;26 Fellow at
          Piramal Swasthya, and founder of{" "}
          <a href="https://khojapp.in">Khoj</a>.
        </p>

        {/* What I've shipped */}
        <h2 className="label mt-10 border-b border-hairline pb-2 text-soft">
          What I&rsquo;ve shipped
        </h2>
        <ul className="mt-4 list-none space-y-4">
          {[
            {
              name: "voxharness",
              nameHref: "https://voxharness-web.vercel.app",
              desc: "voice AI CI testing harness, zero humans",
              live: "https://voxharness-web.vercel.app",
              github: "https://github.com/Aarti-panchal01/voxharness",
            },
            {
              name: "ARIA",
              nameHref: "https://agent-aria.streamlit.app",
              desc: "autonomous research agent with structured critic + replanning",
              live: "https://agent-aria.streamlit.app",
              github: "https://github.com/Aarti-panchal01/aria-agent",
            },
            {
              name: "Khoj",
              nameHref: "https://khojapp.in",
              desc: "campus lost-and-found, 500+ users, 20+ Bengaluru campuses",
              live: "https://khojapp.in",
              github: "https://github.com/Aarti-panchal01",
            },
            {
              name: "Helpline104",
              nameHref: "https://github.com/PSMRI/Helpline104-UI-NEXT",
              desc: "Angular 4→20 migration, India's 104 health helpline, 28 PRs",
              live: null,
              github: "https://github.com/PSMRI/Helpline104-UI-NEXT",
            },
          ].map((p) => (
            <li
              key={p.name}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="min-w-0">
                <span className="font-medium text-ink">
                  <a href={p.nameHref}>{p.name}</a>
                </span>{" "}
                &mdash; {p.desc}
              </span>
              <span className="label shrink-0 whitespace-nowrap text-soft">
                {p.live && (
                  <>
                    <a href={p.live}>Live &#8599;</a>
                    <span aria-hidden="true">&ensp;</span>
                  </>
                )}
                <a href={p.github}>GitHub &#8599;</a>
              </span>
            </li>
          ))}
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
