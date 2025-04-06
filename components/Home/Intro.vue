<template>
  <div class="space-y-6">
    <div class="flex space-x-4">
      <NuxtImg
        src="https://api.dicebear.com/9.x/glass/svg?seed=Christopher"
        alt="avatar"
        class="ring-2 border border-transparent ring-gray-200 dark:ring-white/10 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
        sizes="48px sm:64px"
        placeholder
        format="webp"
      />
      <div class="flex flex-col justify-between">
        <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
          Francisco Jorge
        </h1>
        <HackerText label="Machine Learning Engineer" />
      </div>
    </div>
    <br/>
    <p class="text-gray-900 dark:text-gray-400">

    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Hi there, I'm Francisco 👋
    </p>

    <p class="text-gray-900 dark:text-gray-400">
      I'm a Machine Learning Engineer and AI consultant based in Amsterdam, The Netherlands.
      I'm passionate about designing and building intelligent systems.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Welcome to my corner of the internet! 🤗
    </p>
    <br/>
    <p> Lately, I've been spending my time <InlineTextRotator/> </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Francisco Pereira",
  description:
    "I'm Francisco, Machine Learning Engineer at ML6.",
});
</script>
