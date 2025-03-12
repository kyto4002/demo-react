import React from "react";

class Userinfor extends React.Component {
    state = {
        name: 'chau1',
        address: 'chu văn an',
        age: 40
    }

    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge(event) {
        this.setState({
            age: event.target.value
        })

    }

    handleonSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>  My name: {this.state.name} age: {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>

                <form onSubmit={(event) => this.handleonSubmit(event)}>
                    <label>Your name</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                    />



                    <label>Your age</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.handleOnChangeAge(event) }}
                    />
                    <button>Submit</button>
                </form>
            </div>

        )

    }
}

export default Userinfor