import { useState, useRef } from "react";
import ListItem from "./ListItem";
import "./ToDo.css";

const ToDoList = () => {
  const addRef = useRef(null);

  const [items, setItems] = useState([
    { id: 1, title: "Food" },
    { id: 2, title: "Assignment" },
  ]);

  function handleAdd() {
    //console.log("add clicked");
    if (addRef.current !== null) {
      let newTitle = addRef.current.value;
      setItems([...items, { id: Date.now(), title: newTitle }]);
    }
  }

  function RemoveItemFromList(val) {
    let newList = items.filter((item) => item.id !== val);
    //console.log(newList, val);
    setItems(newList);
  }

  function EditItemValue(changedItem) {
    let updatedList = items.map((item) =>
      item.id === changedItem.id ? changedItem : item,
    );

    setItems(updatedList);
  }
  //this component has mixture of vanilla css and tailwind css
  return (
    <div className="todo-container">
      <div className="inner-container">
        <h1 className="font-bold text-center">Get Things Done!</h1>
        <div>
          <input
            type="text"
            ref={addRef}
            className="border-2 rounded-lg mx-2"
          />
          <button
            onClick={handleAdd}
            className="border-2 rounded-lg bg-gray-300"
          >
            Add
          </button>
        </div>
        {items.length > 0 &&
          items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onDelete={(val) => RemoveItemFromList(val)}
              onEdit={(updatedItem) => EditItemValue(updatedItem)}
            />
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
