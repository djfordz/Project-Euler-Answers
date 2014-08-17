var number = [1, 1];
var num = [];
    
    function fibonacci(max) {
        var i = 1;
        for(i; i <= max; i++) {
            number[2] = number[0] + number[1];
            number.splice(i, 0);
            number[0] = number[1];
            number[1] = number[2];
                 if(number[0] % 2 === 0  && number[0] < max) {
                    num.push(number[0]);
                }
        }
        console.log(num);
        function all (array) {
            var total = 0;
            for (var i = 0, l = num.length; i < l; i++) {
                total += num[i];
            }
            return total;
        };
        console.log(all(num));
        document.getElementById('problemTwo').innerHTML=all(num);
    }
fibonacci(4000000);
