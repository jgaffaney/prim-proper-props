export default function PartyLeader ({leader}) {
    console.log('Party leader is: ', leader);

    return (
        <>
            <h2>Party Leader</h2>
                {leader && <h3>{leader.name}</h3>}
        </>
    )
    
}

