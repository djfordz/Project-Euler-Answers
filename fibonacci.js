var number = [1, 2];


function calc(max) {
    function fibonacci(array) {
        var i = 0;
        for(i; i <= max; i++) {
            number.splice(2, 1, i);
//             number[0] = number[2];
             number[2] = number[0] + number[1]
//             number[1] = number[2];
             var newNum = number.map(function(sum) {
                return number[0] + number[1]
             });
             newNum.reduce(function(a, b) {
                
             });
            console.log(newNum);
            console.log(number);
        }
           
    }
    fibonacci()
}
calc(10);
