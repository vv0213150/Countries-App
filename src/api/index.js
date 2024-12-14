import React from "react"

const API = 'https://restcountries.com/v3.1/'

export function useFetch() {
  const [data, setData] = React.useState([])
  // const [loading, setLoading] = React.useState(false)

  function fetchCountries(routes) {
    // setLoading(true)
    fetch(`${API}${routes}`)
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => {
          if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) {
            return -1
          }
          if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) {
            return 1
          }
          return 0
        })
        setData(sorted)
      })
      .catch((error) => {
        console.log(error, 'error')
      })
      .finally(() => {
        // setLoading(false)
      })  
  }
  console.log(data);

  return {
    data,
    // loading,
    fetchCountries,
  }
}