import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../features/auth/authSlice";
import { getAll } from "../../features/program/programSlice";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  
  const {programs} = useSelector(state => state.program)

  const [gender, setGender] = useState("") 
  const handleChange = (value) => {
    setGender(value)
  };

  


  const onFinish = (values) => {
   
    const myData = {
      age: values.edad,
      gender: gender,
      program: values.programa,
      year: values.curso,
      bio: values.biografia,
    };
    console.log(myData);
    dispatch(updateProfile(myData));
  };


useEffect(() => {
  dispatch(getAll())
}, [])




{/* <span>Programa</span>
          <Select
            name="programa"
            defaultValue="Femenino"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "Masculino",
                label: "Masculino",
              },
              {
                value: "Femenino",
                label: "Femenino",
              },
              {
                value: "Otros",
                label: "Otros",
              },
            ]}
          />
 */}




















  // const onFinish = (e) => {
  //   e.preventDefault();
  //   dispatch(register(user))
  // const myData = {...values, email: values.email + '@edem.es'}
  // console.log(myData)
  // };
  //   const onFinishFailed = (errorInfo) => {
  //     console.log('Failed:', errorInfo);
  //   };

  return (
    <div>
      <h1>Update Profile</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Edad"
          name="edad"
          rules={[
            {
              required: true,
              message: "Por favor, introduce tu edad!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Space wrap>
          <span>Género</span>
          <Select
            name="genero"
            defaultValue="Femenino"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            //onFinish={onFinish}
            options={[
              {
                value: "Masculino",
                label: "Masculino",
              },
              {
                value: "Femenino",
                label: "Femenino",
              },
              {
                value: "Otros",
                label: "Otros",
              },
            ]}
          />
        </Space>
        <br />
        <br />
        <Form.Item
          label="Programa"
          name="programa"
          rules={[
            {
              required: true,
              message: "Por favor, introduce tu programa!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Curso"
          name="curso"
          rules={[
            {
              required: true,
              message: "Por favor, introduce tu curso!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Biografia"
          name="biografia"
          rules={[
            {
              required: true,
              message: "Por favor, introduce tu biografía!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProfile;
