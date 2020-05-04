import React, { useState } from "react";
import { Form as FormAntd, Input, Button, Row, Col } from 'antd';
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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function UserForm() {
  const [name, setName] = useState()
  const [zipCode, setZipCode] = useState()
  const [street, setStreet] = useState()
  const [number, setNumber] = useState()
  const [neighborhood, setNeighborhood] = useState()
  const [uf, setUf] = useState()
  const [city, setCity] = useState()
  
  
  function onSubmit(){
    if(name === undefined || zipCode === undefined || street === undefined || number === undefined || neighborhood === undefined || city === undefined) {
      window.alert("Informe todos os dados")
      return
    }
    console.log("Submit")
    sleep(300)
    var url = "http://localhost:4000";
    var opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: mutation })
    };
    fetch(url, opts)
      .then(res => res.json())
      .then(window.alert("Dados Salvos"))
      .catch(console.error);
  }
  
  function handleCityInputChange(e) {
    setCity(e.target.value)
  }
  
  function handleNameInputChange(e) {
    setName(e.target.value)
  }
  
  function handleZipCodeInputChange(e) {
    console.log("Change cep")
    setZipCode(e.target.value)
    console.log(String(zipCode))
  }
  
  function handleStreetInputChange(e) {
    console.log("Change");
    setStreet(e.target.value)
  }
  
  function handleNumberInputChange(e) {
    setNumber(e.target.value)
  }
  
  function handleNeighborhoodInputChange(e) {
    setNeighborhood(e.target.value)
  }
  
  function handleUFInputChange(e){
    setUf(e.target.value)
  }
  
  
  const mutation = `mutation {
    createUser(
      name:"`+name+`",
      zipCode:"`+zipCode+`",
      city:"`+city+`",
      neighborhood:"`+neighborhood+`", 
      street:"`+street+`",
      number:"`+number+`",
      uf: "`+uf+`"){
          name
        }
      }`;
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
                <Field name="uf">
                  {props => (
                    <div>
                      <FormAntd.Item name={['client', 'uf']} label="UF" rules={[{ required: true }]}>
                        <Input onChange={handleUFInputChange}/>
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
                    Enviar
                  </Button>
                </FormAntd.Item>
              </FormAntd>
          </Col></Row>
  </div>
  )}
/>
}