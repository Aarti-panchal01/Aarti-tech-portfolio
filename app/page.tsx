const links = [
  { label: "github", href: "https://github.com/Aarti-panchal01" },
  { label: "linkedin", href: "https://linkedin.com/in/aarti-panchal-93196a319" },
  { label: "blogs", href: "https://hashnode.com/@Aarti-panchal01" },
  { label: "khoj", href: "https://khojapp.in" },
  { label: "creative portfolio", href: "https://aarti-panchal.site" },
  { label: "email", href: "mailto:aartipanchal539@gmail.com" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[42rem] px-6 pb-16">
      <p className="label pt-8 text-soft" aria-hidden="true">
        ap
      </p>

      <main>
        <header className="pt-14">
          <p className="label text-soft">hey, I&rsquo;m</p>
          <h1 className="text-5xl font-medium tracking-tight sm:text-6xl">
            Aarti
            <span className="orbit" aria-hidden="true">
              <span className="orbit-dot" />
            </span>
          </h1>

          <hr className="mt-6 border-hairline" />

          <p className="label mt-5 text-soft">
            C4GT &rsquo;26 Fellow @ Piramal Swasthya
            <span aria-hidden="true">&ensp;|&ensp;</span>
            Founder @ Khoj
            <span aria-hidden="true">&ensp;|&ensp;</span>
            B.Tech AIML @ PES University
          </p>
        </header>

        <p className="mt-7">
          I&rsquo;m doing my B.Tech in AI and Machine Learning at PES
          University, Electronic City Campus, Bengaluru. Right now I&rsquo;m a
          Code for GovTech 2026 fellow with AMRIT (Piramal Swasthya),
          rebuilding the UI of India&rsquo;s 104 public health helpline from
          Angular 4 to Angular 20. Before that I founded Khoj, a campus
          lost-and-found platform past 500 users across Bengaluru, spent a
          year on a <span className="whitespace-nowrap">2-qubit</span> NMR
          quantum computer at Quanad Lab, and shipped 20+ projects.
        </p>

        <p className="label mt-7 flex flex-wrap gap-x-2 gap-y-1 text-soft">
          {links.map((l, i) => (
            <span key={l.label}>
              <a href={l.href}>{l.label}</a>
              {i < links.length - 1 && (
                <span aria-hidden="true">&ensp;&middot;</span>
              )}
            </span>
          ))}
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-medium tracking-tight">About me</h2>

          <hr className="mt-5 border-hairline" />

          <p className="mt-7">
            Khoj exists because a lost iPhone charger died in a WhatsApp group
            with 500 unread messages. A group chat is a stream, everything
            scrolls away; a lost-and-found is state, a found item stays found
            until someone claims it. So we built the plain, correct thing:
            posts with a category, a campus, a status, and a photo. React,
            Express, MongoDB. I pitched the MVP at NITK&rsquo;s Incub8,
            rebuilt it from the feedback, and we launched at PES University on
            January 14, 2026. It&rsquo;s live at{" "}
            <a href="https://khojapp.in">khojapp.in</a>.
          </p>

          <p className="mt-6">
            The C4GT fellowship is my deepest technical work. India&rsquo;s
            104 helpline runs on a web app built with Angular 4.1.3, a
            framework whose HTTP layer, component library, and build system no
            longer exist, so upgrading in place was impossible. I&rsquo;m
            rebuilding it on a fresh Angular 20 workspace: roughly 118
            components and 65 services reconstructed on standalone components,
            functional interceptors, RxJS 7, and ZardUI. Of the repo&rsquo;s
            95 commits, 94 are mine. Before the fellowship I&rsquo;d already
            landed contributions across AMRIT&rsquo;s open repos, and I
            contribute through GSSoC &rsquo;26 too.
          </p>

          <p className="mt-6">
            At Quanad Lab I spent a year, from August 2025, on a{" "}
            <span className="whitespace-nowrap">2-qubit</span> quantum
            computer made of liquid: nuclear spins as qubits, radio pulses as
            gates. The design is done and{" "}
            <a href="https://quantum-systems.hashnode.dev/building-a-2-qubit-quantum-computer-using-liquid-state-nmr">
              written up
            </a>
            ; the physical build stalled where a student lab stops being
            enough. It taught me that progress in quantum computing is gated
            less by understanding and more by infrastructure.
          </p>

          <p className="mt-6">
            Also: ARIA, a LangGraph research agent that grades its own results
            and replans anything under 7/10; ProofChain AI, on-chain developer
            credential verification built in about 24 hours at RIFT
            &rsquo;26; rank 113 of 200+ in the AWS AI League at AWS Summit
            Bengaluru 2026. Outside of code I&rsquo;m an NCC Air Wing cadet:
            10+ camps, 2 nationals, Best Air Contingent Award at AIVSC 2024,
            and a microlight sortie over Yelahanka on my 18th birthday.
          </p>

          <p className="mt-6">
            My projects live on{" "}
            <a href="https://github.com/Aarti-panchal01">GitHub</a>. The
            formal version is on{" "}
            <a href="https://linkedin.com/in/aarti-panchal-93196a319">
              LinkedIn
            </a>
            . How I think is on{" "}
            <a href="https://hashnode.com/@Aarti-panchal01">my blogs</a>. The
            creative version of this site is at{" "}
            <a href="https://aarti-panchal.site">aarti-panchal.site</a>. For
            everything else:{" "}
            <a href="mailto:aartipanchal539@gmail.com">
              aartipanchal539@gmail.com
            </a>
            .
          </p>

          <p className="mt-9 text-soft italic">
            One life. Why not just do it all.
          </p>
        </section>
      </main>
    </div>
  );
}
