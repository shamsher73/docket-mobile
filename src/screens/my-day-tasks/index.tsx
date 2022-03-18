import React from "react";
import TasksView from "../../components/TasksView";

const MyDayTasks = () => {
    const dates = {
        startDate: new Date(),
        endDate: new Date()
    }
    return (
        <TasksView filterByDueDate={true} showAddoption={true} dates={dates}/>
    )
}

export default MyDayTasks;
