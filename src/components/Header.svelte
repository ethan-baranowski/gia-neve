<script>
    export let y;

    export let tabs = [
        { name: "Projects & Experience", link: "#projects" },
        { name: "About Me", link: "#about" },
        { name: "Resume", link: "./assets/Gia_Neve_Resume.pdf" },
    ];

    function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-gray-50"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="text-4xl">
        <b class="font-bold poppins">Gia</b> <span class="">Neve</span>
    </h1>
    <div class="ml-10 mr-10 sm:flex text-lg items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a
                href={tab.link}
                class="duration-200 hover:text-green-700"
                target={index === 2 ? "_blank" : ""}
            >
                <p>{tab.name}</p>
            </a>
        {/each}
        <button class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-green-950" on:click={scrollToContact}>
            <div class="absolute top-0 right-full w-full h-full bg-slate-500 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
            <h4 class="relative z-9">Contact Me</h4>
          </button>
    </div>
</header>