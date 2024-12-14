import React from 'react'
import { useParams } from 'react-router-dom'
import CountryCardTwo from '../../components/CardTwo/indeex'
import { useFetch } from '../../api'

const CountryPage = () => {
  const {
    fetchCountries,
    loading,
    data
  } = useFetch()
  
  let params = useParams()

  React.useEffect(() => {
    fetchCountries(`name/${params.name}`)
  }, [])  

  if(loading) return <p>loading...</p> 

  return (
    <div>
      {data.map(item => <CountryCardTwo {...item} />)}
    </div>
  )
}

export default CountryPage
