import React from "react";
import TasksView from "../../components/TasksView";

const MyTasks = () => {
    const dates = {
        startDate: new Date(),
        endDate: new Date()
    }
    return (
       <TasksView filterByDueDate={false} showAddoption={true} dates={dates}/>
    )
}

export default MyTasks;
