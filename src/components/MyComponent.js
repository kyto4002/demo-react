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
        console.log(">>>>> check parent", this.state.listUsers)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    render() {
        return (
            <div>
                <AddUserinfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div >
        )
    }
}

export default MyComponent