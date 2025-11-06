<template>
  <header
    class="sticky top-0 left-0 right-0 bg-white border-b border-gray-200 z-50"
  >
    <div
      class="max-w-full mx-auto px-4 md:px-9 h-[60px] flex items-center justify-between"
    >
      <div class="flex items-center justify-between gap-4 md:gap-12 h-full">
        <!-- Logo -->
        <a
          href="http://static.hongru.com.cn/D_dmsj/dm_cn/index.aspx"
          class="flex items-center gap-2 cursor-pointer"
        >
          <img
            :src="logo"
            alt="logo"
            class="w-[140px] h-[27px] md:w-[188px] md:h-[36px]"
          />
        </a>

        <!-- Navigation -->
        <nav class="hidden lg:flex items-center gap-8 h-full">
          <div
            v-for="item in menuItems"
            :key="item.name"
            class="nav-item h-full flex items-center"
            @mouseenter="activeMenuItem = item"
          >
            <a
              href="#"
              class="nav-link text-gray-700 hover:text-[#0053D2] transition-colors h-full flex items-center relative"
            >
              {{ item.name }}
            </a>
            <!-- 二级菜单 -->
            <div
              v-if="item.categories && item.categories.length > 0"
              class="dropdown-menu"
            >
              <div class="max-w-[1440px] px-6 md:px-0 mx-auto py-6 flex gap-8">
                <!-- 左侧分类导航 -->
                <div class="w-48 shrink-0">
                  <div
                    v-for="category in item.categories"
                    :key="category.key"
                    @mouseenter="activeCategory = category.key"
                    :class="[
                      'category-item px-4 py-3 cursor-pointer rounded-lg mb-2 transition-all',
                      activeCategory === category.key
                        ? 'bg-blue-50 text-[#0053D2] font-medium'
                        : 'text-gray-700 hover:bg-gray-50',
                    ]"
                  >
                    {{ category.name }}
                  </div>
                </div>

                <!-- 右侧内容区 -->
                <div class="flex-1 min-w-0">
                  <transition name="slide-up" mode="out-in">
                    <div v-if="currentCategoryContent" :key="activeCategory">
                      <!-- 子分类标题 -->
                      <h3
                        v-if="currentCategoryContent.title"
                        class="text-base font-semibold text-[#0053D2] mb-4"
                      >
                        {{ currentCategoryContent.title }}
                      </h3>

                      <!-- 产品卡片 -->
                      <div
                        v-if="currentCategoryContent.items"
                        class="grid grid-cols-3 gap-4"
                      >
                        <a
                          v-for="product in currentCategoryContent.items"
                          :key="product.name"
                          href="https://www.func.xin/docs/category/dmdrs-%E5%8F%82%E8%80%83%E6%89%8B%E5%86%8C"
                          target="_blank"
                          rel="noopener noreferrer"
                          :class="[
                            'dropdown-card',
                            product.span === 3 ? 'col-span-3' : '',
                          ]"
                        >
                          <div class="flex flex-col gap-3 p-4 h-full">
                            <div
                              class="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg shrink-0"
                            >
                              <img
                                v-if="product.icon"
                                :src="product.icon"
                                :alt="product.name"
                                class="w-8 h-8 object-contain"
                              />
                              <svg
                                v-else
                                class="w-6 h-6 text-[#0053D2]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                />
                              </svg>
                            </div>
                            <div class="flex-1 min-w-0">
                              <h4
                                class="text-base font-semibold text-gray-900 mb-2"
                              >
                                {{ product.name }}
                              </h4>
                              <p
                                v-if="product.description"
                                class="text-sm text-gray-600 leading-relaxed"
                              >
                                {{ product.description }}
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>

                      <!-- 按钮组 -->
                      <div
                        v-if="currentCategoryContent.buttons"
                        class="mt-4 flex flex-wrap gap-3"
                      >
                        <a
                          v-for="btn in currentCategoryContent.buttons"
                          :key="btn.name"
                          href="https://www.func.xin/docs/category/dmdrs-%E5%8F%82%E8%80%83%E6%89%8B%E5%86%8C"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="dropdown-button"
                        >
                          {{ btn.name }}
                        </a>
                      </div>

                      <!-- 自定义分类（用于生态工具、大数据、人工智能） -->
                      <div
                        v-if="currentCategoryContent.customSections"
                        v-for="(
                          section, index
                        ) in currentCategoryContent.customSections"
                        :key="section.key"
                        :class="index > 0 ? 'mt-8' : ''"
                      >
                        <h3
                          class="text-base font-semibold text-[#0053D2] mb-4 flex items-center gap-2"
                        >
                          {{ section.title }}
                          <svg
                            v-if="section.hasLink"
                            class="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </h3>
                        <div class="grid grid-cols-3 gap-4">
                          <a
                            v-for="product in section.items"
                            :key="product.name"
                            href="https://www.func.xin/docs/category/dmdrs-%E5%8F%82%E8%80%83%E6%89%8B%E5%86%8C"
                            target="_blank"
                            rel="noopener noreferrer"
                            :class="[
                              'dropdown-card',
                              product.span === 3 ? 'col-span-3' : '',
                            ]"
                          >
                            <div class="flex flex-col gap-3 p-4 h-full">
                              <div
                                class="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg shrink-0"
                              >
                                <img
                                  v-if="product.icon"
                                  :src="product.icon"
                                  :alt="product.name"
                                  class="w-8 h-8 object-contain"
                                />
                                <svg
                                  v-else
                                  class="w-6 h-6 text-[#0053D2]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                  />
                                </svg>
                              </div>
                              <div class="flex-1 min-w-0">
                                <h4
                                  class="text-base font-semibold text-gray-900 mb-2"
                                >
                                  {{ product.name }}
                                </h4>
                                <p
                                  v-if="product.description"
                                  class="text-sm text-gray-600 leading-relaxed"
                                >
                                  {{ product.description }}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>

                      <!-- 子分类（用于数据库的非关系型数据库） -->
                      <div
                        v-if="currentCategoryContent.subSections"
                        v-for="section in currentCategoryContent.subSections"
                        :key="section.title"
                        class="mt-8"
                      >
                        <h3 class="text-base font-semibold text-[#0053D2] mb-4">
                          {{ section.title }}
                        </h3>
                        <div class="grid grid-cols-3 gap-4">
                          <a
                            v-for="product in section.items"
                            :key="product.name"
                            href="https://www.func.xin/docs/category/dmdrs-%E5%8F%82%E8%80%83%E6%89%8B%E5%86%8C"
                            target="_blank"
                            rel="noopener noreferrer"
                            :class="[
                              'dropdown-card',
                              product.span === 3 ? 'col-span-3' : '',
                            ]"
                          >
                            <div class="flex flex-col gap-3 p-4 h-full">
                              <div
                                class="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg shrink-0"
                              >
                                <img
                                  v-if="product.icon"
                                  :src="product.icon"
                                  :alt="product.name"
                                  class="w-8 h-8 object-contain"
                                />
                                <svg
                                  v-else
                                  class="w-6 h-6 text-[#0053D2]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                  />
                                </svg>
                              </div>
                              <div class="flex-1 min-w-0">
                                <h4
                                  class="text-base font-semibold text-gray-900 mb-2"
                                >
                                  {{ product.name }}
                                </h4>
                                <p
                                  v-if="product.description"
                                  class="text-sm text-gray-600 leading-relaxed"
                                >
                                  {{ product.description }}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-2 md:gap-4">
        <n-button text class="hidden lg:inline-flex">
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
        <span class="text-gray-600 text-sm hidden lg:inline">登录/注册</span>
        <span class="text-gray-400 hidden lg:inline">|</span>
        <span class="text-gray-600 text-sm hidden lg:flex items-center gap-1">
          <img :src="localeIcon" alt="locale" class="w-4 h-4" />
          中文
        </span>
        <n-button
          type="primary"
          class="rounded-md text-sm md:text-base px-3 md:px-4"
        >
          <img
            :src="downloadIcon"
            alt="download"
            class="w-[14px] h-[10px] mr-1"
          />
          <span class="hidden sm:inline">下载中心</span>
          <span class="sm:hidden">下载</span>
        </n-button>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto"
      >
        <div class="px-4 py-6">
          <div
            v-for="item in menuItems"
            :key="item.name"
            class="border-b border-gray-200 py-4"
          >
            <div class="text-base font-medium text-gray-900 mb-2">
              {{ item.name }}
            </div>
          </div>

          <!-- Mobile Actions -->
          <div class="mt-6 space-y-4">
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <img :src="localeIcon" alt="locale" class="w-4 h-4" />
              中文
            </div>
            <div class="text-sm text-gray-600">登录/注册</div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { NButton } from "naive-ui";
