import React from 'react'
import CountryCard from '../components/Card'
import Header from '../components/Header'
import { useFetch } from '../api'
import cls from './index.module.css'

const CountriesPage = () => {
  const {
    data,
    fetchCountries,
    loading,
  } = useFetch() // деструктуризация

  const [selectedRegion, setSelectedRegion] = React.useState('all')
  const [searchItem, setSearchItem] = React.useState('')

  const filteredCountries = data?.filter((country) => country.name?.common?.toLowerCase().includes(searchItem.toLowerCase()))

  React.useEffect(() => {
    fetchCountries(selectedRegion)
  }, [selectedRegion])


  if(loading) return <p>loading...</p>

  return (
    <div className={cls.countries_page}>
      <Header
        setSearchItem={setSearchItem}
        setSelectedRegion={setSelectedRegion}
      />
      <div className={cls.card_box}>
        {filteredCountries.map(item => <CountryCard key={item.alpha3Code} {...item} />)}
      </div>
    </div>
  )
}

export default CountriesPage