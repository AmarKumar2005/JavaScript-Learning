// immediately Invoked Function Expressions (IIFE)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
((name) => {
    console.log(`DB Connected Two ${name}`);
})('amar');