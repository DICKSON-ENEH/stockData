import React from 'react'
import BarChart from './BarChart'
import Tablee from './Tablee'
import styled from 'styled-components'
import Views from './Views'

const Body= () => {
  return (
    <Div>
      <BarChart/>
      <Tablee/>
      {/* <Views/> */}
    </Div>
  )
}

export default Body

const  Div = styled.div`
width:100%;
/* background: red; */
`