import React, { Component } from 'react'

import styles from './App.module.css'

import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'

class App extends Component {
  state = {
    data : {},
    daily : {}
  }

  async componentDidMount(){
    const data = await (await fetch('https://covid19.mathdro.id/api')).json()
    const { confirmed,recovered,deaths,lastUpdate } = data
    const fetchedData = {confirmed,recovered,deaths,lastUpdate}
   
    this.setState({ data: fetchedData })

    const dailyData = await (await fetch('https://covid19.mathdro.id/api/daily')).json()
    this.setState({daily : dailyData})

  }

  render() {
    const { data,daily } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker/>
        <Charts daily={daily} />
      </div>
    )
  }
}

export default App