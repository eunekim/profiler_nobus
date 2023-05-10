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

//Math.min();
//Math.max();

// 표준편차 함수 추가

var xhr = new XMLHttpRequest();
xhr.open('GET', '/');
xhr.onload = function() {
  if (xhr.status === 200) {
    var data = xhr.responseText;
    // 데이터를 처리하는 코드를 작성합니다.
  }
  else {
    console.log('서버로부터 데이터를 가져오는 데 실패했습니다.');
  }
};
xhr.send();

var jsonObject = JSON.parse(data);
var dataArray = Object.values(jsonObject);

var max = Math.max(...dataArray);
var min = Math.min(...dataArray);
var sum = dataArray.reduce((acc, cur) => acc + cur, 0);
var avg = sum / dataArray.length;

//표준편차 함수
function calculateStandardDeviation(data) {
    const n = data.length;
    const mean = data.reduce((acc, cur) => acc + cur, 0) / n;
    const variance = data.reduce((acc, cur) => acc + Math.pow(cur - mean, 2), 0) / n;
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
  }