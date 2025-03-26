import React, { useState } from "react";


// class AddUserinfor extends React.Component {
//     state = {
//         name: '',
//         address: 'chu văn an',
//         age: ''
//     }

//     handleOnChangeInput(event) {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge(event) {
//         this.setState({
//             age: event.target.value
//         })

//     }

//     handleonSubmit = (event) => {
//         event.preventDefault()

//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         })
//     }
//     render() {
//         return (
//             <div>  My name: {this.state.name} age: {this.state.age}
//                 {/* <button onClick={(event) => { this.handleClick(event) }}>Click me</button> */}

//                 <form onSubmit={(event) => this.handleonSubmit(event)}>
//                     <label>Your name</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => { this.handleOnChangeInput(event) }}
//                     />
//                     <label>Your age</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => { this.handleOnChangeAge(event) }}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>

//         )

//     }
// }

const AddUserinfor = (props) => {
    const [name, setname] = useState('');
    const [address, setadress] = useState('chau văn an');
    const [age, setage] = useState('');


    const handleOnChangeInput = (event) => {
        setname(event.target.value)

        // this.setState({
        //     name: event.target.value
        // })
    }

    const handleOnChangeAge = (event) => {
        setage(event.target.value)

        // this.setState({
        //     age: event.target.value
        // })

    }

    const handleonSubmit = (event) => {
        event.preventDefault()

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        })
    }

    return (
        <div>  My name: {name} age: {age}
            {/* <button onClick={(event) => { this.handleClick(event) }}>Click me</button> */}

            <form onSubmit={(event) => handleonSubmit(event)}>
                <label>Your name</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => { handleOnChangeInput(event) }}
                />
                <label>Your age</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => { handleOnChangeAge(event) }}
                />
                <button>Submit</button>
            </form>
        </div>

    )
}

export default AddUserinfor