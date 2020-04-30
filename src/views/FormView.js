import React from 'react'
import TopMenu from './TopMenu'
import UserForm from './UserForm'
import { Layout } from 'antd';    

export class FormView extends React.Component {
    render() {
        return <div className="form-view">
            <TopMenu/>
            <UserForm/> 
        </div>
    }
}

export default FormView;