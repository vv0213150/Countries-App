import React from 'react'
import { Link } from 'react-router-dom'
import cls from './index.module.css'

const CountryCard = ({
  name,
  region,
  timezones,
  flags,
  languages,
  capital
}) => {
  return (
    <div className={cls.card}>
      <Link to={`/name/${name.common}`}>
        <img src={flags.svg} alt='flag-item' />

        <div className={cls.card_content}>
          <h1>{name.common}</h1>
          <div className={cls.settings}>
            <h2>Region: {region}</h2>
            <h2 className={cls.timezone}>Timezones: {timezones[0]}</h2>
          </div>
          <div className={cls.settings}>
            <h2>Languages: {languages?.eng || languages?.fra || languages?.hun || languages?.kir || languages?.rus || 'some lang'}</h2>
            <h2>Capital: {capital}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard