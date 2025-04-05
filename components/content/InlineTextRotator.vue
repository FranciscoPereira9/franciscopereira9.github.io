<template>
  <span
    class="font-extrabold text-lg [text-wrap:balance] text-gray-700 dark:text-gray-200 inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden"
  >
    <ul
      class="block text-left leading-tight [&_li]:block animate-text-slide"
    >
      <li class="text-indigo-500">AI Engineering.</li>
      <li class="text-rose-500">System Design.</li>
      <li class="text-yellow-500">Learning Rust.</li>
      <li class="text-sky-500">Building.</li>
      <li class="text-sky-500">Writing.</li>
      <li class="text-sky-500">French.</li>
    </ul>
  </span>
</template>

<style>
.animate-text-slide {
  animation: text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
}

@keyframes text-slide {
  0%,
  15% {
    transform: translateY(0%);
  }

  17%,
  32% {
    transform: translateY(-16.66%);
  }

  34%,
  49% {
    transform: translateY(-33.33%);
  }

  51%,
  66% {
    transform: translateY(-50%);
  }

  68%,
  83% {
    transform: translateY(-66.66%);
  }

  85%,
  100% {
    transform: translateY(-83.33%);
  }
}
</style>
