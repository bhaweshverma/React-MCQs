import { useState, useRef } from "react";

//, onDelete, onEdit
const ListItem = ({ item, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const editRef = useRef(null);

  function handleEdit(e, oldId) {
    let text = e.target.innerText;
    setEdit(!edit);
    if (text === "Update") {
      if (editRef.current !== null) {
        let updatedTitle = editRef.current.value;
        onEdit({ id: oldId, title: updatedTitle });
      }
    }
  }

  return (
    <div className="items-container">
      <span>{item.title}</span>
      <div className="item-buttons">
        {edit && <input type="text" ref={editRef} defaultValue={item.title} />}
        <button
          className="border-2 rounded-lg bg-gray-300"
          onClick={(e) => handleEdit(e, item.id)}
        >
          {edit ? "Update" : "Edit"}
        </button>
        {!edit && (
          <button
            className="border-2 rounded-lg bg-gray-300"
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ListItem;
