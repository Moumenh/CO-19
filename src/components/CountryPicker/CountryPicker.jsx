import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css'

const CountryPicker = ({countries}) => {
  

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect>
                <option value='global'> Global </option>
                {countries.map((country,i)=> <option key={i} value={country.name}> {country.name} </option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
