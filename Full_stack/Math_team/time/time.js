export {
    timeEnd, timeStart
};

function timeStart(){
    const date = Date.now();
    return date;
};
function timeEnd(start){
    const date = Date.now();
    return Math.floor((date - start) / 1000);
};

