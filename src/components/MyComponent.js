import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {


    // handleClick(event) {
    //     const ten = (this.state.name)
    //     console.log(ten)
    //     console.log(event)
    //     this.setState({
    //         name: 'Thuận'
    //     })

    // }
    // handleonMouse(event) {
    //     console.log(event)
    // }



    // handleOnChangeAge(event) {
    //     this.setState({
    //         age: event.target.value
    //     })

    // }


    render() {
        return (
            <div>
                <Userinfor />
                <DisplayInfor name='châu' age='60' />
            </div >
        )
    }
}

export default MyComponent