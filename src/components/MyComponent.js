import React from "react";
import AddUserinfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";



class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'châu', age: 20 },
            { id: 2, name: 'thuận', age: 16 },
            { id: 3, name: 'ngân', age: 50 },
        ],
        taolao: [
            { id: 1, name: 'taoalo1', age: 20 },
            { id: 2, name: 'taoallo222', age: 16 },
            { id: 3, name: 'taolao333', age: 50 },
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log(">>>>> check parent", this.state.listUsersCD)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (userid) => {
        let listUsersClone = this.state.listUsers
        listUsersClone = listUsersClone.filter(item => item.id !== userid)
        this.setState({
            listUsers: listUsersClone
        })
    }
    render() {
        return (
            <>
                <AddUserinfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </>
        )
    }
}

export default MyComponent