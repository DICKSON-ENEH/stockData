import React, {useState, useEffect} from "react";
import styled from "styled-components";
// import pix from "./babe.jpeg";
import axios from "axios"
const Views = () => {
    const [datas, setDatas] = useState([])

 const getAll = async()=>{
    const url =" https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token="
    const token = "7Kk2kCp7mvq6SvL8WJSin4qe4kUCFBUbGE3aZe5s"
    const proxy = "https://cors-anywhere.herokuapp.com/"
     await axios.get(`${url}${token}`).then((res)=>{
         setDatas(res.data.data)
     })
 }
 useEffect(()=>{
getAll()
 },[])
	return (
		<Container>
			<Title>Candidate votes Reviews</Title>
			<TopLine>
				<Text>
					
				Aspirants
				</Text>
				<Text> party</Text>
				<Text>Ire/Ife LG</Text>
                <Text>Idi LG</Text>
				
				
			</TopLine>
			{
                datas?.map((props)=>(
                    <TopLine1 key={props.id}>
            <Text1 >
					
                    {props.aspirants}
                    </Text1>
                    <Text1>#{props.price}</Text1>
                 
			</TopLine1>
                ))
            }
		</Container>
	);
};

export default Views;

const Image = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	object-fit: cover;
`;
const Title = styled.div`
	text-align: center;
	padding: 10px;
	font-weight: 700;
	text-transform: uppercase;
    background:#742e9d;
    color:#fff
`;
const Text1 = styled.div`
	padding: 0 15px;
	width: 200px;
    
    font-size:10px;
   
    /* text-transform:uppercase ; */
    /* text-align:center ; */
/* background:red */
`;
const Text = styled.div`
	/* padding: 0 1px; */
    /* margin:0 ; */
	width:100px;
    font-size:10px;
    text-transform:uppercase ;     
    text-align:center ;
  
    /* display:flex;
    justify-content:center;
    align-items: center; */
     /* background:red ; */
`;
const TopLine1 = styled.div`
	display: flex;
	padding: 10px 0 ;
	border-top: 1px solid silver;
	transition: all 350ms;
    /* display:flex;
    justify-content:center ;
    align-items: center; */
	:hover {
		background-color: whitesmoke;
	}
`;
const TopLine = styled.div`
	display: flex;
	padding: 10px 0;
    justify-content:center ;
    align-items: center;
`;
const Container = styled.div`
	background-color: white;
	margin: 10px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;