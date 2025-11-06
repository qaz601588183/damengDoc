<template>
  <section class="py-8 md:py-16">
    <div class="w-full max-w-[1440px] px-6 md:px-0 mx-auto">
      <div class="text-center mb-8 md:mb-12">
        <h2
          class="text-lg md:text-xl font-bold text-gray-900 mb-4 text-[18px] md:text-[24px]"
        >
          快速上手
        </h2>
        <div class="w-8 h-0.5 mx-auto" style="background-color: #ec1b34"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <!-- 快速入门 -->
        <n-card
          hoverable
          class="cursor-pointer transition-all hover:shadow-xl rounded-xl border-0"
        >
          <div class="text-left">
            <div class="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4">
              <img
                :src="quickImage"
                alt="快速入门"
                class="w-full h-full object-contain"
              />
            </div>
            <h3
              class="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3"
            >
              快速入门
            </h3>
            <p class="text-gray-600 text-sm md:text-base leading-relaxed">
              30分钟内掌握DM8核心功能,立即体验分布式数据库的强大性能
            </p>
          </div>
        </n-card>

        <!-- 云上部署 -->
        <n-card
          hoverable
          class="cursor-pointer transition-all hover:shadow-xl rounded-xl border-0"
        >
          <div class="text-left">
            <div class="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4">
              <img
                :src="cloudImage"
                alt="云上部署"
                class="w-full h-full object-contain"
              />
            </div>
            <h3
              class="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3"
            >
              云上部署
            </h3>
            <p class="text-gray-600 text-sm md:text-base leading-relaxed">
              详细指导如何在主流云平台部署达梦数据库服务,快速搭建分布式架构
            </p>
          </div>
        </n-card>

        <!-- 开发者工具包 -->
        <n-card
          hoverable
          class="cursor-pointer transition-all hover:shadow-xl rounded-xl border-0"
        >
          <div class="text-left">
            <div class="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4">
              <img
                :src="devImage"
                alt="开发者工具包"
                class="w-full h-full object-contain"
              />
            </div>
            <h3
              class="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3"
            >
              开发者工具包
            </h3>
            <p class="text-gray-600 text-sm md:text-base leading-relaxed">
              获取 SDK/CLI等开发工具,简化DM8应用开发与运维流程
            </p>
          </div>
        </n-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NCard } from "naive-ui";
import cloudImage from "../assets/cloud.png";
import devImage from "../assets/dev.png";
import quickImage from "../assets/quick.png";
</script>
