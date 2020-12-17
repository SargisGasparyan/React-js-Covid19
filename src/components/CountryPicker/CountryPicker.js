import React,{useState,useEffect} from 'react'
import styles from './CountryPicker.module.css'
import {fetchCountryData} from '../../api/index'
import {FormControl,NativeSelect} from '@material-ui/core'

const CountryPicker=({onChangeCountry})=>{
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        const fetchApi= async()=>{
            setCountries(await fetchCountryData())
        }
        fetchApi()
        console.log(countries)
    },[])
    return(
        <FormControl>
            <NativeSelect className={styles.picker} defaultValue="" onChange={(e)=>onChangeCountry(e.target.value)} >
                <option >Global</option>
                {countries.map((country,i)=><option  className={styles.opt} key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker