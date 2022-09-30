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
    <Div>
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
<Tablebody>
    <Trol>
        <Tdescription>Name</Tdescription>
        <Tdescription> currency</Tdescription>
        <Tdescription> ticker</Tdescription>
        <Tdescription> Volume</Tdescription>
        <Tdescription> mic_code</Tdescription>
        <Tdescription> price</Tdescription>
    </Trol>
</Tablebody>
{
    filtered?.map((props)=>{
        return(
<Tablebody>
    <Trol>
        <Tdescription>{props.name}</Tdescription>
        <Tdescription> {props.currency}</Tdescription>
        <Tdescription> {props.ticker}</Tdescription>
        {/* <Tdescription> {props.ticker}</Tdescription> */}
        <Tdescription> {props.volume}</Tdescription>
        <Tdescription> {props.mic_code}</Tdescription>
        <Tdescription> {props.price}</Tdescription>
    </Trol>
</Tablebody>
        )

    })
}

</Table>

    </Div>
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
const Div = styled.div`
width:100%;
/* background-color:red */
`
const Tablebody=styled.tbody`

@media(max-width:470px){
    /* background-color: red; */
    width: 470px;
}
@media(max-width:460px){
    /* background-color: green; */
    /* width: 470px; */
}
@media(max-width:440px){
    /* background-color: green; */
    width: 400px;
}
@media(max-width:430px){
    /* background-color: green; */
    /* width: 400px; */
}
`
const Tdescription=styled.td`
@media(max-width:430px){
    /* background-color: green; */
    /* width: 400px; */
    font-size: 14px;
}
`
const Trol = styled.tr``
