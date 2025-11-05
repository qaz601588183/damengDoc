<template>
  <section class="py-8 md:py-16 bg-gray-50">
    <div class="w-full max-w-7xl mx-auto px-4 md:px-6">
      <div class="text-center mb-8 md:mb-12">
        <h2
          class="text-lg md:text-xl font-bold text-gray-900 mb-4"
          style="font-size: 18px; md:font-size: 20px"
        >
          文档导航
        </h2>
        <div class="w-8 h-0.5 mx-auto" style="background-color: #ec1b34"></div>
      </div>

      <div class="rounded-xl overflow-hidden">
        <!-- Mobile: Horizontal Scroll Tabs -->
        <div class="md:hidden mb-4 overflow-x-auto">
          <div class="flex gap-2 pb-2 px-1">
            <div
              v-for="tab in tabs"
              :key="tab.name"
              @click="activeKey = tab.name"
              :class="[
                'flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all whitespace-nowrap',
                activeKey === tab.name
                  ? 'text-[#0053D2] bg-white shadow-sm'
                  : 'text-gray-700 bg-white',
              ]"
            >
              <component :is="tab.icon" class="shrink-0 w-4 h-4" />
              <span class="font-medium text-sm">{{ tab.label }}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row">
          <!-- 左侧导航 - Desktop Only -->
          <div class="hidden md:block w-64">
            <div class="py-4">
              <div
                v-for="tab in tabs"
                :key="tab.name"
                @click="activeKey = tab.name"
                :class="[
                  'flex items-center gap-3 px-6 py-4 cursor-pointer transition-all',
                  activeKey === tab.name
                    ? 'text-[#0053D2] bg-white'
                    : 'text-gray-700 hover:bg-gray-50',
                ]"
              >
                <component :is="tab.icon" class="shrink-0 w-5 h-5" />
                <span class="font-medium">{{ tab.label }}</span>
              </div>
            </div>
          </div>

          <!-- 右侧内容区 -->
          <div class="flex-1 p-4 md:p-8 bg-transparent">
            <transition name="fade" mode="out-in">
              <div :key="activeKey">
                <!-- 自定义分类布局（用于大数据、人工智能） -->
                <template v-if="currentContent.customSections">
                  <div
                    v-for="(section, index) in currentContent.customSections"
                    :key="section.key"
                    :class="
                      index < currentContent.customSections.length - 1
                        ? 'mb-6 md:mb-8'
                        : ''
                    "
                  >
                    <h3 class="text-sm md:text-base font-semibold text-gray-900 mb-3">
                      {{ section.title }}
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <n-card
                        v-for="item in section.items"
                        :key="item.id"
                        hoverable
                        :class="[
                          'cursor-pointer rounded-[8px]! border border-[#EFF1F6]',
                          item.span === 3 || item.span === 2
                            ? 'md:col-span-2'
                            : '',
                        ]"
                      >
                        <div class="flex items-start gap-3 md:gap-4">
                          <div
                            class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 rounded-lg"
                          >
                            <img
                              v-if="item.icon"
                              :src="item.icon"
                              :alt="item.title"
                              class="w-6 h-6 md:w-8 md:h-8 object-contain"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <h4 class="text-sm md:text-base font-semibold text-gray-900 mb-1 md:mb-2">
                              {{ item.title }}
                            </h4>
                            <p class="text-xs md:text-sm text-gray-600 line-clamp-2">
                              {{ item.description }}
                            </p>
                          </div>
                        </div>
                      </n-card>
                    </div>
                  </div>
                </template>

                <!-- 标准分类布局（用于数据库、一体机、生态工具、云计算） -->
                <template v-else>
                  <div
                    v-for="section in contentSections"
                    :key="section.key"
                    :class="
                      section.key === 'relational' && shouldShowSectionTitle
                        ? 'mb-6 md:mb-8'
                        : ''
                    "
                  >
                    <template
                      v-if="
                        currentContent[section.key] &&
                        currentContent[section.key].length > 0
                      "
                    >
                      <h3
                        v-if="shouldShowSectionTitle"
                        class="text-sm md:text-base font-semibold text-gray-900 mb-3"
                      >
                        {{ section.title }}
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        <n-card
                          v-for="item in currentContent[section.key]"
                          :key="item.id"
                          hoverable
                          :class="[
                            'cursor-pointer rounded-[8px]! border border-[#EFF1F6]',
                            item.span === 3 || item.span === 2
                              ? 'md:col-span-2'
                              : '',
                          ]"
                        >
                          <div class="flex items-start gap-3 md:gap-4">
                            <div
                              class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 rounded-lg"
                            >
                              <img
                                v-if="item.icon"
                                :src="item.icon"
                                :alt="item.title"
                                class="w-6 h-6 md:w-8 md:h-8 object-contain"
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <h4 class="text-sm md:text-base font-semibold text-gray-900 mb-1 md:mb-2">
                                {{ item.title }}
                              </h4>
                              <p class="text-xs md:text-sm text-gray-600 line-clamp-2">
                                {{ item.description }}
                              </p>
                            </div>
                          </div>
                        </n-card>
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NCard } from "naive-ui";
import { computed, h, ref } from "vue";
import { contentSections, productData } from "../data/menuData.js";

const activeKey = ref("database");

const tabs = [
  {
    name: "database",
    label: "数据库",
    icon: () =>
      h(
        "svg",
        {
          class: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
        },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
          }),
        ]
      ),
  },
  {
    name: "integrated",
    label: "一体机",
    icon: () =>
      h(
        "svg",
        {
          class: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
        },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2",
          }),
        ]
      ),
  },
  {
    name: "tools",
    label: "生态工具",
    icon: () =>
      h(
        "svg",
        {
          class: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
        },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
          }),
        ]
      ),
  },
  {
    name: "cloud",
    label: "云计算",
    icon: () =>
      h(
        "svg",
        {
          class: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
        },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
          }),
        ]
      ),
  },
  {
    name: "bigdata",
    label: "大数据",
    icon: () =>
      h(
        "svg",
        {
          class: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
        },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
          }),
        ]
      ),
  },
  {
    name: "ai",
    label: "人工智能",
    icon: () =>
      h(
        "svg",
        {
          class: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
        },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
          }),
        ]
      ),
  },
];

const currentTab = computed(() => {
  return tabs.find((tab) => tab.name === activeKey.value);
});

const currentContent = computed(() => {
  return (
    productData[activeKey.value] || {
      relational: [],
      nonRelational: [],
    }
  );
});

// 判断当前标签页是否需要显示分类标题
// 只有当同时存在关系型和非关系型数据库时才显示标题
const shouldShowSectionTitle = computed(() => {
  const relational = currentContent.value.relational || [];
  const nonRelational = currentContent.value.nonRelational || [];
  return relational.length > 0 && nonRelational.length > 0;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
