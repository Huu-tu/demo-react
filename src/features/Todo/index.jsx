import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classnames from "classnames";

Todo.propTypes = {};

function Todo(props) {
  const [valueInput, setValueInput] = useState({
    inputTask: "",
  });
  const inititems = [
    {
      name: "Aflreds Futterkiste",
      status: "new",
      action: {
        new: true,
        depending: true,
        complete: true,
        delete: true,
      },
    },
    {
      name: "aaa",
      status: "new",
      action: {
        new: true,
        depending: true,
        complete: true,
        delete: true,
      },
    },
  ];
  const [items, setItems] = useState(inititems);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    let task = valueInput.inputTask;
    let item = [...items];
    let schema = {
      name: task,
      status: "new",
      action: {
        new: true,
        depending: true,
        complete: true,
        delete: true,
      },
    };
    item.push(schema);
    setItems(item);
  };

  const handleStatus = (index, status) => {
    let item = [...items];
    item[index].status = status;
    setItems(item);
  };

  console.log("value", items);
  return (
    <div className="todo">
      <div className="todo__title">Todos</div>
      <div className="todo__add add">
        <div className="add__title">Add a task</div>
        <div className="add__content content">
          <p className="content__title">item</p>
          <input
            className="content__input-todo"
            placeholder="What do you wants to do?"
            name="inputTask"
            value={valueInput.inputTask}
            onChange={handleInput}
          ></input>

          <p className="content__note">Enter what you want to procastinate </p>
          <button
            className="content_submit btn btn--primary pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="todo__task task">
        <div className="task__title">Task</div>
        <div className="task__content content">
          <table className="task__table table">
            <thead>
              <tr>
                <th>Items </th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className={classnames({
                      new: item.status === "new",
                      completed: item.status === "completed",
                      depending: item.status === "depending",
                      "btn-pre": true,
                      disabvle: true,
                    })}
                  >
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                    <td>
                      {item.action.new && (
                        <button
                          className="content__complete btn btn--primary pointer"
                          onClick={() => handleStatus(index, "new")}
                        >
                          New
                        </button>
                      )}
                      {item.action.depending && (
                        <button
                          className="content__complete btn btn--primary pointer"
                          onClick={() => handleStatus(index, "depending")}
                        >
                          Depending
                        </button>
                      )}
                      {item.action.complete && (
                        <button
                          className="content__complete btn btn--primary pointer"
                          onClick={() => handleStatus(index, "completed")}
                        >
                          Complete
                        </button>
                      )}
                      {item.action.delete && (
                        <button className="content__delete btn btn--secondary pointer">
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Todo;
