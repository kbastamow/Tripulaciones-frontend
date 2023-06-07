import React, { useState } from "react";
//import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import Logo from "../../assets/logo.png";

function RegisterIsma() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <img src={Logo} alt="" />
      <h1>Risky People.</h1>

      <Space direction="vertical">
        <Input.Password className="inputPassword" placeholder="input password" />
    </Space>
      
    </div>
  );
}

export default RegisterIsma;
