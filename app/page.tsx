import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-[42rem] flex-col px-6">
      <SiteNav page="home" />

      <main className="pt-[max(1.25rem,3vh)] pb-4">
        <p className="label text-soft">hey, I&rsquo;m</p>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          Aarti Panchal
          <span className="orbit" aria-hidden="true">
            <span className="orbit-dot" />
          </span>
        </h1>

        <hr className="mt-3 border-hairline" />

        <p className="label mt-3 text-soft">
          Product Engineer @ Inverix
          <span aria-hidden="true">&ensp;|&ensp;</span>
          Founder @ Khoj
          <span aria-hidden="true">&ensp;|&ensp;</span>
          C4GT &rsquo;26 Fellow @ Piramal Swasthya
          <span aria-hidden="true">&ensp;|&ensp;</span>
          PESU AIML &rsquo;28
        </p>

        <p className="mt-4">
          My pattern is simple: find something chaotic, give it a spine. A
          lost charger drowning in campus WhatsApp groups became{" "}
          <a href="https://khojapp.in">Khoj</a>. Picking up my own test calls
          at Inverix became{" "}
          <a href="https://voxharness-web.vercel.app">voxharness</a>, a CI
          harness that tests voice agents over real phone calls. The 2017-era
          code behind India&rsquo;s{" "}
          <a href="https://github.com/PSMRI/Helpline104-UI-NEXT">
            104 health helpline
          </a>{" "}
          is becoming a clean Angular 20 app, one component at a time. A
          research question I couldn&rsquo;t stop pulling on became{" "}
          <a href="https://agent-aria.streamlit.app">ARIA</a>, an agent that
          grades its own work and replans. Molecules in a vial almost became a
          computer. The AIML degree at PES is the excuse; shipping is the
          actual education.
        </p>

        <ul className="mt-4 list-none space-y-1 text-soft">
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">500+</span> students on{" "}
              <a href="https://khojapp.in">Khoj</a> across{" "}
              <span className="num">20+</span> Bengaluru campuses
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">sub-1.4s</span> multilingual voice AI on
              real phone calls &mdash; Hindi, Kannada, Telugu, Tamil
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">28</span> PRs merged to India&rsquo;s
              national{" "}
              <a href="https://github.com/PSMRI/Helpline104-UI-NEXT">
                104 health helpline
              </a>{" "}
              (Angular 4&rarr;20, solo)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <a href="https://voxharness-web.vercel.app">voxharness</a>:
              open-source CI harness for voice agents,{" "}
              <span className="num">69</span> tests passing
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <a href="https://agent-aria.streamlit.app">ARIA</a>: autonomous
              research agent, live at agent-aria.streamlit.app
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">2</span> qubits of NMR quantum computing at
              Quanad Lab
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">20+</span> shipped projects
            </span>
          </li>
        </ul>

        <p className="mt-4">I build what I want to see.</p>
      </main>

      <SiteFooter />
    </div>
  );
}
