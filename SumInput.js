function sumInput(){
let array=[];
for (;;) {
	let value =prompt ("Введите число",'');
	if (value ===""|| value === null|| !isFinite(value))break;
	array.push(+value);
}
array.sort((a,b)=> a-b)
	alert array;

let sum = 0;
for (let arr of array){
	sum +=arr;
}
return (sum);
	
}

alert (sumInput() );
