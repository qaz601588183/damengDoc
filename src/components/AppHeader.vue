<template>
  <header
    class="sticky top-0 left-0 right-0 bg-white border-b border-gray-200 z-50"
  >
    <div
      class="max-w-full mx-auto px-9 h-[100px] flex items-center justify-between"
    >
      <div class="flex items-center justify-between gap-12">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <img :src="logo" alt="logo" class="w-[188px] h-[36px]" />
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <a
            href="#"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >产品</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >解决方案</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >客户</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >生态伙伴</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >文档</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            >社区</a
          >
        </nav>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-4">
        <n-button text class="hidden md:inline-flex">
          <template #icon>
            <svg
              class="w-5 h-5"
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
        </n-button>
        <span class="text-gray-600 text-sm hidden md:inline">登录/注册</span>
        <span class="text-gray-400 hidden md:inline">|</span>
        <span class="text-gray-600 text-sm hidden md:flex items-center gap-1">
          <img :src="localeIcon" alt="locale" class="w-4 h-4" />
          中文
        </span>
        <n-button type="primary" class="rounded-md">
          <img
            :src="downloadIcon"
            alt="download"
            class="w-[14px] h-[10px] mr-1"
          />
          下载中心
        </n-button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { NButton } from "naive-ui";
import downloadIcon from "../assets/download.png";
import localeIcon from "../assets/locale.png";
import logo from "../assets/logo.png";
</script>
