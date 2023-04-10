function minValue() {
    var min = core[0];
    for (var i = 0; i < core.length; i++) {
        
        if (core[i] < min) {
            min = core[i];
        }
    }
    return min;
};


function maxValue() {
    var max = 0;
    for (var i = 0; i < core.length; i++) {
        if (core[i] > max) {
            max = core[i];
        }
    }
    return max;
};

function avgValue(){ 
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

const evnet_a = document.querySelector('#inputFile');
evnet_a.addEventListener('change', function(event){

    var fileList = evnet_a.files || event.target.files;

    var file = fileList[0];
    var reader = new FileReader();

    reader.onload = function(progressEvent){
        console.log(progressEvent.target.result);
    };
    reader.readAsText(file);
    const valueA = reader.readAsArrayBuffer(file);

    minValue(valueA);
    maxValue(valueA);
    avgValue(valueA);
    
});

/* function output(){
    const file = new FileReader();

    file.readAsText(this.files[0]);
    a(file);
    b(file);
    c(file);

    document.write(min, max, avg);

    document.write("hellos");
}; */