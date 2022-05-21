function sumInput(){
let array=[];
for (;;) {
	let value =prompt ("Введите число",'');
	if (value ===""|| value === null|| !isFinite(value))break;
	array.push(+value);
}

let sum = 0;
for (let arr of array){
	sum +=arr;
}
alert (sum);

array.sort((a,b)=> a-b)
	return array;	
}

alert (sumInput() );
