import ModelCreateUser from "./ModelCreateUser"
import "./ManageUser.scss"
import { FcPlus } from 'react-icons/fc'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers } from '../../../services/apiService'
import ModelUploadUser from "./ModelUploadUser"



const ManageUser = (props) => {
    const [showModalCreaterUser, setShowModalCreateUser] = useState(false)
    const [showModalUploadUser, setShowModalUploadUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
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

    const handleClickBtnUpload = (user) => {
        setShowModalUploadUser(true)
        setDataUpdate(user)
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
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpload={handleClickBtnUpload}
                    />
                    <ModelCreateUser
                        show={showModalCreaterUser}
                        setShow={setShowModalCreateUser}
                        fetchListUsers={fetchListUsers}
                    />
                    <ModelUploadUser
                        show={showModalUploadUser}
                        setShow={setShowModalUploadUser}
                        dataUpdate={dataUpdate}
                    />
                </div>
            </div>
        </div>
    )
}
export default ManageUser