import { useState } from "react";
import { connect } from "react-redux";
import { deleteTodo, updateTodo, insertTodo } from "../redux/todo/todoAction";

const TodoList = ({ list, add, delet, update }) => {
  const [input, setInput] = useState("");
  const [id, setId] = useState(5);
  const newTodo = {
    id: id,
    todo: input,
  };
  console.log("log::", list);
  return (
    <div>
      <div>
        <input
          value={input || ""}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            add(newTodo);
            setId((prev) => prev + 1);
          }}
        >
          Add
        </button>
      </div>
      <div>
        {list.map((item) => (
          <li key={item.id}>
            {item.todo}
            <button
              onClick={() => {
                update({ id: item.id, todo: input });
              }}
            >
              update
            </button>
            <button
              onClick={() => {
                delet(item);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

const mapToPropsState = (state) => {
  return {
    list: state,
  };
};

const mapToDispatch = (dispatch) => {
  return {
    add: (value) => dispatch(insertTodo(value)),
    delet: (value) => dispatch(deleteTodo(value)),
    update: (value) => dispatch(updateTodo(value)),
  };
};

export default connect(mapToPropsState, mapToDispatch)(TodoList);