import { computed, ref } from "vue";
import downloadIcon from "../assets/download.png";
import localeIcon from "../assets/locale.png";
import logo from "../assets/logo.png";
import {
  contentSections,
  productCategories,
  productData,
} from "../data/menuData.js";

const activeCategory = ref("database");
const activeMenuItem = ref(null);
const mobileMenuOpen = ref(false);

// 计算当前分类的内容
const currentCategoryContent = computed(() => {
  if (!activeCategory.value) {
    return null;
  }

  const data = productData[activeCategory.value];
  if (!data) return null;

  // 如果有自定义分类（大数据、人工智能）
  if (data.customSections) {
    return data;
  }

  // 标准分类（数据库、一体机等）
  const result = {
    items: data.relational || [],
    subSections: [],
  };

  // 添加子分类标题
  if (activeCategory.value === "database") {
    result.title = contentSections[0].title; // 关系型数据库
    if (data.nonRelational && data.nonRelational.length > 0) {
      result.subSections.push({
        title: contentSections[1].title, // 非关系型数据库
        items: data.nonRelational,
      });
    }
  } else if (data.relational && data.relational.length > 0) {
    result.items = data.relational;
  } else if (data.nonRelational && data.nonRelational.length > 0) {
    result.items = data.nonRelational;
  }

  return result;
});

