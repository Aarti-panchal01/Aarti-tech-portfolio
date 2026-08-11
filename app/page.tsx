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
          C4GT DMP &rsquo;26 Contributor @ Piramal Swasthya
          <span aria-hidden="true">&ensp;|&ensp;</span>
          Founder @ Khoj
          <span aria-hidden="true">&ensp;|&ensp;</span>
          Product Engineer, Inverix (Jun&ndash;Jul &rsquo;26)
          <span aria-hidden="true">&ensp;|&ensp;</span>
          PESU AIML &rsquo;28
        </p>

        <p className="mt-4">
          My pattern is simple: find something chaotic, give it a spine. A
          lost charger drowning in campus WhatsApp groups became{" "}
          <a href="https://khojapp.in">Khoj</a>. Picking up my own test calls
          at Inverix became{" "}
          <a href="https://voxharness-web.vercel.app">voxharness</a>. The
          2017-era code behind India&rsquo;s{" "}
          <a href="https://github.com/PSMRI/Helpline104-UI-NEXT">
            104 health helpline
          </a>{" "}
          is becoming a clean Angular 20 app, one component at a time. The
          AIML degree at PES is the excuse; shipping is the actual education.
        </p>

        <ul className="mt-5 list-none space-y-1.5 text-soft">
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">40+</span> PRs merged into India&rsquo;s
              national{" "}
              <a href="https://github.com/PSMRI/Helpline104-UI-NEXT">
                104 health helpline
              </a>{" "}
              and the wider AMRIT platform &mdash; Angular 4&rarr;20, solo
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="num">sub-1.4s</span> multilingual voice AI on
              real phone calls (
              <a href="/blog/shipping-real-products-as-first-engineering-hire/">
                written up
              </a>
              )
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              <a href="https://voxharness-web.vercel.app">voxharness</a>:
              open-source CI harness for voice agents,{" "}
              <span className="num">69</span> tests green
            </span>
          </li>
          <li className="flex gap-3">
            <span className="num" aria-hidden="true">
              ▸
            </span>
            <span>
              Founded <a href="https://khojapp.in">Khoj</a>, launched Jan{" "}
              <span className="num">2026</span>
            </span>
          </li>
        </ul>

        <p className="mt-5">
          I build what I want to see. The longer version is on{" "}
          <a href="/about/">about</a>.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
