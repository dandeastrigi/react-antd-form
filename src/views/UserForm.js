import React, { Component } from "react";
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import "antd/dist/antd.css";
import "../css/index.css";
import "../components/Cep"
import Cep from "../components/Cep";
import Comment from './Comment'

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
    render() 
    {
        return <div className="client">
          <Row class="class-client"><Col span={24}>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
              <Form.Item name={['client', 'name']} label="Nome" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['client', 'cep']} label="Cep" rules={[{ required: true }]}>
                <Cep/>
              </Form.Item>
              <Form.Item name={['client', 'address']} label="Rua" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['client', 'number']} label="Numero" rules={[{ required: true }]}>
                <InputNumber />
              </Form.Item>
              <Form.Item name={['client', 'neighborhood']} label="Bairro" rules={[{ required: true }]}>
                <Input/>
              </Form.Item>
              <Form.Item name={['client', 'city']} label="Cidade" rules={[{ required: true }]}>
                <Input/>
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