import React, { Component } from 'react'

export class EditContent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e)
    {
        this.setState({
            user: e.target.value
        })
    }
    
    render() {
        var userList = this.props.users
        var index = this.props.index
       
        var updateNavList = this.props.updateNavList
        return (
            <div className="editContent">
                <div className="displayCurrentUser">Current User: {userList[index]} </div>
                <input type="text" className="inputName" placeholder={userList[index]} onChange={this.handleChange}/>
                <div className="updateButton" onClick = {()=>{updateNavList(this.state.user)}}>Update</div>
            </div>
        )
    }
}

export default EditContent
