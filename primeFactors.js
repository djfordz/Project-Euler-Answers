
var number = 600851475143;
 var factor = 0;
function calc(number) {
   
    var i = 2; 
    var max = number / i;
        for(i; i <= max; i++) {
            if(number % i === 0) {
                factor = i;
            }
        }
        number = factor
       if(factor  === factor % i) {
        calc(number);
       }
        console.log(factor);
}
calc(number);
600851475143
8462696833
10086647
6857