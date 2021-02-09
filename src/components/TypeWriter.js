import { useState, useEffect } from "react";

const TypeWriter = ( props ) => {

	const initArray = props.write;

	const [ writeArray, setWriteArray ] = useState(initArray[0]);
	const [ animName, setAnimName ] = useState('typewrite');
	const [ arrayIndex, setArrayIndex ] = useState(0);

	useEffect( () => {
		const index = setTimeout(() => {
			setArrayIndex(arrayIndex + 1);
		}, 3000);
		return () => clearTimeout(index)
	}, [writeArray]);


	useEffect( () => {
		const changeArray = setTimeout( () => {
			setAnimName('typewrite');
			arrayIndex < initArray.length && setWriteArray(initArray[arrayIndex]);
		},3500);
		return () => clearTimeout(changeArray)
	}, [arrayIndex]);
	

	useEffect( () => {
		const changeAnim = setTimeout( () => {
			arrayIndex < initArray.length -1 && setAnimName('typewrite typedelete');
		},3000);
		return () => clearTimeout(changeAnim)
	}, [writeArray]);


	return (
		<>
			<h2 className={animName}>{writeArray}</h2>
		</>
	)

}

export default TypeWriter;

