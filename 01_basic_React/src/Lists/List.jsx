

// export default function List() {

//     const fruits = [{id: 1, name: "Apple",calories: 95},
//                     {id: 2, name: "Mango",calories: 159},
//                     {id: 3, name: "Banana",calories: 105},
//                     {id: 4, name: "Grapes",calories: 37},
//                     {id: 5, name: "Orange",calories: 45}];

//     fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
//     // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverseAlphabetical
//     // fruits.sort((a,b) => a.calories - b.calories); // numerical
//     // fruits.sort((a,b) => b.calories - a.calories); // reverse numerical

//     // const lowCalFruit = fruits.filter(fruits => fruits.calories < 100); 

//     const listItems = fruits.map(fruits => <li key={fruits.id}>
//                                                 {fruits.name}: {fruits.calories}
//                                                 </li>)

//     return (
//         <>
//             <ol>{listItems}</ol>
//         </>
//     )
// }

import ItemList from "./ItemList"

export default function List() {

    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Mango", calories: 159 },
        { id: 3, name: "Banana", calories: 105 },
        { id: 4, name: "Grapes", calories: 37 },
        { id: 5, name: "Orange", calories: 45 }];
    const vegetables = [
        { id: 6, name: "Potato", calories: 110 },
        { id: 7, name: "Ladyfinger", calories: 59 },
        { id: 8, name: "Corn", calories: 63 },
        { id: 9, name: "Brocoli", calories: 37 },
        { id: 10, name: "Cabbage", calories: 50 }];
    return (
        <>
            <ItemList items={fruits} category="fruits" />
            <br/>
            <ItemList items={vegetables} category="vegetables" />
        </>
    )
}