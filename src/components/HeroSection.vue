<template>
  <section
    class="h-[400px] flex items-center overflow-hidden hero-bg"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="w-full max-w-7xl mx-auto px-6">
      <div class="flex items-center">
        <!-- Content -->
        <div class="flex-1 w-full lg:max-w-xl">
          <h4 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            达梦文档中心
          </h4>

          <!-- Search Box -->
          <div class="w-[660px]">
            <n-input-group>
              <n-input placeholder="请输入..." size="large"> </n-input>
              <n-button type="primary" size="large">
                <template #icon>
                  <Search class="w-5 h-5" />
                </template>
                搜索
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
import bgImage from "../assets/bg.png";
</script>

<style scoped>
.hero-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
