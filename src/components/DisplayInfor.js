import React from "react";
import './DisplayInfor.scss'

class DisplayInfor extends React.Component {
    state = {
        isShowHideListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowHideListUser: !this.state.isShowHideListUser
        })
    }
    render() {
        const { listUsers } = this.props
        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowHideListUser === true ? "Hide List Users:" : "Show List Users:"}
                    </span>
                </div>
                {this.state.isShowHideListUser &&
                    <div>
                        {listUsers.map((user) => {
                            // console.log(">>> check map", user)
                            return (
                                <div>
                                    < div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                        <div>My name: {user.name}</div>
                                        <div>My age: {user.age}</div>
                                    </div>
                                </div>

                            )
                        })
                        }
                    </div>
                }
            </div >
        )
    }
}
export default DisplayInfor