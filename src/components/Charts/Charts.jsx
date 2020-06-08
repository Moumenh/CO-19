import React from 'react'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Charts.module.css'


const Charts = ({daily}) => {
    
    const lineChart = (
        
        <Line
            data={{
                labels: '',
                datasets: [{},{}]
            }}
         />
    )

    
    return (
        <div>
            Charts
        </div>
    )
}

export default Charts
