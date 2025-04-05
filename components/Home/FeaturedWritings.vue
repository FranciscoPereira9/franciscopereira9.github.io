<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      RECENT WRITINGS
    </h2>
    <ul class="space-y-16">
      <li v-for="(writing, id) in writings" :key="id">
        <AppWritingCard :writing="writing" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Writings &rarr;"
        to="/writing"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: writings } = await useAsyncData("writings-home", () =>
  queryContent("/writing")
    .sort({ published: -1 })
    .limit(3)
    .only(["title", "description", "published", "slug", "_path"])
    .find()
);
</script>
