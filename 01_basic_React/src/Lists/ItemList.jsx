

export default function ItemList(props) {
    

    const ListOfItem = props.items;

    const ListOfItems = ListOfItem.map(item => <li key={item.id}>{item.name}: {item.calories}</li>)
    ListOfItem.sort((a,b) =>  a.name.localeCompare(b.name)); 
    return (
        <>  
            <h4>{props.category}</h4>
            <ul>{ListOfItems}</ul>
            
        </>
    )
}