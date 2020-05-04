import React from 'react'
import TopMenu from '../views/TopMenu'
import UserForm from '../views/UserForm'

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TopMenu />
                <UserForm/>
            </div>
        )
    }
}
