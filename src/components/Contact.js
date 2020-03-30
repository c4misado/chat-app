import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render () {
        return (
            <div className="Contact" >
                <img className="avatar" src={this.props.image}/>
                <div><p className="name">{this.props.firstName} {this.props.lastName}</p>
                <div className="status"><span className="status-offline"></span>
                <p className="status-text">{this.props.onlineStatus}</p></div>
            </div></div>
        )
    }
};
export default Contact;