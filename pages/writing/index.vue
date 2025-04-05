<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Writing" :description="description" />
    <blockquote class="italic text-lg text-gray-600 dark:text-gray-400 border-l-4 pl-4 border-gray-300 mb-8">
      “The easy, conversational tone of good writing comes only on the eighth rewrite.” &#8212  Paul Graham, Hackers & Painters: Big Ideas from the Computer Age
    </blockquote>
    <br/>
    <br/>
      <ul class="space-y-8 bg-transparent">
        <AppUsesHeader title="Writing" />
      </ul>
    <br/>
    <ul class="space-y-16">
      <li v-for="(writing, id) in writings" :key="id">
        <AppWritingCard :writing="writing" />
      </li>
    </ul>
  </main>
</template>

<script setup>
const description ="Welcome to my writings section. I write about AI, systems engineering and design, and sometimes a bit of whatever inspires me. Here, you’ll find insights, opinions, and explorations on topics that keep me curious and engaged. Grab a coffee ☕ get comfy 🦥 and enjoy some readings!"
useSeoMeta({
  title: "Writing | Francisco Pereira",
  description,
});

const { data: writings } = await useAsyncData("all-writings", () =>
  queryContent("/writing").sort({ published: -1 }).find()
);
</script>
