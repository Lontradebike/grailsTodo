import React, { useState } from "react";

import Button from "./Button";
import axios from "axios"
import "./AddTask.css";

const AddTask = ({handleTaskAddition, addTasks}) => {
	const [inputData, setInputData] = useState("");


	const handleInputChange = (e) => {

		setInputData(e.target.value);
	};

	const handleAddTaskClick = () => {
		const dados = {title: inputData};
		axios.post('http://localhost:8080//Task', dados)


		handleTaskAddition(inputData);
		setInputData("");
	};

	return (
		<div className="add-task-container">
			<input
				onChange={handleInputChange}
				value={inputData}
				className="add-task-input"
				type="text"
			/>
			;
			<div className="add-task-button-container">
				<Button onClick={handleAddTaskClick}>Adicionar</Button>
			</div>
		</div>
	);
};

export default AddTask;
