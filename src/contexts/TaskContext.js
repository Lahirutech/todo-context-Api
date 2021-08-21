import React, { createContext, useState } from 'react'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, taskList] = useState([
        { title: 'Task 01', priority: 'Medium', id: 1 },
        { title: 'Task 02', priority: 'Medium', id: 2 },
    ])

    return (
        <TaskContext.Provider value={{ tasks }}>
            {props.children}

        </TaskContext.Provider>
    )
}

export default TaskContextProvider