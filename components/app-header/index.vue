<script lang="ts" setup>
import { useCategories } from '~/composable/useCategories';

const { categories } = useCategories();
</script>

<template>
  <div
    class="group sticky top-4 flex h-fit w-full items-center gap-1 rounded-full border border-default-700 bg-default-900/80 px-8 py-2 backdrop-blur-lg transition-all duration-700"
  >
    <nuxt-link to="/" exact-active-class="active relative overflow-hidden text-primary-foreground" class="rounded-full px-3 py-2">
      首页
    </nuxt-link>
    <hover-card-root>
      <hover-card-trigger>
        <div class="cursor-pointer">
          分类
        </div>
      </hover-card-trigger>
      <hover-card-portal>
        <animate-presence unwrap-element>
          <hover-card-content as-child :side-offset="20" class="w-[150px] rounded-md border border-default-700 bg-default-900/70 backdrop-blur-sm">
            <motion
              as-child
              :initial="{ opacity: 0, scale: 0.95 }"
              :animate="{ opacity: 1, scale: 1 }"
              :exit="{ opacity: 0, scale: 0.95 }"
              :transition="{ duration: 0.3, ease: 'easeInOut' }"
            >
              <ul>
                <li
                  v-for="category, idx in categories" :key="idx"
                  class="
                    before:content relative
                    w-full cursor-pointer py-3 text-center before:absolute before:left-0 before:top-0
                    before:size-full before:opacity-0 before:transition-all hover:text-primary-foreground hover:before:bg-primary hover:before:opacity-10
                  "
                >
                  {{ category }}
                </li>
              </ul>
            </motion>
          </hover-card-content>
        </animate-presence>
      </hover-card-portal>
    </hover-card-root>
  </div>
</template>
