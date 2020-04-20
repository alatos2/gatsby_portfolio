import React, { Component } from 'react'

class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            password: null
        };
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(`${this.state.firstname} ${this.state.lastname} ${this.state.email} ${this.state.password}`);
    }

    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" onChange={this.onChangeHandler} name="firstname" placeholder="First Name" />
                    <input type="text" onChange={this.onChangeHandler} name="lastname" placeholder="Last Name" />
                    <input type="text" onChange={this.onChangeHandler}  name="email" placeholder="Email" />
                    <input type="password" onChange={this.onChangeHandler}  name="password" placeholder="Password" />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default register;
