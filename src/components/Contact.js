import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          online: false
        };
      }
    render () {
        return (
            <div className="Contact" >
                <img className="avatar" src={this.props.avatar}/>
                <div className="fn"><p className="name">{this.props.name}</p>            
                <div className="status"><div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                <button className="status-text"           
                        onClick={event => {
                            let oStatus = this.state.online;
                            oStatus === false ? oStatus = true : oStatus = false;
                            this.setState({online: oStatus});
                            }
                          }
                >{this.state.online == true ? 'online' : 'offline'}</button>
                </div>
            </div>
            </div>

        )
    }
};
export default Contact;