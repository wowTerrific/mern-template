
import { useState } from "react";

const TypeWriter = ( props ) => {

	// break apart each sentence to another array of each letter
	const output = props.write.map(x => x.split(""))
	

	// set state as first variable
	const [typeWrite, setTypeWrite] = useState('');
	const [outputIndex, setOutputIndex] = useState(0);
	
	// select output[index]
	// if typeWrite.length === output[index].length
	// output[index].map( x => setTypeWrite(typeWrite.slice(0, -1));
	// else 
	// map output[index] x => setTypeWrite(typeWrite += x)

	return (
		<>
			{typeWrite}
		</>
	)

}

export default TypeWriter;

/* 
<TypeWriter write={[
	"one", 
	"two", 
	"three"
]} />
*/