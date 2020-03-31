import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render () {
        return (
            <div className="Contact" >
                <img className="avatar" src={this.props.avatar}/>
                <div className="fn"><p className="name">{this.props.name}</p>            
                <div className="status"><div className={this.props.online ? 'status-online' : 'status-offline'}></div>
                <p className="status-text">{this.props.online ? 'online' : 'offline'}</p></div>

            </div></div>
        )
    }
};
export default Contact;

//<div className="status-online"></div>