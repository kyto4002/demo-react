import ModelCreateUser from "./ModelCreateUser"
import "./ManageUser.scss"





const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div>
                    <button>Add new user</button>
                </div>
                <div>
                    table user
                    <ModelCreateUser />


                </div>
            </div>
        </div>
    )
}
export default ManageUser