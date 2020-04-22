const initialState = {
    taskList: [{ id: 1, text: "Task 1", isCompleted: false, edit: false },
    { id: 2, text: "Task 2", isCompleted: false, edit: false },
    { id: 3, text: "Task 3", isCompleted: false, edit: false }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                taskList: [...state.taskList, action.payload]
            };
        case 'REMOVE_ITEM':
            return {
                taskList: state.taskList.filter((element) => element.id !== action.payload)
            };

        case 'COMPLETE_ITEM':
            return {

                taskList: state.taskList.map((element) => (element.id === action.payload) ?
                    ({ ...element, isCompleted: !element.isCompleted })
                    : (element)

                )
            };
        case 'EDIT_ITEM':
            return {
                taskList: state.taskList.map((element) => (element.id === action.payload) ?
                    ({ ...element, edit: !element.edit })
                    : (element)

                )
            };
        case 'SAVE_ITEM':
            return {
                taskList: state.taskList.map((element) =>  (element.id === action.payload.id) ?
                    ({ ...element, text: action.payload.text, edit: !element.edit })
                    : (element)

                )
            };
        default: return state;
    }
}