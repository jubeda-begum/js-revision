function mySetInterval(callback,delay){
    let timerId=null;
    let stopped=false;
    function repeat(){
        if(stopped)
            return;
        callback();
        timerId=setTimeout(repeat,delay);
    }
    timerId=setTimeout(repeat,delay);
    return {
        stop(){
            stopped=true;
            clearTimeout(timerId);
        }
    }
}
let count=0;
const interval=mySetInterval(() =>{
    count++;
    console.log("count:",count);
    if(count===6){
        interval.stop();
        console.log("stopped");
    }
},1000);