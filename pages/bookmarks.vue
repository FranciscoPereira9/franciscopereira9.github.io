<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.label"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "Iconic interviews, lectures, clips, essays, posts, and many more... Just some internet gems that you'll probably also want to bookmark ✨";
useSeoMeta({
  title: "Bookmarks | Francisco Pereira",
  description,
});

const bookmarks = [
  {
    id: 1,
    label: "Chip Huyen Blog",
    url: "https://huyenchip.com/",
  },
  {
    id: 2,
    label: "Steve Jobs on Failure",
    url: "https://www.youtube.com/watch?v=zkTf0LmDqKI",
  },
  {
    id: 3,
    label: "Steve Jobs Secrets of Life",
    url: "https://www.youtube.com/watch?v=kYfNvmF0Bqw",
  },
];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
