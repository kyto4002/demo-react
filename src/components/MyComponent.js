import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'châu', age: 20 },
            { id: 2, name: 'thuận', age: 30 },
            { id: 3, name: 'ngân', age: 40 },
        ]
    }

    render() {
        return (
            <div>
                <Userinfor />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div >
        )
    }
}

export default MyComponent