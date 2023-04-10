function a() {
    var min = core[0];
    for (var i = 0; i < core.length; i++) {
        
        if (core[i] < min) {
            min = core[i];
        }
    }
    return min;
};


function b() {
    var max = 0;
    for (var i = 0; i < core.length; i++) {
        if (core[i] > max) {
            max = core[i];
        }
    }
    return max;
};

function c (){ 
    var sum = 0;   
    for (var i = 0; i < core.length; i++) {
        sum = sum + core[i];
        var avg = sum/core.length;
    }
    return avg;
};

//const aaa = [1,2,3];
//console.log(Math.max(...aaa));

//let core = [1,2,3,4,5];

const core = document.querySelector('#inputFile');
core.addEventListener("change", output);

function output(){
    const file = new FileReader();

    file.readAsText(this.files[0]);
    a(file);
    b(file);
    c(file);

    document.write(min, max, avg);
}