var number = [1, 1];
var evenNumbers = [];
    
    function fibonacci(max) {
        while(number[0] <= max) {
            number[2] = number[0] + number[1];
            number.splice(0, 0);
            number[0] = number[1];
            number[1] = number[2];
                 if(number[0] % 2 === 0  && number[0] <= max) {
                    evenNumbers.push(number[0]);
                }
        }
        console.log(evenNumbers);
        function sum(array) {
            var total = 0;
            for (var i = 0, l = evenNumbers.length; i < l; i++) {
                total += evenNumbers[i];
            }
            return total;
        };
        console.log(sum(evenNumbers));
        document.getElementById('problemTwo').innerHTML=sum(evenNumbers);
    }
fibonacci(4000000);
