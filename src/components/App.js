import React from 'react'
import SignupForm from '../views/SignupForm'
import AntdForm from '../views/AntdForm'
import TopMenu from '../views/TopMenu'
import UserMenu from '../views/UserForm'

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TopMenu />
                <UserMenu/>
            </div>
        )
    }
}