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

    let status = "";
    const handleSubmit = async data => {
    status = 'Submitting...'
    const formData = new FormData(data.currentTarget)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json
  });
  const result = await response.json();
  if (result.success) {
      console.log(result);
      status = result.message || "Success"
  }
}
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
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

<!--     <section id="contact" class="bg-slate-50 ">
        <div class="py-8 pt-0 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-semibold text-center">Contact Me</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Need further details about my experience? Let me know!</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@domain.com" required>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-semibold text-center text-slate-50 rounded-lg bg-lime-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
        </div>
      </section> -->

    <!-- 
    =======================================================================

    This is a working contact form. To receive email, 
    Replace YOUR_ACCESS_KEY_HERE with your actual Access Key.

    Create Access Key here 👉 https://web3forms.com/

    =======================================================================
 -->

    <section id="contact" class="bg-slate-50">
    <div class="container mx-auto">
      <div class="max-w-xl mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
            Contact Us
          </h1>
          <p class="text-gray-400 dark:text-gray-400">
            Fill up the form below to send us a message.
          </p>
        </div>
        <div class="m-7">
          <form action="https://api.web3forms.com/submit" method="POST" id="form">
            <input type="hidden" name="access_key" value="7f10393f-6648-4773-937f-e900da98483c" />
            <input type="hidden" name="subject" value="New Submission from Web3Forms" />
            <input type="checkbox" name="botcheck" id="" style="display: none;" />
  
            <div class="flex mb-6 space-x-4">
              <div class="w-full md:w-1/2">
                <label for="fname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">First Name</label>
                <input type="text" name="name" id="first_name" placeholder="John" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div class="w-full md:w-1/2">
                <label for="lname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Last Name</label>
                <input type="text" name="last_name" id="lname" placeholder="Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
            </div>
            <div class="flex mb-6 space-x-4">
              <div class="w-full md:w-1/2">
                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                <input type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
  
              <div class="w-full md:w-1/2">
                <label for="phone" class="block text-sm mb-2 text-gray-600 dark:text-gray-400">Phone Number</label>
                <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>
  
              <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
            </div>
            <div class="mb-6">
              <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                Send Message
              </button>
            </div>
            <p class="text-base text-center text-gray-400" id="result"></p>
          </form>
        </div>
      </div>
    </div>
</section>
</main>
