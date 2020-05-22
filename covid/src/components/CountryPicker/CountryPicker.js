import React, { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchCountry, setFetchCountry] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchCountry(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchCountry]);

    console.log(fetchCountry);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchCountry.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;