// var vall = "var";
// console.log(vall);

// // var変数は上書き可能

// vall = "var変数";
// console.log(vall);

// var vall = "var1";
// console.log(vall);

// let val2 = "let";
// console.log(val2);

// val2 = "let2";
// console.log(val2);

// let val2 = "let1";
// console.log(val2);

// const val3 = "const";
// console.log(val3);

// val3 = "const2";
// console.log(val3);

// const val3 = "const3";
// console.log(val3);

// const val4 = {
//   name: "あ",
//   age: "20"
// };

// val4.name = "い";
// val4.address = "aa";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "ならっち";
// const age = 23;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
//   str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// const myProfile = {
//   name: "ならっち",
//   age: 23
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["ならっち", 23];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

/**
 * map
 */
// const nameArr = ["田中", "山田", "奈良"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name,index) => console.log(`${index+1}番目は${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "奈良") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**filter */

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

/**三項演算子 */
//ある条件 ？ 条件がtureの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num ="1300";
// const formattedNum = typeof num === 'number' ? num.toLocaleString() :'数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 +num2 >100 ? '100を超えています！' : '許容範囲以内です';
// }
// console.log(checkSum(30,60));

/**論理演算子 */

// const flug1 = true;
// const flug2 = true;

// if (flug1 || flug2) {
//   console.log("１か２はtrueになります。");
// }

// if (flug1 && flug2) {
//   console.log("１も２もtrueになります。");
// }

// ||は左側がflaseなら右側を返す
// const num = null;
// const fee = num || "金額未設定";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
