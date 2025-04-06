<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <template #not-found>
          <div class="text-center py-12">
            <h1 class="text-2xl font-bold mb-4">Document Not Found</h1>
            <p class="text-gray-600 dark:text-gray-400">The content you're looking for doesn't exist or couldn't be loaded.</p>
            <NuxtLink to="/" class="mt-4 inline-block text-primary-500 hover:text-primary-600">Return to Home</NuxtLink>
          </div>
        </template>
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;
useSeoMeta({
  ogImage: `https://franciscopereira9.github.io/writing/${slug}.png`,
  twitterCard: "summary_large_image",
  articleAuthor: "Francisco Jorge",
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
