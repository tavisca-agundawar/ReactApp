import React, { Component } from 'react'

class NavList extends Component {
    render() {
        var userList = this.props.users
        var updateEditContent = this.props.updateEditContent
        return (
            <div className="navList">

                {userList.map(function (name, index) {
                    return(
                        <div className="navItem"
                             onClick = {() => updateEditContent(index)}>
                            {name}
                        </div>
                    )

                })}

            </div>
        )
    }
}

export default NavList
