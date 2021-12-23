import React, {useState, useEffect} from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

const PageTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const {data} = await axios.get(
                "http://localhost:8080//Task"
            );

            setTasks(data);
        };
        fetchTasks();
    }, []);

    const handleTaskClick = (taskId) => {
        let entity = {}
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                entity = {...task, completed: !task.completed};
                return entity
            }

            return task;
        });

        axios.put(`http://localhost:8080//Task/${entity.id}`, entity)

        setTasks(newTasks);
    };


    const handleTaskAddition = (taskTitle) => {
        const newTasks = [
            ...tasks,

            {
                title: taskTitle,
                id: uuidv4(),
                completed: false,
            },
        ];

        setTasks(newTasks);
    };

    const handleTaskDeletion = (taskId) => {


        const url = `http://localhost:8080//Task/${taskId}`;
        axios.delete(url)


        const newTasks = tasks.filter((task) => task.id !== taskId);


        setTasks(newTasks);
    };


    return (
        <>
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
        </>
    );
};


export default PageTask;