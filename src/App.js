import React, { Component } from 'react'

import styles from './App.module.css'

import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'

import co19 from './assets/co19.png'

class App extends Component {
  state = {
    data : {},
    daily : [],
    countries : [],
    country : ''
  }

  async componentDidMount(){
    const data = await (await fetch('https://covid19.mathdro.id/api')).json()
    const { confirmed,recovered,deaths,lastUpdate } = data
    const fetchedData = {confirmed,recovered,deaths,lastUpdate}
   
    this.setState({ data: fetchedData })

    const dailyData = await (await fetch('https://covid19.mathdro.id/api/daily')).json()
    this.setState({daily : dailyData})
    
    const {countries} = await (await fetch('https://covid19.mathdro.id/api/countries')).json()
    this.setState({countries : countries})

  }

  handleCountryChange = async (country) => {
    if(country === 'global') {
      this.componentDidMount()
    }
    else{
      const countryData = await (await fetch(`https://covid19.mathdro.id/api/countries/${country}`)).json()
      const { confirmed, recovered, deaths, lastUpdate } = countryData
      const fetchedcountry = { confirmed, recovered, deaths, lastUpdate }

      this.setState({ data: fetchedcountry, country })
    }
  }

  render() {
    const { data,daily,countries,country } = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} alt='CO-19' src={co19} />
        <Cards data={data}/>
        <CountryPicker countries={countries} handleCountryChange={this.handleCountryChange}/>
        <Charts daily={daily} data={data} country={country}/>
      </div>
    )
  }
}

export default App