import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CountriesPage from "./Coutries"
import CountryPage from "./Coutries/item"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route path="/name/:name" element={<CountryPage />} />
        <Route path="*" element={<h1>404 no page</h1>} />
      </Routes>
    </div>
  )
}

export default App
