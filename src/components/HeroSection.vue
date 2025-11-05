<template>
  <section
    class="h-[300px] md:h-[400px] flex items-center overflow-hidden hero-bg"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="w-full max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex items-center">
        <!-- Content -->
        <div class="flex-1 w-full lg:max-w-xl">
          <h4 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
            达梦文档中心
          </h4>

          <!-- Search Box -->
          <div class="w-full max-w-full md:w-[660px]">
            <n-input-group>
              <n-input placeholder="请输入..." :size="isMobile ? 'medium' : 'large'"> </n-input>
              <n-button type="primary" :size="isMobile ? 'medium' : 'large'">
                <template #icon>
                  <Search class="w-4 h-4 md:w-5 md:h-5" />
                </template>
                <span class="hidden sm:inline">搜索</span>
              </n-button>
            </n-input-group>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search } from "lucide-vue-next";
import { NButton, NInput, NInputGroup } from "naive-ui";
import { computed } from "vue";
import bgImage from "../assets/bg.png";

const isMobile = computed(() => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768;
  }
  return false;
});
</script>

<style scoped>
.hero-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
