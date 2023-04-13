import { useState } from "react";
import ShoppingItem from "./ShoppingItem";


const ShoppingList = () => {
    // vamos crear una variable de estado que guarde lo que escribo en el input
    const [item, setItem] = useState('')
    const [list, setList] = useState([])

    const handleInputChange = (event) => {
        setItem(event.target.value)
        console.log('handleInputChange')
    }

    // cuando apriete el boton de agregar el valor del input lo vamos a añadir a un array
    const handleAddItem = () => {
        const newList = [...list];
        newList.push(item);
        setList(newList);
        setItem('')
    }

    const handleDeleteItem = (index) => {
        // list.splice(index, 1)
        setList((previousList) => {
            const auxList = [...previousList]
            auxList.splice(index, 1)
            return auxList
        }) 
    }

    return (
        <div>
            <input type="text" value={item} onChange={handleInputChange} placeholder="Añade al carrito" />
            <button onClick={handleAddItem}>Añadir al carrito</button>
            <ul>
            {          
                list.map((item, index) => (
                    <ShoppingItem
                        name={item}
                        posicion={index}
                        deleteItem={() => {handleDeleteItem(index)}}
                    />
                ))
            }
            </ul>
        </div>
    )
}

export default ShoppingList