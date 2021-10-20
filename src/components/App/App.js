import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestList from '../GuestList/GuestList'
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm'
import PartyLeader from '../PartyLeader/PartyLeader'
// import DinnerSupplies from '../DinnerSupplies/DinnerSupplies'

function App() {
  let [guestList, setGuestList] = useState([]);
  

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = (name, kidsMeal) => {
    axios.post('/guests', { name: name, kidsMeal: kidsMeal })
      .then(response => {
       

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };


  

  return (
    <div className="App">
      <Header />
      <PartyLeader leader={guestList[0]} />
      <GuestForm addGuest={addGuest} />
      <GuestList guestList={guestList} />
      <DinnerSupplies guestList={guestList} />
      <Footer />
    </div>
  );
}

export default App;
