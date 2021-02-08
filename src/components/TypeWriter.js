
import { useState } from "react";

const TypeWriter = ( props ) => {

	const initArray = props.write;

	const [ writeArray, setWriteArray ] = useState('');
	const [ animName, setAnimName ] = useState('typewrite');

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

