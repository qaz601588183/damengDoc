<template>
  <section
    class="pt-24 pb-16 relative overflow-hidden hero-bg"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="w-full max-w-7xl mx-auto px-6">
      <div class="flex flex-col items-center justify-center">
        <!-- Content -->
        <div class="flex-1 w-full lg:max-w-xl">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            达梦文档中心
          </h1>

          <!-- Search Box -->
          <div class="relative w-full max-w-xl">
            <n-input size="large" placeholder="请输入..." class="pr-24">
              <template #prefix>
                <svg
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </template>
            </n-input>
            <n-button
              type="primary"
              size="large"
              class="absolute right-1 top-1/2 -translate-y-1/2 rounded-md"
            >
              搜索
            </n-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NButton, NInput } from "naive-ui";
import bgImage from "../assets/bg.png";
</script>

<style scoped>
.hero-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
