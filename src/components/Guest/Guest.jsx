export default function Guest({guest}) {

    const deleteGuest = (event) => {
        event.preventDefault();
        console.log('delete clicked');
     
        return (
            <tr key={guest.id}>
                <td>{guest.name}</td>
                <td>{String(guest.kidsMeal)}</td>
                <button onClick={deleteGuest}>Delete</button>
            </tr>
        )
    }





}