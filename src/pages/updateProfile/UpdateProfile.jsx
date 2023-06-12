import { Button, Radio,InputNumber, Form, Input, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../features/auth/authSlice";
import { getAll } from "../../features/program/programSlice";
import Arrow from "../../components/arrow/Arrow";
const { TextArea } = Input;
import "./UpdateProfile.scss"

const UpdateProfile = () => {
  const dispatch = useDispatch();
  
  const {programs} = useSelector(state => state.program)

  const [programId, setProgramId] = useState("")
  const [yearInput, setYearInput] = useState("")
 
  const handleProgramChange = (value) => {
    setProgramId(value)
    console.log(programId)
  };

  const handleYearChange = (value) => {
    setYearInput(value)
    console.log(programId)
  };

  useEffect(() => {
    dispatch(getAll())
  }, [])

  const onFinish = (values) => {
    console.log(values.age)

    if (values.age === null){
      console.log("edad tiene que ser un número")
      return
    }
    const myData = {...values, program: programId, year: yearInput
    };
      
    const filteredValues = Object.fromEntries(  //Filtra valores que no se han entrado
    Object.entries(myData).filter(([key, value]) => value !== undefined 
    && value !== "")
    );
    console.log(filteredValues); 
    // dispatch(updateProfile(filteredValues)); //Así no pasamos valores vaciós a la base de datos
  };

  return (
    <div className="edit-profile-container">
      <div  className="blue-title"><Arrow/>Editar perfil</div>
     <div className="flex-column-container"></div>
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
       
        <Space wrap>
    
        </Space>
        <br />
        <br />
        <p>Estudios</p>
 <Select
              placeholder="Elige una opción"
              name="program"
              style={{
                width: 350,
              }}
              onChange={handleProgramChange}
              options={programs.length > 0 ? programs.map((program) => ({
                value: program._id,
                label: program.name
              })) : []}
                />
        
   
 <div className="center-content-div">
 <div>
 <p>Curso</p>

            <Select
       
              label="Curso"
              placeholder="Elige una opción"
              name="program"
              style={{
                width: 200,
              }}
              onChange={handleYearChange}
              options={[
                {
                  value: "1",
                  label: "Primero",
                },
                {
                  value: "2",
                  label: "Segundo",
                },
                {
                  value: "3",
                  label: "Tercero",
                },
                {
                  value: "3",
                  label: "Cuarto",
                },
              ]}
                />

</div>
          <div>
          <p>Edad</p>
            <Form.Item name="age" >
            <InputNumber  min={17} max={99}/>
                    </Form.Item>
          </div>

 </div>
 <p>Biografía</p>

        <Form.Item name="bio">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        
        </Form.Item>
        <Button className="btn-guardar" htmlType="submit">
           Guardar
          </Button>
      </Form>
    </div>
  );
};

export default UpdateProfile;
