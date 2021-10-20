import Guest from '../Guest/Guest'

export default function GuestList({guestList}) {

   

    return ( 
        <>
            <h2>Guest List</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Kid's Meal</th>
                </tr>
                </thead>
                <tbody>
                {guestList.map(guest => (
                 <Guest guest={guest} />   
                ))}
                </tbody>
            </table>
        </>
    )
}