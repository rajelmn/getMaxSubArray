function getMaxSubSum(arr) {
    let something;
    let value = 0;
    
    for(i = 0 ; i < arr.length ; i++) {
        for(j = 1 ; j <= arr.length ; j++) {
        
            if(i < j) { 
                array = arr.slice(i , j);
               something =(array.reduce((a, b) => a + b, 0));
               value = something > value ? something: value;
               
            }
        }
    }
    return value;
}

getMaxSubSum([-1, 2, 3, -9, 11])