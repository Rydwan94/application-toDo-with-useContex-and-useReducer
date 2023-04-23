import { createContext, useReducer } from "react";

export const tasksContext = createContext()

const TasksReducer = (state, action) => {
    switch(action.type) {
        case 'Add':
            return [...state, action.payload]
        case 'Remove':
            return state.filter(item => item.id !== action.payload)
        case 'TaskDone':
            return state.map(item => {
                if(item.id === action.payload){
                  return {...item, isDone: !item.isDone, priority: false}; // zaktualizuj isDone dla odpowiedniego zadania
                } else {
                  return item;
                }
              });
        case 'TaskPriority':
            return state.map(item => {
                if(item.id === action.payload){
                    return {...item, priority: !item.priority}
                }else {
                    return item;
                }
            })
        default:
            throw new Error('Something went wrong')
    }
}

const TasksProvider = ({children}) => {
    const [state, dispatch] = useReducer(TasksReducer, [])
    console.log(state)

    const Add = (newTask) => dispatch({type: 'Add', payload: newTask})
    const Remove = (id) => dispatch({type: 'Remove', payload: id})
    const TaskDone = (id) => dispatch({type: 'TaskDone', payload: id})
    const TaskPriority = (id) => dispatch({type: 'TaskPriority', payload: id})

    return(
        <tasksContext.Provider value={{state, Add, Remove, TaskDone, TaskPriority}}>
            {children}
        </tasksContext.Provider>
    )
}

export default TasksProvider