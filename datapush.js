const mysql = require('mysql');

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost', // MySQL 호스트
  user: 'username', // MySQL 사용자명
  password: 'password', // MySQL 비밀번호
  database: 'database_name' // MySQL 데이터베이스 이름
});

// 데이터 가져오기 함수
function fetchDataById() {
  // MySQL 연결
  connection.connect((error) => {
    if (error) {
      console.error('MySQL 연결 오류:', error);
      return;
    }

    console.log('MySQL에 연결되었습니다.');

    // 데이터 조회 쿼리 실행
    const query = 'SELECT id, core, task, value FROM your_table_name';

    connection.query(query, (error, results) => {
      if (error) {
        console.error('쿼리 실행 오류:', error);
        return;
      }

      // 데이터 가공 또는 처리
      processData(results);

      // MySQL 연결 종료
      connection.end((error) => {
        if (error) {
          console.error('MySQL 연결 종료 오류:', error);
        } else {
          console.log('MySQL 연결이 종료되었습니다.');
        }
      });
    });
  });
}

fetchDataById();

// 데이터 처리 함수
function processData(data) {
  // 여기서 데이터를 자바스크립트 함수에 넣어서 원하는 작업을 수행합니다
  function taskButton(a){
    let buttonValue = a; 
    let buttonName = data.task;
    let labelName = data.core;
  }
  function coreButton(a){
    let buttonValue = a; 
    let buttonName = data.core;
    let labelName = data.task;
  }
  
  let id = data.id;
  let value = data.value;

  for (id = 0; id < 300; id++) {
    if (buttonName == buttonValue){
      if (labelName == 1) {
        var mmaArray1 = [];
        mmaArray1.push(value);
      }
      else if (labelName == 2) {
        var mmaArray2 = [];
        mmaArray2.push(value);
      }
      else if (labelName == 3) {
        var mmaArray3 = [];
        mmaArray3.push(value);
      }
      else if (labelName == 4) {
        var mmaArray4 = [];
        mmaArray4.push(value);
      }
      else {
        var mmaArray5 = [];
        mmaArray5.push(value);
      }
    }
  }
  var mmaResult1 = cal(mmaArray1);
  var min1 = mmaResult1.min;
  var max1 = mmaResult1.max;
  var avg1 = mmaResult1.avg;

  var mmaResult2 = cal(mmaArray2);
  var min2 = mmaResult2.min;
  var max2 = mmaResult2.max;
  var avg2 = mmaResult2.avg;

  var mmaResult3 = cal(mmaArray3);
  var min3 = mmaResult3.min;
  var max3 = mmaResult3.max;
  var avg3 = mmaResult3.avg;
  
  var mmaResult4 = cal(mmaArray4);
  var min4 = mmaResult4.min;
  var max4 = mmaResult4.max;
  var avg4 = mmaResult4.avg;
  
  var mmaResult5 = cal(mmaArray5);
  var min5 = mmaResult5.min;
  var max5 = mmaResult5.max;
  var avg5 = mmaResult5.avg;
  
  console.log(min1)
  return {
    min1 : min1,
    max1 : max1,
    avg1 : avg1,
    min2 : min2,
    max2 : max2,
    avg2 : avg2,
    min3 : min3,
    max3 : max3,
    avg3 : avg3,
    min4 : min4,
    max4 : max4,
    avg4 : avg4,
    min5 : min5,
    max5 : max5,
    avg5 : avg5,
  };
}

// fetchDataById(1); // 원하는 id 값을 전달하여 호출

function cal(dataArray){
  for (var i = 0; i < dataArray.length; i++){
    var min = dataArray[0].value;
    if (dataArray[i] < min) {
      min = dataArray[i];
    }

    var max = dataArray[0].value;
    if (dataArray[i] > max) {
      max = dataArray[i];
    }

    var sum = 0;   
    sum = sum + dataArray[i];
  }
  return {
    min: min, 
    max: max,
    avg: avg
  };
}