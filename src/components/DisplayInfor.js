import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { name, age } = this.props
        return (
            <div>
                <div>My name:{name}</div>
                <div>My age: {age}</div>
            </div>
        )
    }
}
export default DisplayInfor