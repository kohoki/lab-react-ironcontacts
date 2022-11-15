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
        </tr>
        {contactsDB.map((contact) => {
          const pop = contact.popularity;
        return (
          <tr>
            <td><img width="50px" src={contact.pictureUrl} className="profile" alt="profile"/></td>
            <td>{contact.name}</td>
            <td>{pop.toFixed(2)}</td>
          </tr>
        );
      })}
      </table>
    </div>
  );
}

export default App;
