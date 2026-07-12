import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-[42rem] flex-col px-6">
      <SiteNav page="home" />

      <main className="pt-[max(5rem,18vh)] pb-24">
        <p className="label text-soft">hey, I&rsquo;m</p>
        <h1 className="text-5xl font-medium tracking-tight sm:text-6xl">
          Aarti
          <span className="orbit" aria-hidden="true">
            <span className="orbit-dot" />
          </span>
        </h1>

        <hr className="mt-6 border-hairline" />

        <p className="label mt-6 text-soft">
          C4GT &rsquo;26 Fellow @ Piramal Swasthya
          <span aria-hidden="true">&ensp;|&ensp;</span>
          Founder @ Khoj
          <span aria-hidden="true">&ensp;|&ensp;</span>
          B.Tech AIML @ PES University
        </p>

        <p className="mt-8">
          I&rsquo;m doing my B.Tech in AI and Machine Learning at PES
          University, Electronic City Campus, Bengaluru. Right now I&rsquo;m a
          Code for GovTech 2026 fellow with AMRIT (Piramal Swasthya),
          rebuilding the UI of India&rsquo;s 104 public health helpline from
          Angular 4 to Angular 20. Before that I founded Khoj, a campus
          lost-and-found platform that launched at PES in January 2026 and has
          grown past 500 users across Bengaluru, spent a year on a{" "}
          <span className="whitespace-nowrap">2-qubit</span> NMR quantum
          computer at Quanad Lab, and shipped 20+ projects, from a LangGraph
          research agent that grades its own results to on-chain credential
          verification built in a 24-hour hackathon.
        </p>

        <p className="mt-7 text-soft">
          I like systems that push back: legacy Angular, NMR spectrometers,
          campus WhatsApp groups.
          <br />
          I build what I want to see.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
