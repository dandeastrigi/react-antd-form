import React from 'react'
import MaskedInput from 'antd-mask-input'
import "antd/dist/antd.css";
import "../css/index.css";
import cep from 'cep-promise'

export class Cep extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            count: 0
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
        
    handleChange(event) {
        this.setState({value: event.target.value});
        var inputedCep = event.target.value.replace("-", "");
        this.setState({ count: this.state.count+1})
        console.log(inputedCep);
        console.log(this.state.count);
        if(this.state.count == 7){
            console.log('Cep oficial');
            console.log(inputedCep);
            cep(inputedCep)
            .then(console.log)
        }
        
        
    }
    
      handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return <div className="Cep">
            <form onSubmit={this.handleSubmit}>
                <MaskedInput value={this.state.value} onChange={this.handleChange} mask="11111-111" name="cep" text="" onChange={this.handleChange}></MaskedInput>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    }
}

export default Cep;