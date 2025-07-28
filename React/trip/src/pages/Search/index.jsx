import {
  useState,
  useEffect,
  memo
} from "react"
import SearchBox from "@/components/SearchBox"
import useSearchStore from "@/store/useSearchStore"
import styles from './search.module.css'

const HotListItems = memo((props) => {
  console.log('------', props)
  const { hotList } = props
  return (
    <div className={styles.hot}>
      <h1>热门推荐</h1>
      {
        hotList.map(item => (
          <div key={item.id} className={styles.item}>
            {item.city}
          </div>
        ))
      }
    </div>
  )
})

const Search = () => {
  const [query, setQuery] = useState('')
  const {
    suggestList,
    setSuggestList,
    hotList,
    setHotList
  } = useSearchStore()
  // 单向数据流
  // 反复生成 useCallback
  const handleQuery = (query) => {
    // api 请求
    console.log('debounce后', query)
    setQuery(query)

    if (!query) {
      return
    }
    setSuggestList(query)
  }

  const suggestListStyle = {
    display: query === '' ? 'none' : 'block'
  }
  useEffect(() => {
    setHotList()
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SearchBox handleQuery={handleQuery} />
        {/* 维护性 */}
        <HotListItems hotList={hotList} />
        {/* 维护性 */}
        <div className={styles.suggestWrapper} style={suggestListStyle}>
          {
            suggestList.map(item => (
              <div key={item} className={styles.item}>{item}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Search