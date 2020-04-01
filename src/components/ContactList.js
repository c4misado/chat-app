import React from 'react';
import Contact from './Contact';

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: true
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: false
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    }
  ];

 class ContactList extends React.Component{
    render () {
        return (
    <div>
        {users.map(user => (
         <Contact name={user.name} avatar={user.avatar} online={user.online}/>))}
    </div>
        );
    }
}

export default ContactList;