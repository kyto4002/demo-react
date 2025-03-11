import React from "react";


class MyComponent extends React.Component {

    state = {
        name: 'chau1',
        address: 'chau van aan',
        age: 40
    }
    student = {
        name: 'Thuận',
        add: 'Bình tân',
        age: 10
    }

    render() {
        return (
            <div>My frist Component
                my name: {this.state.name}
                studentL {this.student.name}
            </div>
        )
    }
}

export default MyComponent