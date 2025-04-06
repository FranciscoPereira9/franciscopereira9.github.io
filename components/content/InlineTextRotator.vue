<template>
  <span
    class="font-extrabold text-lg [text-wrap:balance] text-gray-700 dark:text-gray-200 inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden"
  >
    <ul
      class="block text-left leading-tight [&_li]:block animate-text-slide"
    >
      <li class="text-violet-500">learning Rust.</li>
      <li class="text-emerald-500">on Agentic AI.</li>
      <li class="text-amber-500">learning French.</li>
      <li class="text-cyan-500">working on my writing skills.</li>
      <li class="text-fuchsia-500">building some cool stuff.</li>
      <li class="text-teal-500">out and about.</li>
    </ul>
  </span>
</template>

<style>
.animate-text-slide {
  animation: text-slide 25s cubic-bezier(0.83, 0, 0.17, 1) infinite;
}

@keyframes text-slide {
  0%, 8% {
    transform: translateY(0%);
  }
  10%, 18% {
    transform: translateY(-16.66%);
  }
  20%, 28% {
    transform: translateY(-33.33%);
  }
  30%, 38% {
    transform: translateY(-50%);
  }
  40%, 48% {
    transform: translateY(-66.66%);
  }
  50%, 58% {
    transform: translateY(-83.33%);
  }
  60%, 68% {
    transform: translateY(-66.66%);
  }
  70%, 78% {
    transform: translateY(-50%);
  }
  80%, 88% {
    transform: translateY(-33.33%);
  }
  90%, 98% {
    transform: translateY(-16.66%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
