

var numArr = [];
// var numArr = [1,3,4,5,-2];

function tongSoDuong() {

  var number = document.getElementById("txt-number").value * 1;

  document.getElementById("txt-number").value = "";


  numArr.push(number);

  var sumPositive = 0;

  var countPositive = 0;

  var numMin = numArr[0];

  var numMinDuong = numArr[0];


  var evenNumber = numArr[0];

  var order = "";


  var countNegative = 0;

  var soNguyento = null;
  var soDuonglonhon1Arr = numArr.filter(function (n) {
    return n > 1;
  });



  for (var index = 0; index < numArr.length; index++) {
    var currentNum = numArr[index];

    if (currentNum > 0) {
      sumPositive += currentNum;
      countPositive++;
      //sumPositive += currentNum;
      if (currentNum > 0, currentNum < numMinDuong) {
        numMinDuong = currentNum;
      }
    }
    if (currentNum < numMin) {
      numMin = currentNum;
    }
  }
  for (var index = 0; index < numArr.length; index++) {
    var currentNum = numArr[index];

    if (number % 2 == 0) {
      evenNumber = number;
      var last = evenNumber[evenNumber.length];
    }


  }
  for (var index = 0; index < numArr.length; index++) {
    //bai 7
    var currentNum = numArr[index];

    for (var i = 0; i < numArr.length; i++) {
      if (numArr[index] < numArr[i]) {
        order = numArr[i];
        numArr[i] = numArr[index];
        numArr[index] = order;
      }


      // bai 10
      if (currentNum < 0) {
        countNegative++;
      }

      var compare = "";
      if (countPositive > countNegative) {
        compare = "so duong > so am";
      } else if (countPositive < countNegative) {
        compare = "so duong < so am";
      } else {
        compare = "so duong = so am";
      }

    

    }
  }
  console.log({
    numArr, countPositive, sumPositive, numMin, numMinDuong, evenNumber,
    order, countNegative, soNguyento,
  });

  document.getElementById("result").innerHTML = `1: Sum of Positive Numbers is: 
${sumPositive},
<br>2: Count positive numbers: ${countPositive},
<br>3: The smallest number is: ${numMin},
<br>4: The smallest positive number is: ${numMinDuong},
<br>5: The last even number is: ${evenNumber},
<br>7: Sort numbers in array: ${numArr},
<br>10: Result of comparing positive and negative numbers in array: ${compare},`
};



// Bai 6
function doiCho() {

  var viTri1 = document.getElementById("txt-viTri1").value*1- 1;
  var viTri2 = document.getElementById("txt-viTri2").value*1 - 1;

  var viTriCurrent = numArr[viTri1];
  numArr[viTri1] = numArr[viTri2];
  numArr[viTri2] = viTriCurrent;

  document.getElementById("result_bai6").innerText = `Bai6:The array after change potision is: ${numArr}`

}

// bai 8
function soNguyenToDauTien() {
  var soNguyento = null;
  var soNguyenToArr = numArr.filter(function (n) {
    return n > 1;
  });

  for (index = 0; index < soNguyenToArr.length; index++) {
    var x = soNguyenToArr[index];
    countSoNguyen = 0;
    for (i = 1; i <= Math.sqrt(x); i++) {
      if (x % i == 0) {
        countSoNguyen += 1;
      
      }
    }
    if (countSoNguyen == 1) {
      soNguyento = soNguyenToArr[index];
      break;
    } else {
      soNguyento = "-1";
    }

   
  }
  console.log({
    soNguyento, 
  });
  document.getElementById("result_bai8").innerText = `
  8: First prime number: ${soNguyento},

  `;
}

// bai 9

function demSoNguyen() {
  var soNguyenArr = numArr.filter(function (n) {
    return n % 1 == 0;
  });
  document.getElementById("result_bai9").innerHTML = soNguyenArr.length;
}


