import React from "react";
import TasksView from "../../components/TasksView";

const MyDayTasks = () => {
    return (
        <TasksView filterByDueDate={true} />
    )
}

export default MyDayTasks;
