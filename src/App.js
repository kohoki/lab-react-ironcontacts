import './App.css';
import contacts from "./contacts.json";

function App() {
  const contactsDB = contacts.slice(1, 6);
console.log(contactsDB)
  return (
    <div className="App">
      <table>
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
          <tr>
            <td><img width="50px" src={contact.pictureUrl}/></td>
            <td>{contact.name}</td>
            <td>{pop.toFixed(2)}</td>
            <td>{wonOscar}</td>
            <td>{wonEmmy}</td>
          </tr>
        );
      })}
      </table>
    </div>
  );
}

export default App;
