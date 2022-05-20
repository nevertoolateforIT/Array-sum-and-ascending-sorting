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

let n=array.length;
for (let i=0; i< (n-1); i++){
	for (let j=0; j<(n-1-i); j++){
		if (array [j+1] <array [j]){ 
			let t=array [j+1];
			array [j+1]=array [j];
			array [j]=t;
		}
		}
	}
	return array;	
}



alert (sumInput() );
