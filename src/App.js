import React from 'react';
import PropTypes from 'prop-types';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact image={"https://randomuser.me/api/portraits/men/31.jpg"} firstName="Alexander" lastName="Hill" onlineStatus="offline"/>
      <Contact image={"https://randomuser.me/api/portraits/men/33.jpg"} firstName="Nicholas" lastName="May" online/>
      <Contact image={"https://randomuser.me/api/portraits/women/29.jpg"} firstName="Sofia" lastName="Carlson" online/>
    </div>
  );
}

Contact.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
  online: PropTypes.bool
};

export default App;