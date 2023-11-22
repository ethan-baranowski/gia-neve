<script>
    import Step from "./Step.svelte";

    let steps = [
        {
            name: "Machines",
            icon: "fa fa-wrench",
            description:
                "Some text here",
        },
        {
            name: "Languages",
            icon: "fa fa-code",
            description:
                "Test",
        },
        {
            name: "Software",
            icon: "fa fa-database",
            description:
                "Test",
        },
    ];

    let benefits = [
        {
            metric: "10x",
            name: "Mechancial Engineering Graduate",
            description:
                "descrip",
        },
        {
            name: "a product design & UX finatic",
            description:
                "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.",
        },
        {
            name: "an excellent communicator",
            description:
                "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
        },
    ];

    let projects = [
      {
      title: "Modular Clean Room Design - Aneuvas Technologies",
      sub: "Northern Arizona University Mechanical Engineering Capstone 2023-2024",
      description: "Info for cleanroom"
      },
      {
        title: "E3 Displays",
        sub: "Internship 2021",
        description: "Info for E3",
        imageSrc: "#",
        imageAlt: "#"
      },
      {
        title: "Future Engineers Summer Camp",
        sub: "Northern Arizona University 2022",
        description: "Info for summer camp",
        buttonLabel: "Learn More",
        buttonLink: "#"
      }
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 lg:pb-100"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-lime-500">Gia</span> Neve
                <br /> Mechanical
                <span class="poppins text-lime-500">Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                Welcome to my <span class="text-lime-500">Personal Portfolio</span>
            </p>
            <button
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-slate-500 opacity-20 group-hover:translate-x-full z-0 duration-200"
                />
                <h4 class="relative z-9">Contact Me &rarr;</h4>
            </button>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"images/gia.png"}
                alt=""
                class="animate-fade-in object-cover z-[2] max-h-[70vh]"
            />
        </div>
    </section>
    <section class="py-20 lg:py-32 flex flex-col gap-24 transition ease-in-out" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-lime-500">see</span> my work?
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p class="text-lg">
                    Operational experience with machines such as Stratasy Printers<strong
                        class="text-lime-500">(Fortus 400/250 and J35 PolyJet)</strong
                    >,
                    <strong class="text-lime-500">Markforged Mark Two</strong
                    >, and
                    <strong class="text-lime-500">Bosslaser</strong> Lasercutter
                </p>
            </Step>
            <Step step={steps[1]}>
                <p class="text-lg">
                    Strong exposure to various programming languages such as <strong
                        class="text-lime-500">Python</strong
                    >,
                    <strong class="text-lime-500">MATLAB</strong
                    > and
                    <strong class="text-lime-500">HTML/CSS</strong>
                </p>
            </Step>
            <Step step={steps[2]}>
                <p class="text-lg">
                    Ask me about the software I use! Such as, <strong class="text-lime-500"
                        >Solidworks, LightBurn, GrabCAD, Reality Composer, </strong
                    > and more!
                </p>
            </Step>
        </div>
    </section>

    {#each projects as project, i}
    <div class="{i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-4 project-box">
      <div class="w-full bg-slate-50 p-4">
        <h2 class="text-2xl font-semibold">{project.title}</h2>
        <p class="text-lg mt-2">{project.sub}</p>
        {#if project.buttonLabel && project.buttonLink}
          <a href="{project.buttonLink}" class="mt-4 inline-block px-4 py-2 bg-lime-500 text-white rounded hover:bg-slate-500">{project.buttonLabel}</a>
        {/if}
      </div>
      <div class="w-full bg-slate-100 p-4">
        {#if project.imageSrc && project.imageAlt}
          <img src="{project.imageSrc}" alt="{project.imageAlt}" class="w-full h-auto">
        {/if}
        <p class="mt-2">{project.description}</p>
      </div>
    </div>
    {/each}

<!--     {#each projects as project, i}
      <div class="{i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-4">
        <div class="w-full bg-slate-50 p-4 animate-fade-in-left">
          <h2 class="text-2xl font-semibold">{project.title}</h2>
          <p class="text-lg mt-2">{project.sub}</p>
        </div>
        <div class="w-full bg-slate-100 p-4">

          <p class="mt-2">{project.description}</p>
        </div>
      </div>
    {/each} -->

    <section
        id="about"
        class="py-20 pt-10 lg:p-16 lg:py-32 flex flex-col gap-24 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-slate-400 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-slate-400 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-lime-500">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <div class="flex flex-col gap-10 w-full">
        <div class="bg-slate-50 py-10 sm:py-32">
                <div class="mx-auto w-full px-6 lg:px-8">
                <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
                <div class="mx-auto mt-10 grid w-full grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="./images/python.svg" alt="python" width="158" height="48">
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="./images/matlab.svg" alt="matlab" width="158" height="48">
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="./images/sw.svg" alt="solidworks" width="158" height="48">
                    <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="./images/stratasys-seeklogo.com.svg" alt="stratasy" width="158" height="48">
                    <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="./images/pepe.svg" alt="Statamic" width="158" height="48">
                </div>
                </div>
            </div>
        </div>
    </section>
</main>
