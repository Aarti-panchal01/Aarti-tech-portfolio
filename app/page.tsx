import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-[42rem] flex-col px-6">
      <SiteNav page="home" />

      <main className="pt-[max(3.5rem,12vh)] pb-14">
        <p className="label text-soft">hey, I&rsquo;m</p>
        <h1 className="text-5xl font-medium tracking-tight sm:text-6xl">
          Aarti
          <span className="orbit" aria-hidden="true">
            <span className="orbit-dot" />
          </span>
        </h1>

        <hr className="mt-6 border-hairline" />

        <p className="label mt-5 text-soft">
          Founder @ Khoj
          <span aria-hidden="true">&ensp;|&ensp;</span>
          C4GT &rsquo;26 Fellow @ Piramal Swasthya
          <span aria-hidden="true">&ensp;|&ensp;</span>
          PESU AIML &rsquo;28
        </p>

        <p className="mt-7">
          My pattern is simple: find something chaotic, give it a spine. A
          lost charger drowning in campus WhatsApp groups became Khoj. The
          2017-era code behind India&rsquo;s 104 health helpline is becoming a
          clean Angular 20 app, one component at a time. Molecules in a vial
          almost became a computer. The AIML degree at PES is the excuse;
          shipping is the actual education.
        </p>

        <ul className="mt-7 list-none space-y-2 text-soft">
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">500+</span> students on Khoj across
              Bengaluru campuses
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">94/95</span> commits on the 104 helpline
              rebuild are mine
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">2</span> qubits of liquid-state NMR at
              Quanad Lab, <span className="num">1</span> year of pulses
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
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">2</span> NCC nationals and a Best Air
              Contingent Award
            </span>
          </li>
        </ul>

        <p className="mt-7">I build what I want to see.</p>
      </main>

      <SiteFooter />
    </div>
  );
}
