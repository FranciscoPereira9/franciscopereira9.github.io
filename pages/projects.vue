<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "A collection of projects and experiments from recent years.";
useSeoMeta({
  title: "Projects | Francisco Jorge",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>