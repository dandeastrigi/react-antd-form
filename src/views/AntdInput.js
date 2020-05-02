import React, { Component } from "react";
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import MaskedInput from 'antd-mask-input'
import "antd/dist/antd.css";

export class AntdInput extends React.Component {
    render() {
        return <div className="antdInput">
            <Input></Input>
        </div>
    }
}

export default AntdInput;