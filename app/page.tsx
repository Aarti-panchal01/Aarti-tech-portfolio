import { SiteNav } from "@/components/site-nav";
import { IconLinks } from "@/components/icon-links";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-[42rem] flex-col px-6 pb-14">
      <SiteNav page="home" />

      <main className="pt-[max(4rem,14vh)]">
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
          I&rsquo;m the founder of Khoj, a campus lost-and-found platform past
          500 users across Bengaluru, and a Code for GovTech 2026 fellow with
          AMRIT (Piramal Swasthya), rebuilding the UI of India&rsquo;s 104
          public health helpline from Angular 4 to Angular 20. I&rsquo;m doing
          my B.Tech in AI and Machine Learning at PES University, Electronic
          City Campus, class of 2028.
        </p>

        <p className="mt-5 text-soft">
          Beyond that: a year on a{" "}
          <span className="whitespace-nowrap">2-qubit</span> NMR quantum
          computer at Quanad Lab, 20+ shipped projects, and an NCC Air Wing
          uniform. I build what I want to see.
        </p>

        <div className="mt-8 -ml-2">
          <IconLinks />
        </div>
      </main>
    </div>
  );
}
