import { useState } from 'react';
import React from 'react';


const ParentSecond = () => {
  	const [message, setMessage] = useState("Hello");
	
  	const changeMessage = (newMessage) => {
    	setMessage(newMessage);
  	}
	
  	return (
    	<>
      		<label>{message}</label>
      		<ChildComponent changeMessage={changeMessage}/>
    	</>    
  	);
};
const ChildComponent = ({changeMessage}) => {
  	const ClickHandler = () => {
    	changeMessage("Goodbye!");
  	}
	
  	return (
    	<button onClick={ClickHandler}>Click</button>
  	);
};

export default ParentSecond