import { memo, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'

const SearchBox = memo(() => {
  const [keyword, setKeyword] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (keyword.trim()) {
      // TODO: 实现搜索功能
      console.log('搜索:', keyword)
    }
  }

  return (
    <form className="search-box" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        placeholder="音乐/视频/电台/用户"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <button type="submit" className="search-btn">
        <SearchOutlined />
      </button>
    </form>
  )
})

SearchBox.displayName = 'SearchBox'

export default SearchBox

