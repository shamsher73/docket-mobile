import React from "react";
import TasksView from "../../components/TasksView";

const MyTasks = () => {
    return (
       <TasksView filterByDueDate={false} />
    )
}

export default MyTasks;
