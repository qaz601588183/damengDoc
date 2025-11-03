<template>
  <section class="py-16 bg-gray-50">
    <div class="w-full max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">文档导航</h2>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <!-- Left Sidebar -->
        <div class="lg:col-span-3">
          <n-menu
            :options="menuOptions"
            :default-value="'database'"
            class="bg-white rounded-xl shadow-sm"
          />
        </div>

        <!-- Right Content -->
        <div class="lg:col-span-9">
          <!-- Development Guides -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">开发指南精选</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <n-card
                v-for="item in devGuides"
                :key="item.id"
                hoverable
                class="cursor-pointer rounded-xl border-0 shadow-sm hover:shadow-md transition-all"
              >
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-gray-900 mb-2">{{ item.title }}</h4>
                    <p class="text-sm text-gray-600 line-clamp-2">{{ item.description }}</p>
                  </div>
                </div>
              </n-card>
            </div>
          </div>

          <!-- Middleware Guides -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-6">中间件指南精选</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <n-card
                v-for="item in middlewareGuides"
                :key="item.id"
                hoverable
                class="cursor-pointer rounded-xl border-0 shadow-sm hover:shadow-md transition-all"
              >
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-gray-900 mb-2">{{ item.title }}</h4>
                    <p class="text-sm text-gray-600 line-clamp-2">{{ item.description }}</p>
                  </div>
                </div>
              </n-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'
import { NCard, NMenu } from 'naive-ui'

const menuOptions = [
  {
    label: '数据库',
    key: 'database',
    icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' })
    ])
  },
  {
    label: '一体机',
    key: 'integrated',
  },
  {
    label: '生态工具',
    key: 'tools',
  },
  {
    label: '云计算',
    key: 'cloud',
  },
  {
    label: '大数据',
    key: 'bigdata',
  },
  {
    label: '人工智能',
    key: 'ai',
  }
]

const devGuides = [
  {
    id: 1,
    title: '达梦数据库管理系统DM8A及其数据库',
    description: 'MySQL最全体系性升级方法及表单型数据库管理软件系统加密访问功能...'
  },
  {
    id: 2,
    title: '达梦学习数据库DMDM',
    description: 'MySQL最全体系性升级方法及表单型数据库管理软件系统加密访问功能...'
  },
  {
    id: 3,
    title: '达梦交叉数据库DMDM',
    description: 'MySQL最全体系性升级方法及表单型数据库管理软件系统加密访问功能...'
  }
]

const middlewareGuides = [
  {
    id: 1,
    title: '数字型数据库GDMBASE',
    description: 'MySQL最全体系性升级方法及表单型数据库管理软件系统加密访问功能...'
  },
  {
    id: 2,
    title: '达梦好学数据库DMDM',
    description: 'MySQL最全体系性升级方法及表单型数据库管理软件系统加密访问功能...'
  },
  {
    id: 3,
    title: '达梦学习数据库DMDM',
    description: 'MySQL最全体系性升级方法及表单型数据库管理软件系统加密访问功能...'
  },
  {
    id: 4,
    title: '达梦交叉数据库DMDM',
    description: 'MySQL最全体系性升级方法及表单型数据库管理软件系统加密访问功能...'
  }
]
</script>

