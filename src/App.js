import './App.css';
import contacts from "./contacts.json";
import React, { useState } from 'react';

let newArray = contacts.slice(0, 5);
contacts = contacts.slice(5)


function App() {
  const [contactsDB, setContact] = useState(newArray);
  
  function addRandomContact(){
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let randomContact = contacts[randomIndex];
    setContact([...contactsDB, randomContact]);
    contacts.splice(randomIndex, 1)
    // console.log(randomContact)
    // console.log(contacts.length)
  }

// console.log(contactsDB)
  return (
    <div className="App">
      <button onClick={addRandomContact}>
        Add Random Contact
      </button>
      <table>
        <tbody>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>won Oscar</td>
            <td>Won Emmy</td>
          </tr>
          {contactsDB.map((contact) => {
            const pop = contact.popularity;
            let wonOscar = "";
            let wonEmmy = "";
            if(contact.wonOscar)
            {
              wonOscar += '🏆';
            }
            if(contact.wonEmmy)
            {
              wonEmmy += '🏆';
            }
          return (
            <tr key={contact.id}>
              <td><img width="50px" src={contact.pictureUrl}/></td>
              <td>{contact.name}</td>
              <td>{pop.toFixed(2)}</td>
              <td>{wonOscar}</td>
              <td>{wonEmmy}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
