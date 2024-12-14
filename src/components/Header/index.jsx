import React from 'react'
import cls from './index.module.css'

const regions = [
  { rag: 'Africa', val: 'africa' },
  { rag: 'Americas', val: 'americas' },
  { rag: 'Asia', val: 'asia' },
  { rag: 'Europe', val: 'europe' },
  { rag: 'Oceania', val: 'oceania' },
  { rag: 'Caribbean', val: 'caribbean' },
] 

const Header = ({setSelectedRegion, setSearchItem}) => {
  const [inputValue, setInputValue] = React.useState('')

  const handleSearchChange = (event) => setInputValue(event.target.value)

  const handleSearchClick = () => setSearchItem(inputValue)

  return (
    <React.Fragment> <></>
      <div className={cls.header}>
        <h1>Countries App</h1>

        <div className={cls.header_content}>
          <input 
            placeholder='Введите страну..' 
            onChange={handleSearchChange}
          />
          <button onClick={handleSearchClick}>Найти</button>
        </div> 
      </div>
      <div className={cls.navbar}>
        <ul>
          <li onClick={() => setSelectedRegion('all')}>All</li>
          {regions.map(item => (
              <li onClick={() => setSelectedRegion('region/' + item.val)}>{item.rag}</li>
            ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Header