<template>
  <section class="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
    <div class="w-full max-w-7xl mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <!-- Left Content -->
        <div class="flex-1 w-full lg:max-w-xl">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            达梦文档中心
          </h1>

          <!-- Search Box -->
          <div class="relative w-full max-w-xl">
            <n-input
              size="large"
              placeholder="请输入..."
              class="pr-24"
            >
              <template #prefix>
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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

        <!-- Right Illustration -->
        <div class="hidden lg:flex flex-1 justify-center items-center">
          <div class="relative w-96 h-96 mx-auto">
            <!-- AI Illustration -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative">
                <!-- Main Circle Platform -->
                <div class="w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-30 blur-2xl"></div>

                <!-- Center AI Icon -->
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div class="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl flex items-center justify-center rotate-12">
                    <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                <!-- Floating Elements -->
                <div class="absolute top-8 left-12 w-20 h-20 rounded-2xl bg-green-400 opacity-80 shadow-lg animate-float"></div>
                <div class="absolute top-20 right-8 w-16 h-16 rounded-full bg-blue-400 opacity-80 shadow-lg animate-float-delayed"></div>
                <div class="absolute bottom-16 left-8 w-12 h-12 rounded-lg bg-purple-400 opacity-80 shadow-lg animate-float"></div>

                <!-- AI Text Badge -->
                <div class="absolute top-24 right-16 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span class="text-blue-600 font-bold">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NInput, NButton } from 'naive-ui'
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 3s ease-in-out infinite 0.5s;
}
</style>

