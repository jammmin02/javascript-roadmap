// "" 또는 '' 는 자유롭게 사용
// 백틱(``) :  템플릿 리터럴 (어떠한 기호를 통해서 데이터를 만드는 방법)
const string1 = "Hello";
const string2 = 'Hello';
const string3 = `Hello ${string1} ?!`;

console.log(string3);

// 숫자 데이터를 사용
// 양수 음수 부동소수점 사용도 가능
const number = 123;
const pi = 3.14;

console.log(typeof (number + undefined)); // NaN (Not a Number) : 숫자가 아닌 값이 들어왔을 때 발생하는 오류
console.log(typeof (pi + null)); // number (null은 숫자 0으로 취급됨)

const a = 0.1
const b = 0.2;

console.log(a + b); // 0.30000000000000004 (부동소수점 연산의 오차로 인해 발생하는 현상)

// 0.3 (toFixed() 메서드를 사용하여 소수점 이하 자릿수를 지정할 수 있음)
console.log(typeof Number((a + b).toFixed(1))); // string (toFixed()는 문자열을 반환함)


// boolean 데이터 사용
const a1 = true;
const a2 = false;

// null과 undefined는 모두 값이 없음을 나타내지만
// null은 의도적으로 값이 없음을 나타내고 (명시적)
// undefined는 변수에 값이 할당되지 않았음을 나타냄 (암시적)

let age = null; // null : 값이 없음을 나타내는 데이터 타입
let name = undefined; // undefined : 값이 할당되지 않았음을 나타내는 데이터 타입

const user = {
  name: "John",
  age: 30,
};

console.log(user.name); // John
console.log(user.age); // 30
console.log(user.email); // undefined (존재하지 않는 속성에 접근하면 undefined가 반환됨)

// 배열 (Array) : 여러 값을 순서대로 저장할 수 있는 데이터 구조
// 배열은 대괄호([])로 정의하며, 각 요소는 쉼표(,)로 구분됨
// item : 배열의 각 요소를 의미 sfdf
const fruits = ["apple", "banana", "orange"]

console.log(fruits[1]);

