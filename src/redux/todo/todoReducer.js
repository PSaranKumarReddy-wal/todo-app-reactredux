import { TODO_UPDATE, TODO_DELETE, TODO_INSERT } from "./todoType";

const initialState = [{
        id: 1,
        todo: "hai",
    },
    {
        id: 2,
        todo: "hai",
    },
    {
        id: 3,
        todo: "hai",
    },
    {
        id: 4,
        todo: "hai",
    },
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_INSERT:
            return [...state, action.todoList];
        case TODO_UPDATE:
            const updateResult = state.map((item) =>
                item.id === action.todoList.id ? {...action.todoList } : item
            );

            return updateResult;
        case TODO_DELETE:
            const deletedTodoList = state.filter(
                (item) => item.id !== action.todoList.id
            );
            return deletedTodoList;

        default:
            return state;
    }
};

export default reducer;