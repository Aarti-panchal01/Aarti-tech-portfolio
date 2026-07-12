# Final site copy (canonical — implementation must use this text verbatim)

Every claim traces to research/facts.md. Do not add, embellish, or reorder facts.

## Meta

- Title: "Aarti Panchal"
- Description: "Engineer at PES University, Bengaluru. C4GT 2026 fellow rebuilding India's 104 health helpline UI. Founder of Khoj. Writes about NMR quantum computing and research agents."

## Intro / bio

# Aarti Panchal

I'm an AI and machine learning undergrad at PES University in Bengaluru. Most of what I do outside class is take messy systems and give them structure: a 2017-era Angular codebase behind India's 104 public health helpline, a campus lost-and-found that used to live in WhatsApp groups, and a vial of molecules we tried to turn into a 2-qubit computer.

**Currently:** rebuilding Helpline104-UI on Angular 20 for AMRIT (Piramal Swasthya) as a Code for GovTech 2026 fellow.

Outside of code I'm an NCC Air Wing cadet. I flew my first microlight sortie at 17 and my second over Yelahanka Air Force Station on my 18th birthday.

## Essay 1

### Rebuilding the plane India's 104 helpline flies on

When you call 104 in much of India, a call-center agent picks up and works through a web app: registering who you are, pulling case history, recording medical advice or a grievance, sometimes walking through a clinical decision tree. That app was built on Angular 4.1.3, released in 2017. The framework it sits on is not just old, it is discontinued: the HTTP layer it uses was deleted from Angular years ago, its component library never left beta, and its build system doesn't exist anymore.

The usual way to upgrade Angular is `ng update`, one version at a time. That works like renovating a house room by room while you live in it, and it works only when the walls are sound. Here the walls themselves were discontinued. So my C4GT 2026 project with AMRIT (the health platform run by Piramal Swasthya) takes the other route: build a new house next door on a modern foundation, and move everything across deliberately. A fresh Angular 20 workspace, then component by component, service by service, the old behavior is reconstructed on primitives that actually exist in 2026: standalone components instead of one giant module, functional interceptors instead of hand-rolled `Http` subclasses, RxJS 7 pipes across roughly a hundred files, and ZardUI on Tailwind in place of jQuery and an abandoned Material beta.

The legacy app is about 118 components and 65 services, and the work is deciding, for each one, what is load-bearing behavior and what is 2017 scaffolding. Since June 10 I've landed the foundation, auth flows, the agent dashboard, the inbound-call workspace with its CTI event listener and call timer, beneficiary registration, SNOMED CT search, prescription and screening forms, and the report suites. The part I find satisfying is that none of this is greenfield glamour. It's public infrastructure that clinical staff depend on every day, and the whole point is that when it ships, nothing about their job should feel broken.

[link: the migration, commit by commit → https://github.com/PSMRI/Helpline104-UI-NEXT | project log → https://github.com/Aarti-panchal01/c4gt-2026-amrit]

## Essay 2

### A computer made of spinning nuclei

The quantum computer I worked on at Quanad Lab is not a golden chandelier in a dilution fridge. It is a small vial of liquid. Every molecule in that vial is identical, and inside each one sit atomic nuclei that behave like tiny compass needles. Put the vial in a strong magnetic field and the needles line up. Hit them with a precisely timed radio pulse and they tip and start to precess, like a spinning top nudged off its axis. Tip one halfway and it points neither up nor down but in a genuine superposition of both. That is a qubit, and the radio pulses are the logic gates.

Starting in August 2025 I worked on the 2-qubit version of this: a hydrogen nucleus and a carbon-13 nucleus in the same molecule, addressable separately because each precesses at its own frequency. Programming it means choreographing pulses, not writing circuits. The duration of a pulse sets how far a spin rotates, its phase sets the axis, and a two-qubit gate is mostly a matter of waiting, letting the natural coupling between the two nuclei do the entangling. You never hear a single molecule, either. The readout is the combined radio echo of an entire ensemble relaxing back into line, Fourier-transformed into a spectrum: averages over roughly a quintillion copies rather than the single collapsed answer the textbooks promise.

I should be honest about where this landed. The design work is done and written up, and the physical build stalled exactly where a student lab stops being enough, because holding two spins coherent through a gate sequence needs a high-stability spectrometer and control timing we did not have. That was the real lesson. I got into this field in 11th grade because superposition sounded impossible; the hardware taught me that progress in quantum computing is gated less by understanding and more by infrastructure, and that is not a sentence a textbook could have sold me.

[link: the full writeup, pulse sequences and all → https://quantum-systems.hashnode.dev/building-a-2-qubit-quantum-computer-using-liquid-state-nmr]

## Essay 3

### An agent that grades its own homework

Most AI "research agents" have a failure mode: they search once, summarize whatever came back, and present it with full confidence. The interesting engineering problem is not making a model search the web. It is making the system notice when its own results are bad.

ARIA is my attempt at that. It is built as a LangGraph state machine with seven nodes, and the one that matters most is the critic. A planner breaks the research goal into six concrete subtasks, an executor runs web searches for each, and then the critic scores every result from 0 to 10 for relevance and quality. If the average falls below 7, the answer is not "ship it anyway." A replanner rewrites the subtasks and the loop runs again. Findings that survive get written to a ChromaDB vector store, so the next session on a related topic starts with memory instead of amnesia, and the output is a structured markdown report rather than a wall of prose.

The honest status: the core loop works, and the UI and test suite are still in progress. But the design conviction stands, and it is the same one I apply everywhere: a system that cannot tell when it is wrong will confidently be wrong, so build the skeptic into the architecture instead of hoping the first draft is good.

[link: ARIA on GitHub → https://github.com/Aarti-panchal01/aria-agent]

## Essay 4

### A lost-and-found is state, not a stream

Khoj started with a lost iPhone charger and a WhatsApp group with 500 unread messages. Someone had found the charger. The owner never saw the post, because a group chat is a stream: everything scrolls away at the speed people type. A lost-and-found is the opposite kind of data. It is state. A found charger stays found until someone claims it, and the system's whole job is to keep that fact visible and searchable for as long as it is true.

So we built the boring, correct thing: a web app where lost and found items are posts with a category, a campus, a status, and a photo, instead of message number 501. React on the front, Express and MongoDB behind it, JWT auth so posts belong to real students. I pitched the MVP at NITK's Incub8, took the feedback, rebuilt it from scratch, and we launched at PES University on January 14, 2026. It has since grown to over 500 users across Bengaluru campuses.

The founder lesson was not technical. It was that the first version we were proud of was the one we threw away, and the version people actually use is plainer than anything we would have designed for a demo.

[link: Khoj on GitHub → https://github.com/Shashanksharma280201/Khoj]

## Footer / links

Heading: "Elsewhere"

- GitHub → https://github.com/Aarti-panchal01
- Hashnode → https://hashnode.com/@Aarti-panchal01
- LinkedIn → https://linkedin.com/in/aarti-panchal-93196a319
- Email → mailto:aartipanchal539@gmail.com

Closing line: "Bengaluru, India. This site is a single page on purpose."

## Notes for implementation

- No em dashes anywhere in body copy (use commas, colons, or periods).
- Headings and copy above are final; typographic quotes may be normalized.
- Essay links render as quiet inline links at the end of each essay, not buttons.