// 菜单配置
const menuItems = [
  {
    name: "产品",
    categories: productCategories,
  },
  {
    name: "一体机",
    children: [
      {
        name: "蜀天梦图数据库GDMBASE",
        description: "自研分布式原生图数据库",
      },
      {
        name: "达梦缓存数据库DMCDM",
        description: "适用于缓存热点数据，提升数据访问性能",
      },
      {
        name: "达梦时序数据库DMTDM",
        description: "支持结构化、半结构和非结构化数据",
      },
      {
        name: "达梦文档数据库DMDDM",
        description: "独立研发的分布式原生时序数据库产品",
      },
    ],
  },
  {
    name: "生态工具",
    children: [
      {
        category: "达梦数+数据融合软件DMDF",
        isCategory: true,
        hasLink: true,
      },
      {
        name: "达梦数据复制软件DMDRS",
        description: "异构数据库类型到数据复制迁移",
      },
      {
        name: "达梦数据集成软件DMDIS",
        description: "实现各类数据的清洗转换整合",
      },
      {
        name: "达梦数据校验软件DMDVS",
        description: "快速实现数据—致性校验与修复",
      },
      {
        name: "达梦数据融合管理平台DMDFM",
        description: "数据融合管理、监控运维、故障处理",
      },
      {
        category: "SQLark百灵连接",
        isSubCategory: true,
      },
      {
        name: "百灵连接SQLark",
        description: "多数据库支持 | SQL开发 | 数据生成...",
      },
    ],
  },
  {
    name: "解决方案",
    children: [],
  },
  {
    name: "客户",
    children: [],
  },
  {
    name: "生态伙伴",
    children: [],
  },
  {
    name: "文档",
    children: [],
  },
  {
    name: "社区",
    children: [],
  },
];
</script>

<style scoped>
/* 导航项容器 */
.nav-item {
  position: relative;
  height: 100%;
}

/* 导航链接 */
.nav-link {
  padding: 0 4px;
}

/* 悬停时的底部边框 */
.nav-item:hover .nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #ec1b34;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

/* 下拉菜单 */
.dropdown-menu {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 40;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}

/* 滚动条样式 */
.dropdown-menu::-webkit-scrollbar {
  width: 6px;
}

.dropdown-menu::-webkit-scrollbar-track {
  background: transparent;
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}

.dropdown-menu::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* 悬停时显示下拉菜单 */
.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* 左侧分类导航项 */
.category-item {
  font-size: 14px;
}

/* 右侧内容区动画 - 从下往上 */
.slide-up-enter-active {
  transition: all 0.3s ease-out;
}

.slide-up-leave-active {
  transition: all 0.2s ease-in;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* 下拉菜单卡片 */
.dropdown-card {
  display: block;
  border-radius: 8px;
  transition: all 0.2s ease;
  background: white;
}

.dropdown-card:hover {
  background-color: #f9fafb;
}

.dropdown-card:hover h4 {
  color: #0053d2;
}

.dropdown-card:hover .bg-blue-50 {
  background-color: #dbeafe;
}

/* 按钮式菜单项 */
.dropdown-button {
  display: inline-block;
  padding: 10px 20px;
  margin-right: 12px;
  margin-bottom: 12px;
  background-color: #eff6ff;
  color: #1e40af;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.dropdown-button:hover {
  background-color: #dbeafe;
  color: #1e3a8a;
}

/* Mobile Menu Animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
