import React from 'react';
import PropTypes from 'prop-types';
import Contact from './components/Contact';
import ContactList from './components/ContactList';
import users from './components/ContactList';

function App() {
  return (
    <div className="App">
      {users.map(user => (
      <Contact name={user.name} avatar={user.avatar} online={user.online}/> ))}
    </div>
  );
}

/* <div className="App">
<Contact avatar={"https://randomuser.me/api/portraits/men/31.jpg"} name="Alexander Hill" onlineStatus="offline"/>
<Contact avatar={"https://randomuser.me/api/portraits/men/33.jpg"} name="Nicholas May" online/>
<Contact avatar={"https://randomuser.me/api/portraits/women/29.jpg"} name="Sofia Carlson" online/>
<ContactList/>
</div> */

/*
Contact.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
  online: PropTypes.bool
};
*/

export default App;