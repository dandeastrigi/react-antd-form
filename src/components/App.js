import React from 'react'
import Cep from './Cep'
import TopMenu, { FormView } from '../views/FormView'

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <FormView/>
            </div>
        )
    }
}