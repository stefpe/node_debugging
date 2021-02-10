const fib = n => {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2)
    } else {
        return n;
    }
};

const result = fib(3);

const log = `my result is ${result}`;
console.log(log);