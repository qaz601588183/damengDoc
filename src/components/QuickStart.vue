<template>
  <section class="py-16 bg-white">
    <div class="w-full max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        快速上手
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <!-- 快速入门 -->
        <n-card
          hoverable
          class="cursor-pointer transition-all hover:shadow-xl rounded-xl border-0"
        >
          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">快速入门</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              30分钟快速搭建DM数据库小站，立即拥有分布式在表级数据库的基础能力
            </p>
          </div>
        </n-card>

        <!-- 云上搭建 -->
        <n-card
          hoverable
          class="cursor-pointer transition-all hover:shadow-xl rounded-xl border-0"
        >
          <div class="text-center">
            <div
              class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">云上搭建</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              试用我们全面的在表单真全栈性学习服务，快速掌握数据库核心功能
            </p>
          </div>
        </n-card>

        <!-- 开发者工具包 -->
        <n-card
          hoverable
          class="cursor-pointer transition-all hover:shadow-xl rounded-xl border-0"
        >
          <div class="text-center">
            <div
              class="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              开发者工具包
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              获取 SDK/CLI 等开发工具，瞬间KDM数据服务与场景集成
            </p>
          </div>
        </n-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NCard } from "naive-ui";
</script>
