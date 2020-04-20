import React, { Component } from 'react'
import { Link } from 'gatsby'

class menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul>
                    <li className={this.props.active1}><Link to='/'>My Home</Link></li>
                    <li className={this.props.active2}><Link to='/about'>Who Am I</Link></li>
                    <li className={this.props.active3}><Link to='/service'>What I Do</Link></li>
                    <li className={this.props.active4}><Link to='/projects'>My Projects</Link></li>
                    <li className={this.props.active5}><Link to='/contact'>Contact Me</Link></li>
                    <li className={this.props.active6}><Link to='/register'>Register</Link></li>
                    <li className={this.props.active7}><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        )
    }
}

export default menu;
