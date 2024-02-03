import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./App.css";

export const TodoList = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  console.log(items);

  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  const addItem = () => {
    const eachItem = {
      id: Math.floor(Math.random() * 1000),
      value: item,
      checked: false,
    };
    setItems((oldList) => [...oldList, eachItem]);
    setItem("");
  };

  const handleRadioChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : { ...item }
      )
    );
  };

  const deleteId = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div>
      <h1 className="headingStyle">Todo List</h1>
      <div
        style={{
          width: "300px",
          align: "center",
          marginLeft: "500px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {isOpen && (
          <div
            style={{
              padding: "10px",
              width: "300px",
              align: "center",
            }}
          >
            <input
              placeholder="please enter your list"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            ></input>
            <button
              style={{
                backgroundColor: "#0754ef",
                color: "white",
              }}
              onClick={() => {
                toggleBox();
                addItem();
              }}
            >
              Add item
            </button>
          </div>
        )}
        <div>
          {items.map((item) => {
            return (
              <li key={item.id} type="none">
                <input
                  style={{ marginRight: "25px" }}
                  type="radio"
                  id={`item-${item.id}`}
                  name="todo-item"
                  checked={item.checked}
                  onClick={() => handleRadioChange(item.id)}
                />

                <text className={item.checked ? "listStyle" : ""}>
                  {item.value}
                </text>

                <button
                  style={{
                    marginLeft: "25px",
                    backgroundColor: "#9cbcff",
                    borderRadius: "25%",
                    border: "white",
                  }}
                  onClick={() => deleteId(item.id)}
                >
                  <FaTrash size={8} color="red" border="red" />
                </button>
              </li>
            );
          })}
        </div>
        <button
          style={{
            backgroundColor: "#0754ef",
            color: "white",
          }}
          onClick={toggleBox}
        >
          Add task
        </button>
      </div>
    </div>
  );
};
