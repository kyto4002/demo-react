import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'


class DisplayInfor extends React.Component {
    constructor(props) {
        console.log(">>> call constructor")
        super(props)
        this.state = {
            isShowHideListUser: true
        }
    }

    componentDidMount() {
        console.log('>>> check Didmount')
    }

    componentDidUpdate(preProps) {
        console.log('>>>>> check DidUpdate', this.props, preProps)
        if (this.props.listUsers !== preProps.listUsers) {
            if (this.props.listUsers.length == 5) {
                alert('bạn có 5 users')
            }
        }
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
                {/* <img src={logo}></img> */}
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
                                    <div>
                                        {/* <button>Delete</button> */}
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}
export default DisplayInfor