import {
  defineStore
} from 'pinia';
import {
  ref
} from 'vue';
import type { HomeTopBarItem, recentlyViewedItem } from '../types/home';

export const useHomeStore = defineStore("home", () => {
  const topBarState = ref<HomeTopBarItem[]>([
    {
      title: "游览&体验",
      icon: "photo-o"
    }
  ])
  const navBarState = ref<HomeTopBarItem[]>([
    {
      title: "首页",
      icon: "home-o"
    }
  ])
  const recentlyViewedState = ref<recentlyViewedItem[]>([
    {
      title: "",
      cover: "",
      price: 173
    }
  ])
  return {
    topBarState,
    navBarState,
    recentlyViewedState
  }
})