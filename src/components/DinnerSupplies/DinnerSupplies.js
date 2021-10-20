import SilverWare from '../SilverWare/SilverWare'

export default function DinnerSupplies({guestList}) {

    let count = guestList.length * 2;
    console.log('count in dinnersupplies is: ', count)
    return (
        <> 
            <h2>Dinner Supplies</h2>
            <SilverWare name="Spoons" count={count} />
            <SilverWare name="Forks" count={count} />
            <SilverWare name="Knives" count={count} />

        </>
    )
}