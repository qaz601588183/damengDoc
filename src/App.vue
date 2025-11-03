<script setup>
import { NConfigProvider } from 'naive-ui'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import QuickStart from './components/QuickStart.vue'
import DocumentSection from './components/DocumentSection.vue'
import ResourceSection from './components/ResourceSection.vue'
import AppFooter from './components/AppFooter.vue'

const themeOverrides = {
  common: {
    primaryColor: '#2563EB',
    primaryColorHover: '#1D4ED8',
    primaryColorPressed: '#1E40AF',
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="min-h-screen bg-white">
      <AppHeader />
      <main>
        <HeroSection />
        <QuickStart />
        <DocumentSection />
        <ResourceSection />
      </main>
      <AppFooter />
    </div>
  </n-config-provider>
</template>

<style scoped>
</style>
