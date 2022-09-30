import React,{useEffect, useState} from 'react'
import styled from "styled-components"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
 
const Tablee = () => {
    const [chart, setChart] = useState([])
  const [searchword, setSearchword] = useState("");
    
const getdata = async()=>{

    const url =" https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token="
    const token = "fS28W1b69wspO5v1pMQiE8A1ar7SGFN9lqBFcuCc"
    const proxy = "https://cors-anywhere.herokuapp.com/"
    await axios.get(`${url}${token}`).then((res)=>{
        // console.log(res.data)
        setChart(res.data.data)
    }).catch((err)=>{
        console.log(err)
    })
}
const filtered = chart.filter((datas) => {
    return datas.name.toLowerCase().includes(searchword.toLowerCase());
  });
useEffect(()=>{
    getdata()
}, [])
  return (
    <div>
<h3>
    Tabular representation of Data
</h3>
<span>
    <Input
    value={searchword}
    onChange={(e)=>{
        setSearchword(e.target.value)
    }}
    placeholder='search here'
    />
</span>
<Table>
<tbody>
    <tr>
        <td>Name</td>
        <td> currency</td>
        <td> ticker</td>
        <td> Volume</td>
        <td> mic_code</td>
        <td> price</td>
    </tr>
</tbody>
{
    filtered?.map((props)=>{
        return(
<tbody>
    <tr>
        <td>{props.name}</td>
        <td> {props.currency}</td>
        <td> {props.ticker}</td>
        {/* <td> {props.ticker}</td> */}
        <td> {props.volume}</td>
        <td> {props.mic_code}</td>
        <td> {props.price}</td>
    </tr>
</tbody>
        )

    })
}

</Table>

    </div>
  )
}

export default Tablee

const Input = styled.input`
width:300px;
padding:8px;
outline: none;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
border: 0;
border-radius: 3px;
`