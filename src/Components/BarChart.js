import React, {useState, useEffect} from 'react'
import {Chart as ChartJs, BarElement, CategoryScale, LinearScale} from "chart.js"
import {Bar} from "react-chartjs-2"
import axios from "axios"
import Header from './Header'
import styled from 'styled-components'



ChartJs.register(
    BarElement, CategoryScale, LinearScale
)

const BarChart = () => {
const [chart, setChart] = useState([])
const getdata = async()=>{

    const url =" https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token="
    const token = "fS28W1b69wspO5v1pMQiE8A1ar7SGFN9lqBFcuCc"
    const proxy = "https://cors-anywhere.herokuapp.com/"
    await axios.get(`${url}${token}`).then((res)=>{
        // console.log(res.data)
        setChart(res.data)
    }).catch((err)=>{
        console.log(err)
    })
}
useEffect(()=>{
    getdata()
}, [])
   const data={
        labels: chart?.data?.map(x=> x.name),
        datasets: [{
            label: '# of Votes',
            data: chart?.data?.map(x=> x.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
   const options= {
    maintainAspectRatio:false,
        scales: {
            y: {
                beginAtZero: true
            }, 
            legend:{
                labels:{
                    fontSize:30
                }
            }
        }
    }
  
  return (
    <>
   
    <Div>
<Header/>
        <div>

        <Bar
        data={data}
        options={options}
        height={500}
        />
        </div>

        <div>
            Bar chart Graphical Representation of Real time stock data.
        showing their price range
        </div>
        <br/>
        
    </Div>
    </>
  )
}

export default BarChart

const Div = styled.div`
width:100%;
/* background-color: red; */
`