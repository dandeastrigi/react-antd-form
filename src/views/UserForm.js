import React, { Component } from "react";
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import MaskedInput from 'antd-mask-input'
import "antd/dist/antd.css";
import cep from 'cep-promise'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '',
};

const onFinish = values => {
  console.log(values);
};


export class ClientForm extends Component {
      constructor(props) {
        super(props);
        this.state = { 
            value: '',
            city: '',
            address: '',
            neighborhood: '',
            uf: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
        
    handleChange(event) {
        this.setState({value: event.target.value});
        var inputedCep = event.target.value.replace("-", "");
        console.log(String(inputedCep).length)
        if(String(inputedCep).length == 8){
            cep(inputedCep)
            .then(response => {
                console.log(response.city);
                this.setState({ city: response.city });
            }).catch(e => {
                console.log(e);
            });
        }        
    }

    handleSubmit(event) {
      alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
    }
    
    render() 
    {
        return <div className="client">
          <Row class="class-client"><Col span={24}>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
              <Form.Item name={['client', 'name']} label="Nome" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['client', 'cep']} label="Cep" rules={[{ required: true }]}>
                <MaskedInput value={ this.state.value } onChange={this.handleChange} mask="11111-111" name="cep" text="" onChange={this.handleChange}></MaskedInput>
              </Form.Item>
              <Form.Item name={['client', 'address']} label="Rua" rules={[{ required: true }]}>
                <Input value={this.state.city} ></Input>
              </Form.Item>
              <Form.Item name={['client', 'number']} label="Numero" rules={[{ required: true }]}>
                <InputNumber />
              </Form.Item>
              <Form.Item name={['client', 'neighborhood']} label="Bairro" rules={[{ required: true }]}>
                <Input/>
              </Form.Item>
              <Form.Item name={['client', 'city']} label="Cidade" rules={[{ required: true }]}>
                <Input type="text" value={this.state.city}></Input>
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col></Row>
        </div>
    }
}

export default ClientForm;