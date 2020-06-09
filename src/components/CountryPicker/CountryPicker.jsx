import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css'

const CountryPicker = ({countries,handleCountryChange}) => {
  

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="global" onChange={(e) => {handleCountryChange(e.target.value)}}>
                <option value='global'> Global </option>
                {countries.map((country,i)=> <option key={i} value={country.name}> {country.name} </option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
