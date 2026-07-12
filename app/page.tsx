export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-[40rem] px-6 pb-8 sm:px-8">
        {/* Title block */}
        <header className="pt-[max(7rem,28vh)]">
          <h1 className="font-serif text-[2.6rem] font-medium italic leading-[1.1] tracking-[-0.01em] sm:text-[3.15rem]">
            Aarti Panchal
            <span className="orbit" aria-hidden="true">
              <span className="orbit-dot" />
            </span>
          </h1>

          <p className="mt-10">
            I’m an AI and machine learning undergrad at PES University in
            Bengaluru. Most of what I do outside class is take messy systems
            and give them structure: a 2017-era Angular codebase behind
            India’s 104 public health helpline, a campus lost-and-found that
            used to live in WhatsApp groups, and a vial of molecules we tried
            to turn into a <span className="whitespace-nowrap">2-qubit</span>{" "}
            computer.
          </p>

          <p className="mt-7">
            <span className="label text-accent">Currently:</span>{" "}
            rebuilding Helpline104-UI on Angular 20 for AMRIT (Piramal
            Swasthya) as a Code for GovTech 2026 fellow.
          </p>

          <p className="mt-7">
            Outside of code I’m an NCC Air Wing cadet. I flew my first
            microlight sortie at 17 and my second over Yelahanka Air Force
            Station on my 18th birthday.
          </p>
        </header>

        {/* Essay 01 */}
        <article className="relative mt-28 sm:mt-32">
          <span className="label block text-accent lg:absolute lg:-left-20 lg:top-[0.55em] lg:block">
            01
          </span>
          <h2 className="mt-3 text-[1.45rem] font-medium leading-[1.25] lg:mt-0">
            Rebuilding the plane India’s 104 helpline flies on
          </h2>
          <p className="mt-6">
            When you call 104 in much of India, a call-center agent picks up
            and works through a web app: registering who you are, pulling case
            history, recording medical advice or a grievance, sometimes
            walking through a clinical decision tree. That app was built on
            Angular 4.1.3, released in 2017. The framework it sits on is not
            just old, it is discontinued: the HTTP layer it uses was deleted
            from Angular years ago, its component library never left beta, and
            its build system doesn’t exist anymore.
          </p>
          <p className="mt-6">
            The usual way to upgrade Angular is <code>ng update</code>, one
            version at a time. That works like renovating a house room by room
            while you live in it, and it works only when the walls are sound.
            Here the walls themselves were discontinued. So my C4GT 2026
            project with AMRIT (the health platform run by Piramal Swasthya)
            takes the other route: build a new house next door on a modern
            foundation, and move everything across deliberately. A fresh
            Angular 20 workspace, then component by component, service by
            service, the old behavior is reconstructed on primitives that
            actually exist in 2026: standalone components instead of one giant
            module, functional interceptors instead of hand-rolled{" "}
            <code>Http</code> subclasses, RxJS 7 pipes across roughly a
            hundred files, and ZardUI on Tailwind in place of jQuery and an
            abandoned Material beta.
          </p>
          <p className="mt-6">
            The legacy app is about 118 components and 65 services, and the
            work is deciding, for each one, what is load-bearing behavior and
            what is 2017 scaffolding. Since June 10 I’ve landed the
            foundation, auth flows, the agent dashboard, the inbound-call
            workspace with its CTI event listener and call timer, beneficiary
            registration, SNOMED CT search, prescription and screening forms,
            and the report suites. The part I find satisfying is that none of
            this is greenfield glamour. It’s public infrastructure that
            clinical staff depend on every day, and the whole point is that
            when it ships, nothing about their job should feel broken.
          </p>
          <p className="mt-6 font-mono text-[0.78rem] text-soft">
            <a href="https://github.com/PSMRI/Helpline104-UI-NEXT">
              the migration, commit by commit
            </a>{" "}
            &middot;{" "}
            <a href="https://github.com/Aarti-panchal01/c4gt-2026-amrit">
              project log
            </a>
          </p>
        </article>

        {/* Essay 02 */}
        <article className="relative mt-24 sm:mt-28">
          <span className="label block text-accent lg:absolute lg:-left-20 lg:top-[0.55em] lg:block">
            02
          </span>
          <h2 className="mt-3 text-[1.45rem] font-medium leading-[1.25] lg:mt-0">
            A computer made of spinning nuclei
          </h2>
          <p className="mt-6">
            The quantum computer I worked on at Quanad Lab is not a golden
            chandelier in a dilution fridge. It is a small vial of liquid.
            Every molecule in that vial is identical, and inside each one sit
            atomic nuclei that behave like tiny compass needles. Put the vial
            in a strong magnetic field and the needles line up. Hit them with
            a precisely timed radio pulse and they tip and start to precess,
            like a spinning top nudged off its axis. Tip one halfway and it
            points neither up nor down but in a genuine superposition of
            both. That is a qubit, and the radio pulses are the logic gates.
          </p>
          <p className="mt-6">
            Starting in August 2025 I worked on the 2-qubit version of this:
            a hydrogen nucleus and a carbon-13 nucleus in the same molecule,
            addressable separately because each precesses at its own
            frequency. Programming it means choreographing pulses, not
            writing circuits. The duration of a pulse sets how far a spin
            rotates, its phase sets the axis, and a two-qubit gate is mostly
            a matter of waiting, letting the natural coupling between the two
            nuclei do the entangling. You never hear a single molecule,
            either. The readout is the combined radio echo of an entire
            ensemble relaxing back into line, Fourier-transformed into a
            spectrum: averages over roughly a quintillion copies rather than
            the single collapsed answer the textbooks promise.
          </p>
          <p className="mt-6">
            I should be honest about where this landed. The design work is
            done and written up, and the physical build stalled exactly where
            a student lab stops being enough, because holding two spins
            coherent through a gate sequence needs a high-stability
            spectrometer and control timing we did not have. That was the
            real lesson. I got into this field in 11th grade because
            superposition sounded impossible; the hardware taught me that
            progress in quantum computing is gated less by understanding and
            more by infrastructure, and that is not a sentence a textbook
            could have sold me.
          </p>
          <p className="mt-6 font-mono text-[0.78rem] text-soft">
            <a href="https://quantum-systems.hashnode.dev/building-a-2-qubit-quantum-computer-using-liquid-state-nmr">
              the full writeup, pulse sequences and all
            </a>
          </p>
        </article>

        {/* Essay 03 */}
        <article className="relative mt-24 sm:mt-28">
          <span className="label block text-accent lg:absolute lg:-left-20 lg:top-[0.55em] lg:block">
            03
          </span>
          <h2 className="mt-3 text-[1.45rem] font-medium leading-[1.25] lg:mt-0">
            An agent that grades its own homework
          </h2>
          <p className="mt-6">
            Most AI &ldquo;research agents&rdquo; have a failure mode: they
            search once, summarize whatever came back, and present it with
            full confidence. The interesting engineering problem is not making
            a model search the web. It is making the system notice when its
            own results are bad.
          </p>
          <p className="mt-6">
            ARIA is my attempt at that. It is built as a LangGraph state
            machine with seven nodes, and the one that matters most is the
            critic. A planner breaks the research goal into six concrete
            subtasks, an executor runs web searches for each, and then the
            critic scores every result from 0 to 10 for relevance and quality.
            If the average falls below 7, the answer is not &ldquo;ship it
            anyway.&rdquo; A replanner rewrites the subtasks and the loop runs
            again. Findings that survive get written to a ChromaDB vector
            store, so the next session on a related topic starts with memory
            instead of amnesia, and the output is a structured markdown report
            rather than a wall of prose.
          </p>
          <p className="mt-6">
            The honest status: the core loop works, and the UI and test suite
            are still in progress. But the design conviction stands, and it is
            the same one I apply everywhere: a system that cannot tell when it
            is wrong will confidently be wrong, so build the skeptic into the
            architecture instead of hoping the first draft is good.
          </p>
          <p className="mt-6 font-mono text-[0.78rem] text-soft">
            <a href="https://github.com/Aarti-panchal01/aria-agent">
              ARIA on GitHub
            </a>
          </p>
        </article>

        {/* Essay 04 */}
        <article className="relative mt-24 sm:mt-28">
          <span className="label block text-accent lg:absolute lg:-left-20 lg:top-[0.55em] lg:block">
            04
          </span>
          <h2 className="mt-3 text-[1.45rem] font-medium leading-[1.25] lg:mt-0">
            A lost-and-found is state, not a stream
          </h2>
          <p className="mt-6">
            Khoj started with a lost iPhone charger and a WhatsApp group with
            500 unread messages. Someone had found the charger. The owner
            never saw the post, because a group chat is a stream: everything
            scrolls away at the speed people type. A lost-and-found is the
            opposite kind of data. It is state. A found charger stays found
            until someone claims it, and the system’s whole job is to keep
            that fact visible and searchable for as long as it is true.
          </p>
          <p className="mt-6">
            So we built the boring, correct thing: a web app where lost and
            found items are posts with a category, a campus, a status, and a
            photo, instead of message number 501. React on the front, Express
            and MongoDB behind it, JWT auth so posts belong to real students.
            I pitched the MVP at NITK’s Incub8, took the feedback, rebuilt it
            from scratch, and we launched at PES University on January 14,
            2026. It has since grown to over 500 users across Bengaluru
            campuses.
          </p>
          <p className="mt-6">
            The founder lesson was not technical. It was that the first
            version we were proud of was the one we threw away, and the
            version people actually use is plainer than anything we would
            have designed for a demo.
          </p>
          <p className="mt-6 font-mono text-[0.78rem] text-soft">
            <a href="https://github.com/Shashanksharma280201/Khoj">
              Khoj on GitHub
            </a>
          </p>
        </article>
      </main>

      <footer className="mx-auto mt-28 w-full max-w-[40rem] border-t border-hairline px-6 pb-20 pt-10 sm:mt-32 sm:px-8">
        <h2 className="label text-accent">Elsewhere</h2>
        <p className="mt-5 font-mono text-[0.78rem]">
          <a href="https://github.com/Aarti-panchal01">GitHub</a>{" "}
          &middot;{" "}
          <a href="https://hashnode.com/@Aarti-panchal01">Hashnode</a>{" "}
          &middot;{" "}
          <a href="https://linkedin.com/in/aarti-panchal-93196a319">
            LinkedIn
          </a>{" "}
          &middot; <a href="mailto:aartipanchal539@gmail.com">Email</a>
        </p>
        <p className="mt-8 text-[0.95rem] italic text-soft">
          Bengaluru, India. This site is a single page on purpose.
        </p>
      </footer>
    </>
  );
}
