import React, { Component } from 'react'
import NavList from './NavList'
import EditContent from './EditContent'

class MainPage extends Component {

    constructor(props) {
        super(props)

        let users = [
            "Arnaw",
            "Paresh",
            "Dharna",
            "Shravan",
            "Aditi"
        ]

        this.state = {
            userList: users,
            currentUser: 0
        }

        this.updateEditContent = this.updateEditContent.bind(this)
        this.updateNavList = this.updateNavList.bind(this)
    }

    updateEditContent(index){
        this.setState({currentUser: index})
    }

    updateNavList(newName){
        let newList = this.state.userList
        newList[this.state.currentUser] = newName
        this.setState({
            userList:newList
        })
    }
    
    render() {
        return (
            <div className="mainContainer">
                <NavList users = {this.state.userList} 
                         updateEditContent = {this.updateEditContent}/>

                <EditContent users = {this.state.userList}
                             updateNavList = {this.updateNavList}
                             index = {this.state.currentUser}/>
            </div>
        )
    }
}

export default MainPage
