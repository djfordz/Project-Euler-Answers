var number = 600851475143, factor = 2;
function calc(number) {
        while(number != factor) {
            if (number % factor === 0) {
                number = number / factor;
                factor = 2;
            } else {factor += 1}
        }
        console.log(factor);
}
calc(number);
