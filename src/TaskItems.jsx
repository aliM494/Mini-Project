import React, { useContext } from "react";
import { taskContext } from "./taskContext";

const TaskItems = () => {
  const { taskItems, setTaskItems } = useContext(taskContext);

  const handleDoneTask = (id) => {
    const index = taskItems.findIndex((t) => t.id === id);

    let newTaskItems = [...taskItems];

    newTaskItems[index].done = !newTaskItems[index].done;

    setTaskItems(newTaskItems);
  };

  const handleDeleteTask = (id) => {
    setTaskItems(taskItems.filter((t) => t.id !== id));
  };

  if (taskItems.length) {
    return (
      <>
        <ul className="list-group m-0 p-0 mt-2">
          {taskItems.map((t) => (
            <li
              className={`list-group-item d-flex justify-content-between ${
                t.done ? "list-group-item-success" : ""
              }`}
            >
              {t.title}
              <span>
                <i
                  onClick={() => handleDoneTask(t.id)}
                  className={`me-3 pointer fas ${
                    t.done ? "fa-times text-warning" : "fa-check text-success"
                  } transition_200 text_hover_shadow`}
                ></i>
                <i
                  onClick={() => handleDeleteTask(t.id)}
                  className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"
                ></i>
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <h4 className="text-center text-danger mt-4">هیچ چیزی ثبت نشده است!</h4>
    );
  }
};

export default TaskItems;
