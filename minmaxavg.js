function minValue(data) {
    var core = data;
    var min = core[0];
    for (var i = 0; i < core.length; i++) {
        
        if (core[i] < min) {
            min = core[i];
        }
    }
    return min;
};

function maxValue(data) {
    var core = data;
    var max = 0;
    for (var i = 0; i < core.length; i++) {
        if (core[i] > max) {
            max = core[i];
        }
    }
    return max;
};

function avgValue(data){ 
    var core = data;
    var sum = 0;   
    for (var i = 0; i < core.length; i++) {
        sum = sum + core[i];
        var avg = sum/core.length;
    }
    return avg;
};

document.write(min, max, avg);

// 표준편차 함수 추가