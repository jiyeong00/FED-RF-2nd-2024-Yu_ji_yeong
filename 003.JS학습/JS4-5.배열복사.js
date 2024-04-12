///////////////////////////////////////////////////
// JS4-5. 배열의 복사 /////////////////////////////
///////////////////////////////////////////////////
// 참고) JS코드만 실행 확장프로그램: 
// Code Runner(+ Node JS설치후 리부팅)

///////////////////////////////////////////////////
// 0. 일반값의 변수할당 /////////////////////////////
///////////////////////////////////////////////////

//////////////////////////////////////////////
// 값이 할당된 변수를 다른 변수에 할당시 
// 할당 내용은 크게 두가지로 나눠진다
// [1] 값할당 : 단일 데이터값(문자,숫자,날짜 등)
// [2] 주소할당 : 배열, 객체 
///////////////////////////////////////////////
// 일반적으로 변수에 값을 할당후 다른변수에 할당하면
// 값이 할당된다!
// 그러나... 배열이나 객체를 할당한 변수를 할당하면
// 할당된 다른변수의 배열/객체값을 변경하면 
// 할당원본이 변경된다! 따라서 주소할당이라고 함!
//////////////////////////////////////////////


console.log('0.일반값의 변수할당');
// 원본 kk
let kk=10;
// kk를 tt에 할당하면 값복사일까 주소복사일까?
let tt=kk;
console.log('할당 후 최초상태 \nkk : ',kk,'\ntt',tt);
tt=200;
console.log('tt변경 후 상태 \nkk : ',kk,'\ntt',tt);
///////////////////////////////////////////////////
// 1. 일반배열의 얕은복사(Shallow Copy) /////////////
///////////////////////////////////////////////////

console.log('1.일반배열의 얕은복사(Shallow Copy)');
///////////////////////////////////////////////////
// 2.일반배열의 깊은복사(Deep Copy) /////////////////
///////////////////////////////////////////////////

console.log('\n2.일반배열의 깊은복사(Deep Copy)');
///////////////////////////////////////////////////
// 3.객체값 배열의 얕은복사(Shallow Copy) ///////////
///////////////////////////////////////////////////

console.log('\n3.객체값 배열의 얕은복사(Shallow Copy)');
///////////////////////////////////////////////////
// 4.객체값 배열의 깊은복사(Deep Copy) //////////////
///////////////////////////////////////////////////

console.log('\n4.객체값 배열의 깊은복사(Deep Copy)');