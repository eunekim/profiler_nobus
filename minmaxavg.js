function a(core) {
    var min = core[0];

    for (var i = 0; i < core.length; i++) {
        
        if (core[i] < min) {
            min = core[i];
        }
    }
    return min;
};


function b(core) {
    var max = 0;

    for (var i = 0; i < core.length; i++) {
        if (core[i] > max) {
            max = core[i];
        }
    }
    return max;
};

function c (core){ 
    var sum = 0;   
    for (var i = 0; i < core.length; i++) {
        sum = sum + core[i];
        var avg = sum/core.length;
    }
    return avg;
};

const aaa = [1,2,3];
console.log(Math.max(...aaa));

let core = [1,2,3,4,5];
console.log(a(core));
console.log(b(core));
console.log(c(core));

function dbsubmit(){
    alert("dkdk")
};