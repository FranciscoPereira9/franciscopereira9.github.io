<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="10+ Things I Can't Live Without."
      :description="description"
    />
    <div class="space-y-24">
      <ul class="space-y-8 bg-transparent">
        <AppUsesHeader title="On My Desk" />
        <AppUsesItem v-for="(item, id) in hardware" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="On My Screen" class="bg-transparent" />
        <AppUsesItem v-for="(item, id) in software" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Others" />
        <AppUsesItem v-for="(item, id) in other" :key="id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  "A peek into my personal arsenal. The gear, tech, and software that boost my everyday life. ";
useSeoMeta({
  title: "Essentials | Francisco Pereira",
  description,
});
const { data: items } = await useAsyncData("uses", () =>
  queryContent("/uses").find()
);
const hardware = items.value.filter((item) => item.category === "hardware");
const software = items.value.filter((item) => item.category === "software");
const other = items.value.filter((item) => item.category === "other");
</script>
