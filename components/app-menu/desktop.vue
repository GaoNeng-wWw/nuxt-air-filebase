<script lang="ts" setup>
const { categories } = useCategories();
</script>

<template>
  <div
    class="
    group hidden h-fit w-full items-center gap-1
    rounded-full border
    border-default-700 bg-default-900/80 px-8 py-2 backdrop-blur-lg transition-all duration-300 md:flex
    "
  >
    <nuxt-link to="/" exact-active-class="relative overflow-hidden text-rose-500 dark:text-rose-400" class="rounded-full px-3 py-2 font-medium transition hover:text-rose-400">
      首页
    </nuxt-link>
    <hover-card-root>
      <hover-card-trigger as-child class="rounded-full px-3 py-2 font-medium transition">
        <nuxt-link
          :data-active="$route.path.includes('/category/')"
          class="cursor-pointer hover:text-rose-400 data-[active=true]:text-rose-500 data-[active=true]:dark:text-rose-400"
        >
          分类
        </nuxt-link>
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
              <ul class="space-y-2">
                <nuxt-link
                  v-for="category, idx in categories"
                  :key="idx"
                  :to="`/category/${category}`"
                  class="relative block
                    w-full cursor-pointer py-3 text-center font-medium transition
                  hover:text-rose-500
                  "
                  exact-active-class="text-rose-500 dark:text-rose-400"
                >
                  <li
                    class="

                  "
                  >
                    {{ category }}
                  </li>
                </nuxt-link>
              </ul>
            </motion>
          </hover-card-content>
        </animate-presence>
      </hover-card-portal>
    </hover-card-root>
  </div>
</template>
