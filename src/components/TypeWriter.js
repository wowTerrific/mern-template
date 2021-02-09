import { useState, useEffect } from "react";

const TypeWriter = ( props ) => {

	const initArray = props.write;

	const [ writeArray, setWriteArray ] = useState(initArray[0]);
	const [ animName, setAnimName ] = useState('typewrite');
	const [ arrayIndex, setArrayIndex ] = useState(0);

	useEffect( () => {
		const index = setTimeout(() => {
			setArrayIndex(arrayIndex + 1);
			console.log(arrayIndex);
		}, 3000);

		return () => {clearTimeout(index); console.log('cleartimeout run');}
		
	}, [writeArray]);

	useEffect( () => {
		const changeArray = setTimeout( () => {
			arrayIndex < initArray.length && setWriteArray(initArray[arrayIndex]);
			console.log(writeArray);
		},3500);
		
		return () => {clearTimeout(changeArray); console.log('cleartimeout run');}
		
	}, [arrayIndex]);

	return (
		<>
			<h2 className={animName}>{writeArray}</h2>
		</>
	)

}

export default TypeWriter;

