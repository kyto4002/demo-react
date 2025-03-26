import React, { useState } from "react";
import AddUserinfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";



// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: 'châu', age: 20 },
//             { id: 2, name: 'thuận', age: 16 },
//             { id: 3, name: 'ngân', age: 50 },
//         ],
//         taolao: [
//             { id: 1, name: 'taoalo1', age: 20 },
//             { id: 2, name: 'taoallo222', age: 16 },
//             { id: 3, name: 'taolao333', age: 50 },
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         console.log(">>>>> check parent", this.state.listUsersCD)
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userid) => {
//         let listUsersClone = this.state.listUsers
//         listUsersClone = listUsersClone.filter(item => item.id !== userid)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     render() {
//         return (
//             <>
//                 <AddUserinfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </>
//         )
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setlistUsers] = useState(
        [
            { id: 1, name: 'châu', age: 20 },
            { id: 2, name: 'thuận', age: 16 },
            { id: 3, name: 'ngân', age: 50 },
        ]
    )

    const handleAddNewUser = (userObj) => {
        setlistUsers([userObj, ...listUsers])

        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        // })
    }
    const handleDeleteUser = (userid) => {
        let listUsersClone = listUsers
        listUsersClone = listUsersClone.filter(item => item.id !== userid)
        setlistUsers(listUsersClone)

        // this.setState({
        //     listUsers: listUsersClone
        // })
    }
    return (
        <>
            <AddUserinfor
                handleAddNewUser={handleAddNewUser}
            />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    )
}


export default MyComponent