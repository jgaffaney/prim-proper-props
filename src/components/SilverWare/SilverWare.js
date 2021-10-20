export default function SilverWare({name, count}){
    console.log('count is: ', count);
    console.log('name is: ', name);
    
    

    return (
        <div>
            {name}: {count}
        </div>

    )
    }