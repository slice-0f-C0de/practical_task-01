import React from "react";
import {DataType} from "./App";


export type TasksPropsType = {
    data: DataType
}

export const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <div>{props.data.title}</div>
            <div>{props.data.tasks.map((el) => {
                return <div>{el.taskId} {el.title} {el.isDone}</div>
            })}</div>
            <div>{props.data.students.map((el) => {
                return <div>{el}</div>
            })}</div>
        </div>

    )
}

export default Tasks;