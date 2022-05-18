function factorial(n){
    if(n === 1){
        return 1;
    }
    return n * factorial(--n);
}
console.log(factorial(9));


function findMaximum(jaggedArray){

    function checkArray(element){
        return Array.isArray(element);
    }

    const maximumNumber = Math.max(...jaggedArray.map(element => checkArray(element) ? findMaximum(element) : element));

    return maximumNumber;   
}

console.log(findMaximum( [2,4,10,[12,4,[100,99],4],[3,2,99],0]));



function countDuplicate(array){
    let duplicateCount = {};
    
    for(let i =0; i< array.length; i++){
        const element = array[i];
        duplicateCount[element]  = (duplicateCount[element] || 0) + 1;
    }
    
    return duplicateCount;
}

const arr= ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"]
console.log(countDuplicate(arr));



function uniqueValuesInSortedOrder(array) {
    let newArray = [];
    for(let i =0; i< array.length; i++){
        const element = array[i];
        if ((newArray.indexOf(element)) == -1) {
            newArray.push(element);
        } else {
            continue;
        }
    }
    const sortedOrder = newArray.sort((a,b) => a- b);
    return sortedOrder;
}

const arr2= [1,5,7,44,5,9,4,5,9,10,6,7,8]
console.log((uniqueValuesInSortedOrder(arr2)));





