<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="Speaking"
      :description="description"
    />
    <div class="space-y-24">
      <ul class="space-y-8 bg-transparent">
        <AppUsesHeader title="Talks" />
        <AppUsesItem v-for="(item, id) in talks" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Others" class="bg-transparent" />
        <AppUsesItem v-for="(item, id) in others" :key="id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  "Me and my yaps...";
useSeoMeta({
  title: "Speaking | Francisco Pereira",
  description,
});
const { data: items } = await useAsyncData("speakings", () =>
  queryContent("/speaking").find()
);
const talks = items.value.filter((item) => item.category === "talk");
const others = items.value.filter((item) => item.category === "other");
</script>
