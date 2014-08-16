
var numbers = 1;
var newNum =[];
function calc (max) {
    while ( numbers <= max ) {
        if ( numbers % 3 === 0 || numbers % 5 === 0 ) {
            newNum.push(numbers);
        } 
        numbers++;
    };

        function sum (array) {
            var total = 0;
            for (var i = 0, l = newNum.length; i < l; i++) {
                total += newNum[i];
            }
            return total;
        };
        console.log(sum(newNum))
// document.getElementById('answer').innerHTML=sum(newNum);
};
calc(1000);
