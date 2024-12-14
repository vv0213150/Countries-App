import React from 'react'
import { Link } from 'react-router-dom'
import cls from './index.module.css'

const CardTwo = ({
  name,
  region,
  timezones,
  flags,
  languages,
  capital,
  borders,
  maps,
  population,
  startOfWeek,
  status,
  subregion,
  altSpellings,
  latlng,
  coatOfArms,
  demonyms,
  idd,
  area,
  capitalInfo,
  postalCode
}) => {
  return (
    <div className={cls.main}>
      <Link to='/'><button className={cls.btn}>назад</button></Link>
      <div className={cls.card}>
        <img src={flags.svg} alt='flag-item' />

        <div className={cls.card_content}>
          <h1>{name.official}</h1>
          <div className={cls.card_content_two}>
            <div className={cls.settings}>
              <h2>Region: <p>{region}</p></h2>
              <h2 className={cls.timezone}>Timezones:<p> {timezones[0]}</p></h2>
              <h2>Borders: <p className={cls.overflow_p}>{borders || 'There is not'}</p></h2>
              <h2>Population: <p>{population}</p></h2>
            </div>
            <div className={cls.settings}>
              <h2>Languages: <p>{languages?.eng || languages?.fra || languages?.hun || languages?.kir || languages?.rus || languages?.prs || languages?.pus|| languages?.tuk || languages?.ara || languages?.sqi || languages?.cat || languages?.por || languages?.grn || languages?.spa || languages?.hye || languages?.nld || languages?.pap || languages?.de || languages?.aze || languages?.ben || languages?.bel || 'some lang'}</p> </h2>
              <h2>Capital: <p>{capital}</p></h2>
              <h2><a href={maps.openStreetMaps}>maps</a></h2>
              <h2>StartOfWeek: <p>{startOfWeek}</p></h2>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.card_content_two}>
        <div className={cls.settings_two}>
          <h2>Status: <p>{status}</p></h2>
          <h2>Subregion: <p>{subregion}</p></h2>
          <h2>AltSpellings: <p className={cls.overflow_p}>{altSpellings}</p></h2>
          <h2>Idd:<p>{idd.root}</p></h2>
        </div>
        <div className={cls.settings_two}>
          <h2>Latlng: <p>{latlng}</p></h2>
          <h2><a href={coatOfArms.svg}>CoatOfArms</a></h2>
          <h2>Demonyms: <p>{demonyms.eng.f}</p></h2>
          <h2>Area: <p>{area}</p></h2>
        </div>
        <div className={cls.settings_two}>
          <h2>CapitalInfo: <p>{capitalInfo.latlng}</p></h2>
          <h2>PostalCode-format<p>{postalCode?.format || 'There is not'}</p></h2>
          <h2>PostalCode-regex<p>{postalCode?.regex || 'There is not'}</p></h2>
        </div>
      </div>
    </div>
  )
}

export default CardTwo