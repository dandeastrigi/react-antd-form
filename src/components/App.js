import React from 'react'
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