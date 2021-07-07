import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [addItem, setAddItem] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })

  const handleItemChange = (e) => {
  const userInput = e.target.value
  const key = e.target.name
  setAddItem({...addItem, [key]: userInput })
  console.log(addItem)
  
}
const handleSubmitItem = (e) => {
  e.preventDefault()
  onItemFormSubmit(addItem)
  setAddItem({
    id: uuid(),
    name: "",
    category: "Produce"
  })
  
  

}
  
  return (
    <form onSubmit={handleSubmitItem} className="NewItem">
      <label>
        Name:
        <input value={addItem.name} onChange={handleItemChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select  value={addItem.category} onChange={handleItemChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
