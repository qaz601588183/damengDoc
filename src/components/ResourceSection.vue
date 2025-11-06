<template>
  <section class="py-8 md:py-16 bg-gray-50">
    <div class="max-w-[1440px] px-6 md:px-0 mx-auto">
      <div class="text-center mb-8 md:mb-12">
        <h2
          class="text-lg md:text-xl font-bold text-gray-900 mb-4 text-[18px] md:text-[24px]"
        >
          更多资源
        </h2>
        <div class="w-8 h-0.5 mx-auto" style="background-color: #ec1b34"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <!-- 技术博客 -->
        <div
          class="bg-white rounded-xl p-6 md:p-8 hover:shadow-lg transition-all cursor-pointer"
        >
          <div class="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <img :src="jsIcon" alt="技术博客" class="w-4 h-4 md:w-5 md:h-5" />
            <h3 class="text-lg md:text-xl font-bold text-gray-900">技术博客</h3>
          </div>
          <p class="text-gray-600 mb-4 md:mb-6 leading-relaxed text-base">
            深度解析DM8核心技术原理，实践案例与技术干货定期更新
          </p>
          <a
            href="#"
            class="inline-flex items-center text-[#0053D2] font-medium hover:text-blue-700 text-sm"
          >
            查看博客
            <img
              :src="rightIcon"
              alt="arrow"
              class="ml-1"
              style="width: 12px; height: 5px"
            />
          </a>
        </div>

        <!-- 教学视频 -->
        <div
          class="bg-white rounded-xl p-6 md:p-8 hover:shadow-lg transition-all cursor-pointer"
        >
          <div class="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <img :src="jxIcon" alt="教学视频" class="w-4 h-4 md:w-5 md:h-5" />
            <h3 class="text-lg md:text-xl font-bold text-gray-900">教学视频</h3>
          </div>
          <p class="text-gray-600 mb-4 md:mb-6 leading-relaxed text-base">
            通过可视化教程快速掌握DM8安装部署、操作维护与开发技巧
          </p>
          <a
            href="#"
            class="inline-flex items-center text-[#0053D2] font-medium hover:text-blue-700 text-sm"
          >
            观看视频
            <img
              :src="rightIcon"
              alt="arrow"
              class="ml-1"
              style="width: 12px; height: 5px"
            />
          </a>
        </div>

        <!-- 社区支持 -->
        <div
          class="bg-white rounded-xl p-6 md:p-8 hover:shadow-lg transition-all cursor-pointer"
        >
          <div class="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <img :src="sqIcon" alt="社区支持" class="w-4 h-4 md:w-5 md:h-5" />
            <h3 class="text-lg md:text-xl font-bold text-gray-900">社区支持</h3>
          </div>
          <p class="text-gray-600 mb-4 md:mb-6 leading-relaxed text-base">
            加入开发者社区获取技术支持，与其他开发者交流经验与解决方案
          </p>
          <a
            href="#"
            class="inline-flex items-center text-[#0053D2] font-medium hover:text-blue-700 text-sm"
          >
            加入社区
            <img
              :src="rightIcon"
              alt="arrow"
              class="ml-1"
              style="width: 12px; height: 5px"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import jsIcon from "../assets/js.png";
import jxIcon from "../assets/jx.png";
import rightIcon from "../assets/right.png";
import sqIcon from "../assets/sq.png";
</script>
