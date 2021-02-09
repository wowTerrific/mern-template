
import { useState, useEffect } from "react";

const TypeWriter = ( props ) => {

	const initArray = props.write;

	const [ writeArray, setWriteArray ] = useState(initArray[0]);
	const [ animName, setAnimName ] = useState('typewrite');
	const [ arrayIndex, setArrayIndex ] = useState(0);

	useEffect( () => {
		setTimeout( () => {
			changeWrite();
		}, 3000);
	}, [writeArray]);

	const changeWrite = () => {
		console.log(arrayIndex);
	  if (arrayIndex < initArray.length) {
		 setArrayIndex(arrayIndex + 1) 
		 setWriteArray(initArray[arrayIndex]);
	  }
	};
	
	// setWriteArray
	// pause
	// set anim name to delete
	// pause
	// setWriteArray & setAnimName to write
	
	// loop starting at step 2
	

	return (
		<>
			<h2 className={animName}>{writeArray}</h2>
		</>
	)

}

export default TypeWriter;

