function rateLimiter(fn,delay){
    let lastCalled=0;
    return function(...args){
        let now=Date.now();
        if(now-lastCalled >= delay){
            lastCalled = now;
            fn(...args);
        }
        else{
            console.log("To many calls.try again later.");
        }
    };
}
function greet(){
    console.log("Hello");
}
const limitedGreet=rateLimiter(greet,3000);
limitedGreet();
limitedGreet();
setTimeout(limitedGreet,2000);
setTimeout(limitedGreet,4000);