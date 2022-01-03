import { TODO_UPDATE, TODO_DELETE, TODO_INSERT } from "./todoType";

export const insertTodo = (value) => {
    return {
        type: TODO_INSERT,
        todoList: value,
    };
};

export const updateTodo = (value) => {
    return {
        type: TODO_UPDATE,
        todoList: value,
    };
};

export const deleteTodo = (value) => {
    return {
        type: TODO_DELETE,
        todoList: value,
    };
};