import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { Button, Checkbox, Form, Input } from 'antd';

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const { name, surname, email, password } = formData;

  const dispatch = useDispatch()

  const onFinish = (values) => {
    console.log('Success:', values);
    const myData = {...values, email: values.email + '@edem.es'}
    console.log(myData)
    // dispatch(register(values))

  };

  // const onFinish = (e) => {
  //   e.preventDefault();
  //   dispatch(register(user))
    // const myData = {...values, email: values.email + '@edem.es'}
    // console.log(myData)
  // };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(register())
  // };

  return (
    <div>
      <h1>Register</h1>
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
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
        <Input/>
        </Form.Item>

        <Form.Item
          label="Surname"
          name="surname"
          rules={[
            {
              required: true,
              message: 'Please input your surname!',
            },
          ]}
        >
        <Input/>
        </Form.Item>
  
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
        <Input/>
        <span>@edem.es</span>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
        <Input.Password/>
        </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
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
      {/* <Form onSubmit={onSubmit}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        value={name}
        onChange={onChange}
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
      
        <Input />
      </Form.Item>

      <Form.Item
        label="Surname"
        name="surname"
        value={surname}
        onChange={onChange}
        rules={[{ required: true, message: 'Please input your surname!' }]}
      >
          <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        value={email}
        onChange={onChange}
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
          <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        value={password}
        onChange={onChange}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onSubmit={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form> */}
  </div>
  );
};

export default Register;
