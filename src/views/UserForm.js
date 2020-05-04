import React, { useState } from "react";
import { Form as FormAntd, Input, InputNumber, Button, Row, Col } from 'antd';
import { Form as FinalForm, Field } from 'react-final-form'
import MaskedInput from 'antd-mask-input'
import "antd/dist/antd.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '',
};


export default function UserForm() {
  const [name, setName] = useState()
  const [zipCode, setZipCode] = useState()
  const [street, setStreet] = useState()
  const [number, setNumber] = useState()
  const [neighborhood, setNeighborhood] = useState()
  const [city, setCity] = useState()
  
  
  function onSubmit(){
    console.log("Submit")
    console.log(name, zipCode, street, number, neighborhood, city)
  }
  
  function handleCityInputChange(e) {
    setCity(e.target.value)
  }
  
  function handleNameInputChange(e) {
    setName(e.target.value)
  }
  
  function handleZipCodeInputChange(e) {
    setZipCode(e.target.value)
  }
  
  function handleStreetInputChange(e) {
    setStreet(e.target.value)
  }
  
  function handleNumberInputChange(e) {
    setNumber(e.target.value)
  }
  
  function handleNeighborhoodInputChange(e) {
    setNeighborhood(e.target.value)
  }
  
  return <FinalForm
  onSubmit={onSubmit}
  render={({ handleSubmit }) => (
    <div class="client">
      <Row class="class-client"><Col span={24}>
            <FormAntd {...layout} name="nest-messages" validateMessages={validateMessages}>
              <Field name="name">
                  {props => (
                    <div>
                      <FormAntd.Item name={['client', 'name']} label="Nome" rules={[{ required: true }]}>
                        <Input onChange={handleNameInputChange}/>
                      </FormAntd.Item>
                    </div>
                  )}
                </Field>
                <Field name="zipCode">
                  {props => (
                    <div>
                      <FormAntd.Item name={['client', 'zipCode']} label="CEP" rules={[{ required: true }]}>
                        <MaskedInput mask="11111-111" onChange={handleZipCodeInputChange}/>
                      </FormAntd.Item>
                    </div>
                  )} 
                </Field>
                <Field name="street">
                  {props => (
                    <div>
                      <FormAntd.Item name={['client', 'street']} label="Rua" rules={[{ required: true }]}>
                        <Input onChange={handleStreetInputChange}/>
                      </FormAntd.Item>
                    </div>
                  )}
                </Field>
                <Field name="number">
                  {props => (
                    <div>
                      <FormAntd.Item name={['client', 'number']} label="Número" rules={[{ required: true }]}>
                        <Input onChange={handleNumberInputChange}/>
                      </FormAntd.Item>
                    </div>
                  )}
                </Field>
                <Field name="neighborhood">
                  {props => (
                    <div>
                      <FormAntd.Item name={['client', 'neighborhood']} label="Bairro" rules={[{ required: true }]}>
                        <Input onChange={handleNeighborhoodInputChange}/>
                      </FormAntd.Item>
                    </div>
                  )}
                </Field>
                <Field name="city">
                  {props => (
                    <div>
                      <FormAntd.Item name={['client', 'city']} label="Cidade" rules={[{ required: true }]}>
                        <Input onChange={handleCityInputChange}/>
                      </FormAntd.Item>
                    </div>
                  )}
                </Field>
                <FormAntd.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit" onClick={onSubmit}>
                    Submit
                  </Button>
                </FormAntd.Item>
              </FormAntd>
          </Col></Row>
  </div>
  )}
/>
}

/*

render() 
    {
        return <div className="client">
          <Row class="class-client"><Col span={24}>
            <FormAntd {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
              <FormAntd.Item name={['client', 'name']} label="Nome" rules={[{ required: true }]}>
                <Input />
              </FormAntd.Item>
              <FormAntd.Item name={['client', 'cep']} label="Cep" rules={[{ required: true }]}>
                <MaskedInput mask="11111-111" name="cep"></MaskedInput>
              </FormAntd.Item>
              <FormAntd.Item name={['client', 'address']} label="Rua" rules={[{ required: true }]}>
                <Input></Input>
              </FormAntd.Item>
              <FormAntd.Item name={['client', 'number']} label="Numero" rules={[{ required: true }]}>
                <InputNumber />
              </FormAntd.Item>
              <FormAntd.Item name={['client', 'neighborhood']} label="Bairro" rules={[{ required: true }]}>
                <Input/>
              </FormAntd.Item>
              <FormAntd.Item name={['client', 'city']} label="Cidade" rules={[{ required: true }]}>
                <Input></Input>
              </FormAntd.Item>
              <FormAntd.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </FormAntd.Item>
            </FormAntd>
          </Col></Row>
        </div>
    }
    */