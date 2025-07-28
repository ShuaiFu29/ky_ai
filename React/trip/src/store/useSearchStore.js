// search 全局共享状态
import {
  create
} from 'zustand'
import {
  getSuggestList,
  getHotList
} from '@/api/search'

const useSearchStore = create((set, get) => {
  // get  读操作
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
  return {
    searchHistory,
    suggestList: [], // suggest 返回 list
    hotList: [], // hot 返回 list
    setSuggestList: async (keyword) => {
      const res = await getSuggestList(keyword)
      console.log('suggest', res)
      set({
        suggestList: res.data
      })
    },
    setHotList: async () => {
      const res = await getHotList()
      console.log('Hot', res)
      set({
        hotList: res.data
      })
    }
  }
})



export default useSearchStore