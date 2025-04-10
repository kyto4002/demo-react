import ModelCreateUser from "./ModelCreateUser"
import "./ManageUser.scss"
import { FcPlus } from 'react-icons/fc'
import { useState } from "react"



const ManageUser = (props) => {
    const [showModalCreaterUser, setShowModalCreateUser] = useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus /> Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    table user
                    <ModelCreateUser show={showModalCreaterUser} setShow={setShowModalCreateUser} />


                </div>
            </div>
        </div>
    )
}
export default ManageUser