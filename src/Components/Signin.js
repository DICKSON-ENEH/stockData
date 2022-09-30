import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "./GlobalState";
import LoadingFile from "./LoadingFile";
import swal from "sweetalert2";

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const toggleLoad = () => {
    setLoading(true);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    fullname: yup.string().required("This field cannot be empty"),
    password: yup.string().required("This field cannot be empty"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    const { fullname, password } = value;
    console.log(value);
    const url =
      "https://dickky.herokuapp.com/api/dee/signin";
    toggleLoad();

    await axios
      .post(url, { fullname, password })
      .then((res) => {
        console.log(res.data);
        dispatch(createUser(res.data));
        swal.fire({
          title: "Sucess",
          text: "Welcome to Stock Data",
          icon: "success",
        });
      })
      .catch((err) => {
        swal.fire({
          title: "Failed",
          text: "error",
          icon: "failed",
        });
        setLoading(false);
      console.log(err)

      });
    reset();
    navigate("/");
  });

  return (
    <Container>
      <Wrapper>
        {loading ? <LoadingFile /> : null}
        <Top>Welcome please provide details below</Top>
        <Card>
          <Form onSubmit={onSubmit}>
            <Holder>
              <Label>Username</Label>
              <Input placeholder="username" {...register("fullname")} />
              <Error>{errors.message && errors?.message.fullname}</Error>
            </Holder>
            <Holder>
              <Label>Password</Label>
              <Input placeholder="Password" {...register("password")} 
              type="password"
              />
              <Error>{errors.message && errors?.message.password}</Error>
            </Holder>

            <Button type="submit">Sign in</Button>
            
          </Form>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

const Top = styled.div`
  color:black;
  text-transform: uppercase;
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 23px;
  }
`;
const Span = styled.div`
  margin-left: 5px;
  text-decoration: none;
  color: darkorange;
  cursor: pointer;
  font-size: 14px;
`;

const Div = styled.div`
  display: flex;
  margin-top: 10px;
  color: white;
  font-size: 14px;
`;

const Button = styled.button`
  width: 80%;
  margin-top: 30px;
  height: 40px;
  font-size: 15px;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  outline: none;
  border: 0;
  background-color: #26cd4d;
  border-radius: 5px;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const Error = styled.div`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding:10px;
  border-radius: 3px;
  padding-left: 5px;
  margin-bottom: 5px;
  ::placeholder {
  }
  border: 1px solid silver;
  outline: none;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
  margin-top: 10px;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;

const Card = styled.div`
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  width: 500px;
  min-height: 300px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  flex-direction: column;
  /* background-color: #272b33; */

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  /* background-color: #0a0c10; */
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #0a0c10; */
`;
