import React from 'react'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Charts.module.css'


const Charts = ({daily}) => {
    
    

    const lineChart = (
        daily.length
            ? <Line
                data={{
                    labels: daily.map(({ reportDate }) => reportDate),
                    datasets: [{
                        data: daily.map(({ totalConfirmed }) => totalConfirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: daily.map(({ deaths }) => deaths.total),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    }]
                }}
            /> : null
    )

    
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts
