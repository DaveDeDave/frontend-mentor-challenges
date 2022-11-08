<template>
  <div class="lg:max-w-[700px]">
    <div>
      <img
        src="/images/image-web-3-desktop.jpg"
        class="hidden lg:block"
        alt="Cover image"
        width="700"
      />
      <img
        src="/images/image-web-3-mobile.jpg"
        class="w-full lg:hidden"
        alt="Cover image"
      />
    </div>
    <div class="flex flex-col gap-1 py-8 lg:flex-row">
      <div class="py-2 lg:max-w-xs">
        <h1 class="text-5xl font-extrabold">The Bright Future of Web 3.0?</h1>
      </div>
      <div class="flex flex-1 flex-col">
        <div class="flex-1">
          <p class="text-paragraph">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
        </div>
        <div>
          <button
            class="mt-4 bg-soft-red px-8 py-[0.90rem] font-mono text-paragraph text-white transition hover:bg-very-dark-blue"
          >
            R E A D &nbsp;M O R E
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
