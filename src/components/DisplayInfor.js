import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'


// class DisplayInfor extends React.Component {

//     render() {
//         const { listUsers } = this.props
//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <div>
//                         {listUsers.map((user) => {
//                             // console.log(">>> check map", user)
//                             return (
//                                 <div>
//                                     < div key={user.id} className={+user.age > 18 ? "red" : "green"}>
//                                         <div>My name: {user.name}</div>
//                                         <div>My age: {user.age}</div>
//                                     </div>
//                                     <div>
//                                         {/* <button>Delete</button> */}
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>

//                             )
//                         })
//                         }
//                     </div>
//                 }
//             </div >
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props

    return (
        <div className="display-infor-container">

            {true &&
                <div>
                    {listUsers.map((user) => {
                        // console.log(">>> check map", user)
                        return (
                            <div>
                                < div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                    <div>My name: {user.name}</div>
                                    <div>My age: {user.age}</div>
                                </div>
                                <div>
                                    {/* <button>Delete</button> */}
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>

                        )
                    })
                    }
                </div>
            }
        </div >
    )
}

export default DisplayInfor