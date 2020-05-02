import React from 'react'
import SignupForm from './SignupForm'

export class AntdForm extends React.Component {
    render() {
        return <div className='antdForm'>
            <p>Antd Form</p>
            <SignupForm />
        </div>
    }
}

export default AntdForm;