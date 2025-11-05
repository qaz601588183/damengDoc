<template>
  <header
    class="sticky top-0 left-0 right-0 bg-white border-b border-gray-200 z-50"
  >
    <div
      class="max-w-full mx-auto px-9 h-[60px] flex items-center justify-between"
    >
      <div class="flex items-center justify-between gap-12 h-full">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <img :src="logo" alt="logo" class="w-[188px] h-[36px]" />
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8 h-full">
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
              <div class="max-w-7xl mx-auto px-9 py-6 flex gap-8">
                <!-- 左侧分类导航 -->
                <div class="w-48 flex-shrink-0">
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
                        class="space-y-4"
                      >
                        <a
                          v-for="product in currentCategoryContent.items"
                          :key="product.name"
                          href="#"
                          class="dropdown-card"
                        >
                          <div class="flex items-start gap-4 p-4">
                            <div
                              class="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg shrink-0"
                            >
                              <svg
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
                          href="#"
                          class="dropdown-button"
                        >
                          {{ btn.name }}
                        </a>
                      </div>

                      <!-- 子分类 -->
                      <div
                        v-if="currentCategoryContent.subSections"
                        v-for="section in currentCategoryContent.subSections"
                        :key="section.title"
                        class="mt-8"
                      >
                        <h3 class="text-base font-semibold text-[#0053D2] mb-4">
                          {{ section.title }}
                        </h3>
                        <div class="space-y-4">
                          <a
                            v-for="product in section.items"
                            :key="product.name"
                            href="#"
                            class="dropdown-card"
                          >
                            <div class="flex items-start gap-4 p-4">
                              <div
                                class="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg shrink-0"
                              >
                                <svg
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
import { computed, ref } from "vue";
import downloadIcon from "../assets/download.png";
import localeIcon from "../assets/locale.png";
import logo from "../assets/logo.png";

const activeCategory = ref("database");
const activeMenuItem = ref(null);

// 计算当前分类的内容
const currentCategoryContent = computed(() => {
  if (!activeMenuItem.value || !activeMenuItem.value.content) {
    return null;
  }
  return activeMenuItem.value.content[activeCategory.value];
});

// 菜单配置
const menuItems = [
  {
    name: "产品",
    categories: [
      { key: "database", name: "数据库" },
      { key: "integrated", name: "一体机" },
      { key: "tools", name: "生态工具" },
      { key: "cloud", name: "云计算" },
      { key: "bigdata", name: "大数据" },
      { key: "ai", name: "人工智能" },
    ],
    content: {
      database: {
        title: "关系型数据库",
        items: [
          {
            name: "达梦数据库管理系统DM",
            description:
              "100%自主研发的大型通用关系型数据库，支持单机/主备、共享集群、分布式等多种部署方式，覆盖OLAP/OLTP/HTAP交易分析混合负载场景，为用户提供具备极致事宜性、高可用性、高可靠性、高安全性及易用性的企业级数据库产品与服务。",
          },
        ],
        buttons: [
          { name: "达梦数据共享集群DMDSC" },
          { name: "达梦数据守护集群DMDataWatch" },
          { name: "达梦分布计算集群DMDPC" },
        ],
        subSections: [
          {
            title: "非关系型数据库",
            items: [
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
        ],
      },
      integrated: {
        title: "一体机",
        items: [
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
        ],
      },
      tools: {
        title: "达梦数+数据融合软件DMDF",
        items: [
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
        ],
        subSections: [
          {
            title: "SQLark百灵连接",
            items: [
              {
                name: "百灵连接SQLark",
                description: "多数据库支持 | SQL开发 | 数据生成...",
              },
            ],
          },
        ],
      },
      cloud: {
        title: "云计算",
        items: [],
      },
      bigdata: {
        title: "大数据",
        items: [],
      },
      ai: {
        title: "人工智能",
        items: [],
      },
    },
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
  background-color: #0053d2;
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
</style>
