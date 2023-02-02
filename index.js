function writeCards(arr, event){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        let message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        newArr.push(message);
    }
    return newArr;
}

function countDown(num){
    let count = num;
    for (let i = 0; i <= num; i++){
        console.log(count);
        count --;
    }
}