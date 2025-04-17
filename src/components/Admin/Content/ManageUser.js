import ModelCreateUser from "./ModelCreateUser"
import "./ManageUser.scss"
import { FcPlus } from 'react-icons/fc'
import { useState } from "react"
import TableUser from "./TableUser"



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
                    <TableUser />
                    <ModelCreateUser show={showModalCreaterUser} setShow={setShowModalCreateUser} />
                </div>
            </div>
        </div>
    )
}
export default ManageUser