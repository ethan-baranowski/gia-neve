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
                "I have acquired a strong foundation in engineering principles and problem-solving techniques. With my comprehensive knowledge in the field, I am equipped to tackle complex challenges and deliver innovative solutions. My academic background, combined with practical experience gained from working in various domains, enables me to excel in both team environments and individual projects.",
        },
        {
            name: "Experienced Multidisciplinary Engineer",
            description:
                "Demonstrating proficiency in various domains and industries, including mechanical engineering, team collaboration, and individual project management.",
        },
        {
            name: "Versatile Problem Solver",
            description:
                "Successfully tackled challenges in diverse settings, from working at renowned companies like E3, designing displays for esteemed clients like Tesla, to founding and managing a university lab environment.",
        },
    ];

    let projects = [
      {
      title: "Modular Clean Room Design - Aneuvas Technologies",
      sub: "Northern Arizona University Mechanical Engineering Capstone 2023-2024",
      description: "For my senior capstone project, I led a team in designing and building a modular curtained clean room area. The goal was to establish sterile manufacturing capabilities for stroke treatment medical devices while converting the existing clean room into a gowning room. Our project focused on creating a modular clean room that could be easily disassembled and reassembled. We successfully met requirements such as FFU compatibility, positive pressure, space for 6 people, and 10' x 10' floor space per module. Our project contributed to optimizing the workflow and ensuring a sterile environment for medical device assembly.",
      buttonLabel: "Learn More",
      buttonLink: "https://www.ceias.nau.edu/capstone/projects/ME/2024/F23toSp24_CleanRoom/index.html",
      images: [
        {
            src: "/images/cleanroom_des.jpeg",
            alt: "Clean Room Design 1"
        }
      ]
    },
      {
        title: "IDEA Lab Manager",
        sub: "Northern Arizona University 2020 - 2023",
        description: "As one of the original members and designers of the IDEA Lab at NAU, I played an instrumental in enhancing its functionality and creating a welcoming environment for students. My contributions included a range of responsibilities, including creating work order forms, establishing lab rules, expanding machine offerings, repairing 3D printers, training team members, organizing machine information, managing data, coordinating with faculty, ensuring lab safety, educating students on manufacturing methods, providing design feedback, ordering materials, creating informative displays, and maintaining communication with safety staff. The lab's success is a direct result of my proactive approach and dedication as one of the lab's founders and designers.",
        buttonLabel: "Learn More",
        buttonLink: "https://ceias.nau.edu/me/idealab/",
        images: [
        {
            src: "/images/cleanroom_des.jpeg",
            alt: "Clean Room Design 1"
        }
      ]
      },
      {
        title: "E3 Displays",
        sub: "Internship 2021",
        description: "During my internship at E3, I had the opportunity to contribute to a significant project focused on the improvement of a debonder device. This Capstone project, funded by E3 and developed at NAU, aimed to remove glass from digital display electrical components. However, upon delivery, the debonder proved to be inefficient and bulky. My role involved reimagining the design and functionality of the debonder to address its shortcomings. Through careful analysis and innovative thinking, I successfully redesigned the device, making it more compact and efficient in its operation. Additionally, I had the chance to contribute to various aspects of the project, including the design and manufacturing of sheet metal jigs to house electrical components, conducting dry optical bonding testing, and working in the company's cleanroom for product testing and manufacturing. Throughout my internship at E3, I gained valuable experience in problem-solving, design optimization, and collaboration within a professional engineering environment.",
        buttonLabel: "Learn More",
        buttonLink: "https://www.e3displays.com/about-us/",
        images: [
        {
            src: "/images/cleanroom_des.jpeg",
            alt: "Clean Room Design 1"
        }
      ]
      },
      {
        title: "Future Engineers Summer Camp",
        sub: "Northern Arizona University 2022",
        description: "During my time as a Mechanical Engineering New Graduate, I had the opportunity to design and host two impactful summer camps at NAU. The first camp, held in 2021, was a Girls in STEM summer camp aimed at introducing young girls to the exciting world of engineering. The main objective was to break gender stereotypes and showcase that engineering is not limited to boys. Through engaging activities and hands-on projects, the camp provided a solid foundation in engineering fundamentals. Building on the success of the previous year, I organized a second summer camp in 2022 that expanded its reach to elementary students from a reservation. This camp delved deeper into design principles and placed a strong emphasis on robotics. Over the course of a week, the students were immersed in the process of designing, building, and racing LEGO robots. By providing them with practical experience in engineering, we aimed to inspire and empower these young minds to pursue their interests in the field.",
        buttonLabel: "Learn More",
        buttonLink: "#",
        images: [
        {
            src: "/images/cleanroom_des.jpeg",
            alt: "Clean Room Design 1"
        }
      ]
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
            <h2 class="font-light text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-green-700">Gia</span> Neve
                <br /> Mechanical
                <span class="poppins text-green-700">Engineer</span>
            </h2>
            <p class="font-light sm:text-lg md:text-3xl">
                Welcome to my <span class="text-green-700">Personal Portfolio</span>
            </p>
            <a href="./assets/Gia_Neve_Resume.pdf" target="_blank" rel="noopener noreferrer" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950">
                <div class="absolute top-0 right-full w-full h-full bg-slate-500 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="relative z-9">Resume &rarr;</h4>
            </a>
        </div>
        <div class="hero-container">
            <img
                src={"images/gia_eng.jpg"}
                alt=""
                class="animate-fade-in object-cover z-[2] max-h-[70vh] rounded-lg hero-image"
            />
        </div>
    </section>

    <section class="py-20 lg:py-32 flex flex-col gap-24 transition ease-in-out" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="font-light text-large sm:text-xl md:text-2xl">
                Engineering Proficiencies at a Glance
            </h6>
            <h3 class="font-light text-3xl sm:text-4xl md:text-5xl">
                Discover My <span class="poppins text-green-700">Technical Expertise</span>
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p class="text-lg">
                    Operational experience with machines such as Stratasy Printers<strong
                        class="text-green-700">(Fortus 400/250 and J35 PolyJet)</strong
                    >,
                    <strong class="text-green-700">Markforged Mark Two</strong
                    >, and
                    <strong class="text-green-700">Bosslaser</strong> Lasercutter
                </p>
            </Step>
            <Step step={steps[1]}>
                <p class="text-lg">
                    Strong exposure to various programming languages such as <strong
                        class="text-green-700">Python</strong
                    >,
                    <strong class="text-green-700">MATLAB</strong
                    > and
                    <strong class="text-green-700">HTML/CSS</strong>
                </p>
            </Step>
            <Step step={steps[2]}>
                <p class="text-lg">
                    Ask me about the software I use! Such as, <strong class="text-green-700"
                        >Solidworks, LightBurn, GrabCAD, Reality Composer, </strong
                    > and more!
                </p>
            </Step>
        </div>
    </section>
        
    <section class="bg-gray-50 py-20">
            <div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 class="text-2xl font-bold tracki sm:text-3xl">Modular Clean Room Design - Aneuvas Technologies</h3>
                        <p class="mt-3 text-lg dark:text-gray-400">Northern Arizona University Mechanical Engineering Capstone 2023-2024</p>
                        <div class="mt-12 space-y-12">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-700 dark:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-lg font-medium leadi">Design</h4>
                                    <p class="mt-2 dark:text-gray-400">&#8226; Led the design and construction of a modular curtained clean room area</p>
                                    <p class="mt-2 dark:text-gray-400">&#8226; Created a modular clean room for sterile manufacturing of medical devices</p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-700 dark:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-lg font-medium leadi">Technicalities</h4>
                                    <p class="mt-2 dark:text-gray-400">&#8226; Met requirements such as FFU compatibility, positive pressure, and space for 6 people</p>
                                    <p class="mt-2 dark:text-gray-400">&#8226; Optimized workflow and ensured a sterile environment for medical device assembly</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div aria-hidden="true" class="mt-10 lg:mt-0">
                        <img src="/images/cleanroom_des.jpeg" alt="" class="mx-auto rounded-lg shadow-lg dark:bg-gray-500">
                        <br>
                        <img src="/images/team.jpg" alt="" class="mx-auto rounded-lg shadow-lg dark:bg-gray-500">

                    </div>
                </div>

                <div>
                    <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div class="lg:col-start-2">
                            <h3 class="text-2xl font-bold tracki sm:text-3xl ">IDEA Lab Manager</h3>
                            <p class="mt-3 text-lg dark:text-gray-400">Northern Arizona University 2020 - 2023</p>
                            <div class="mt-12 space-y-12">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center w-12 h-12 rounded-md  dark:bg-green-700 dark:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium leadi ">Leadership</h4>
                                        <p class="mt-2 dark:text-gray-400">&#8226; Played a key role in establishing and enhancing the functionality of the IDEA Lab</p>
                                        <p class="mt-2 dark:text-gray-400">&#8226; Managed lab rules, machine offerings, and repairs</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center w-12 h-12 rounded-md  dark:bg-green-700 dark:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium leadi ">Technicalities</h4>
                                        <p class="mt-2 dark:text-gray-400">&#8226; Created work order forms, organized machine information, and managed data</p>
                                        <p class="mt-2 dark:text-gray-400">&#8226; Coordinated with faculty, ensured lab safety, and provided design feedback</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="/images/lab.jpg" alt="" class="mx-auto rounded-lg shadow-lg dark:bg-gray-500">
                        </div>
                    </div>
                </div>

                <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 class="text-2xl font-bold tracki sm:text-3xl">E3 Displays</h3>
                        <p class="mt-3 text-lg dark:text-gray-400">Internship 2021</p>
                        <div class="mt-12 space-y-12">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-700 dark:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-lg font-medium leadi">Redesign</h4>
                                    <p class="mt-2 dark:text-gray-400">&#8226; Redesigned a debonder device to improve efficiency and compactness</p>
                                    <p class="mt-2 dark:text-gray-400">&#8226; Reimagined the design and functionality of the debonder to address shortcomings</p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-700 dark:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-lg font-medium leadi">Technicalities</h4>
                                    <p class="mt-2 dark:text-gray-400">&#8226; Designed and manufactured sheet metal jigs for housing electrical components</p>
                                    <p class="mt-2 dark:text-gray-400">&#8226; Conducted dry optical bonding testing and worked in a cleanroom for product testing</p>
                                    <p class="mt-2 dark:text-gray-400">&#8226; Contributed to various aspects of the project, including problem-solving and collaboration</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div aria-hidden="true" class="mt-10 lg:mt-0">
                        <img id="e3" src="/images/e3.png" alt="" class="mx-auto rounded-lg shadow-lg dark:bg-gray-500">
                    </div>
                </div>

                <div>
                    <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div class="lg:col-start-2">
                            <h3 class="text-2xl font-bold tracki sm:text-3xl ">Future Engineers Summer Camp</h3>
                            <p class="mt-3 text-lg dark:text-gray-400">Northern Arizona University 2021 - 2022</p>
                            <div class="mt-12 space-y-12">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center w-12 h-12 rounded-md  dark:bg-green-700 dark:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium leadi ">Motivation</h4>
                                        <p class="mt-2 dark:text-gray-400">&#8226; Organized summer camps to inspire and empower students in STEM fields</p>
                                        <p class="mt-2 dark:text-gray-400">&#8226; Introduced engineering to young girls and emphasized inclusivity</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center w-12 h-12 rounded-md  dark:bg-green-700 dark:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium leadi ">Design and Education</h4>
                                        <p class="mt-2 dark:text-gray-400">&#8226; Developed engaging activities and hands-on projects to teach engineering fundamentals</p>
                                        <p class="mt-2 dark:text-gray-400">&#8226; Expanded the camp to include elementary students from underprivileged communities, particularly those residing in reservations, with a specific focus on robotics and design principles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="/images/summer-camp.jpg" alt="" class="mx-auto rounded-lg shadow-lg dark:bg-gray-500">
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
       <!--  <section class="py-20">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right ">
                    <caption class="text-2xl font-bold tracki sm:text-3xl p-5 text-left rtl:text-right bg-white dark:bg-gray-50">
                        Relevant Coursework
                        <p class="mt-1 text-sm font-normal">A comprehensive compilation of my coursework and demonstrated expertise, specifically tailored to the engineering field.</p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Course name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Discipline
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Emphasis
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-gray-50 border-b dark:bg-gray-100 ">
                            <th scope="row" class="px-6 py-4 font-normal  whitespace-nowrap">
                                Course A
                            </th>
                            <td class="px-6 py-4">
                                Empty
                            </td>
                            <td class="px-6 py-4">
                                Empty
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam odio eveniet, cum ipsa, nemo, quas explicabo mollitia optio voluptate autem quis rem repudiandae. Asperiores repellendus ad odio eius non.
                            </td>
                        </tr>
                        <tr class="bg-gray-50 dark:bg-gray-150">
                            <th scope="row" class="px-6 py-4 font-normal whitespace-nowrap">
                                Course B
                            </th>
                            <td class="px-6 py-4">
                                Empty
                            </td>
                            <td class="px-6 py-4">
                                Empty
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem minima nam! Fugit quidem quasi qui optio fugiat odit labore ea, incidunt accusamus vitae enim debitis voluptas tempora asperiores ullam.
                            </td>
                        </tr>
                        <tr class="bg-gray-50 border-b dark:bg-gray-100">
                            <th scope="row" class="px-6 py-4 font-normal  whitespace-nowrap">
                                Course C
                            </th>
                            <td class="px-6 py-4">
                                Empty
                            </td>
                            <td class="px-6 py-4">
                                Empty
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam odio eveniet, cum ipsa, nemo, quas explicabo mollitia optio voluptate autem quis rem repudiandae. Asperiores repellendus ad odio eius non.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section> -->

    <section
        id="about"
        class="py-20 pt-10 lg:p-16 lg:py-32 flex flex-col gap-24 sm:gap-20 md:gap-24 relative">
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-slate-400 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-slate-400 py-4"
        >
            <h4 class="text-xl sm:text-xl md:text-2xl">
                Want to know more?
            </h4>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-green-700">about</span> me.
            </h3>
        </div>
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
    </section>

    <section class="py-20">
        <div class="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
            <h2 class="text-3xl font-light">Industry Familiarity</h2>
            <div class="flex flex-wrap justify-center lg:justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Angular" class="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
                    <title>Python</title>
                    <image href="./images/python-svgrepo-com.svg" width="32" height="32" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Angular" class="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
                    <title>MATLAB</title>
                    <image href="./images/matlab-svgrepo-com.svg" width="32" height="32" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Angular" class="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
                    <title>SolidWorks</title>
                    <image href="./images/solidworks-svgrepo-com.svg" width="32" height="32" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Angular" class="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
                    <title>Svelte</title>
                    <image href="./images/svelte-icon-svgrepo-com.svg" width="32" height="32" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Angular" class="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
                    <title>VS Code</title>
                    <image href="./images/visual-studio-code-svgrepo-com.svg" width="32" height="32" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Angular" class="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
                    <title>Microsoft</title>
                    <image href="./images/microsoft-svgrepo-com.svg" width="32" height="32" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Angular" class="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
                    <title>Google</title>
                    <image href="./images/google-logo-search-new-svgrepo-com.svg" width="32" height="32" />
                </svg>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-2 sm:gap-4">
            <img src="./images/Creality.png" alt="Creality Logo" class="w-1/2 h-auto max-w-[200px] mx-auto" />
            <img src="./images/SSYS.png" alt="Stratasys Logo" class="w-1/2 h-auto max-w-[200px] mx-auto" />
        </div>
        
    </section>
    

    <section id="contact" class="bg-slate-50">
    <div class="container mx-auto">
      <div class="max-w-xl mx-auto my-10 p-5 rounded-md shadow-sm">
        <div class="text-center">
          <h1 class="my-3 text-3xl font-light text-gray-700">
            Contact Me
          </h1>
          <p class="text-gray-400 dark:text-gray-400">
            Fill up the form below to send me a message.
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
              <button type="submit" class="w-full px-3 py-4 text-white bg-green-700 rounded-md focus:bg-green-700 focus:outline-none">
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
