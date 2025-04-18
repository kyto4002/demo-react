import ModelCreateUser from "./ModelCreateUser"
import "./ManageUser.scss"
import { FcPlus } from 'react-icons/fc'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers } from '../../../services/apiService'



const ManageUser = (props) => {
    const [showModalCreaterUser, setShowModalCreateUser] = useState(false)

    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        fetchListUsers()
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

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
                    <TableUser listUsers={listUsers} />
                    <ModelCreateUser
                        show={showModalCreaterUser}
                        setShow={setShowModalCreateUser}
                        fetchListUsers={fetchListUsers}
                    />
                </div>
            </div>
        </div>
    )
}
export default ManageUser