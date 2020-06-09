import React from 'react'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Charts.module.css'


const Charts = ({daily,  data: { confirmed, recovered, deaths }, country }) => {
    
    

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

    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );

    
    return (
        <div className={styles.container}>
            {!country || country === 'global' ? lineChart: barChart}
        </div>
    )
}

export default Charts
