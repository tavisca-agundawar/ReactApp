import React, { Component } from 'react'

class MainPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    render() {
        return (
            <div className="mainPage">
                <div className="displayCurrentUser">Current User: </div>
                <input type="text" className="inputName" placeholder="John Doe"/>
                <div className="updateButton">Update</div>
            </div>
        )
    }
}

export default MainPage
