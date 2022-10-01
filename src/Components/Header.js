import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { signOut } from "./GlobalState";
import swal from "sweetalert2";

import styled from "styled-components";

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUser);
  // console.log(userData.token)
  return (
    <Container>
      <Wrapper>
        <Logo>STOCKDATA</Logo>

        <User>
          <FirstName>{userData.data.fullname}</FirstName>
          {/* <LastName>{userData?.last_name}</LastName> */}
          <Logout
            onClick={() => {
              dispatch(signOut());
            }}
          >
            Logout
          </Logout>
        </User>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Logout = styled.div`
  font-size: 15px;
  color: red;
  margin-left: 20px;
  cursor: pointer;
  @media (max-width: 320px) {
    margin-left: 10px;
  }
`;

const User = styled.div`
  display: flex;
  font-weight: 400;
  align-items: center;
`;
const LastName = styled.div`
  margin-left: 5px;
  font-weight: 500;
  font-size: 17px;
`;
const FirstName = styled.div`
  margin-left: 10px;
  font-weight: 500;
  font-size: 17px;
  color:#fff;
  @media(max-width:430px){
    /* background-color: green; */
    /* width: 400px; */
    font-size: 12px;
}
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 25px;
  @media(max-width:430px){
    /* background-color: green; */
    width: 400px;
    font-size: 18px;
}
`;

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  
`;
const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272b33;
  color: white;
  @media(max-width:440px){
    /* background-color: green; */
    width: 400px;
}
`;
