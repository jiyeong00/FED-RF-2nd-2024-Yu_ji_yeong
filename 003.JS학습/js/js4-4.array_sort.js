// JS4-4. 배열정렬및검색 JS

// 나의 함수 불러오기
import mFn from "./my_function.js";

// console.log('나의 함수',mFn);

/****************************************************** 
    [ JS 배열의 정렬 ]
    -> 용어의 정의: 정렬이란?
    : 배열의 값을 기준으로 순서를 다시 정하는것!
    배열의 정렬은 sort() 메서드 사용!
    sort() 메서드를 사용하여 배열의값을 오른차순,내림차순으로
    정렬할 수 있음!

    [ sort() 메서드의 특징 ]
    1. 기본정렬 :  오름차순(1,2,3,.../a,b,c,...)
        -> 기본 내림차순 메서드 -> reverse()
    2. 원리 : 배열값을 문자열로 캐스팅(형변환)한후
            변환된 문자열을 비교하여 순서를 결정함
    (참고: undefined 값일 경우 배열 맨뒤에 배치함)
    -> 주의: 숫자를 비교해도 문자열로 비교하기 때문에
    "25"와 "100" 중 큰 숫자는 100이지만 25를 더 큰
    데이터로 인식한다! 
    -> sort() 메서드 비교함수로 처리!

    [ sort() 메서드 비교함수 ]
    -> sort() 메서드 내부에 2개의 전달값을 가지는 함수를 쓰면
    sort메서드 자체에서 값을 비교하여 배열값의 순서를 바꾼다!
    -> 숫자일 경우 빼기 연산을 함!

    숫자데이터배열.sort(function(a,b){return a-b;}) => 오름차순
    숫자데이터배열.sort((a,b)=>a-b) => 오름차순

    숫자데이터배열.sort(function(a,b){return b-a;}) => 내림차순
    숫자데이터배열.sort((a,b)=>b-a) => 내림차순

    -> a는 앞 데이터, b는 뒷 데이터

    [-> 기준정렬 : 오름차순]
    배열변수.sort() -> 기본정렬

    [-> 기준정렬 : 내림차순]
    배열변수.reverse() -> 기본정렬

    ++++++++++++++++++++++++++++++++++++++++++++++

    ->>> 숫자형, 문자형에 무관하게 하나로 처리하기!!!
     [ sort() 메서드만 사용하여 정렬잡기 ]

    ((비교함수사용))
    배열변수.sort(function(x,y){
        if(x>y) return 1;
        if(x<y) return -1;
        return 0;
    })
    
    -> 단순화하기(삼항연산자사용!)

    배열변수.sort(function(x,y){
        return x == y ? 0 : x > y ? 1 : -1;
    })

    -> 더 줄이기! (화살표함수 사용!)

    배열변수.sort((x,y)=> x == y ? 0 : x > y ? 1 : -1)


    -> 리턴값의 의미(오름차순)
    1) if(x>y) return 1; -> x가 y뒤에 옴 (리턴값 양수)
    2) if(x<y) return -1; -> x가 y앞에 옴 (리턴값 음수)
    3) return 0; -> x,y 정렬을 유지 (리턴값 0)

    -> 내림차순은 양수/음수만 반대로 써주면 된다!

    [ 정렬시 데이터 유의사항 ]

    1. 문자형일 경우 대소문자가 섞여있으면 대문자나 소문자중
    하나로 통일하여 비교해야함(toUpperCase()/toLowerCase())

    예)
        배열변수.sort((x,y)=>{
            let a = x.toUpperCase(),
                b = y.toUpperCase();
            
            return a == b ? 0 : a > b ? 1 : -1;
        })

    2. 날짜정렬도 숫자와 동일함
    (날짜데이터 자체가 숫자형으로 되어있음)

    3. 특정언어의 특수문자일 경우 
    localeCompare() 메서드로 문자열 비교를 한다!

    예) 특수문자 x변수를 y변수와 변환후 비교 
        x.localeCompare(y)

        *************************************************************

      [ 배열의 검색 : find() / filter() / indexOf() ]

      1. find() 메서드
      (1) 검색후 첫번째 일치값 하나만을 리턴
      (2) 결과가 없으면 undefined 리턴(if문에서 false처리!)
      (3) 콜백함수구성 : function(val,idx,obj){}
          1) val : 처리중 배열의 값
          2) idx : 처리중 배열의 순번
          3) obj : 처리중 배열전체
      (4) 리턴데이터 : 배열의 값 하나(값의 데이터형)
      (5) 활용케이스 : 아이디검사 결과 리턴
      (6) 코드예 :
          변수 = 배열.find(v=>{
              if(v[속성명].indexOf(검색어)!==-1) return true;
          })
          -> 배열을 자동순회하여 if문에 해당되는 데이터가 있으면
          return true 하여 할당된 변수에 저장하고 문장이 바로 끝난다!


      2. filter() 메서드
      (1) 검색후 모든 일치값을 리턴
      (2) 결과가 없으면 빈배열 리턴([]->배열.length 값이 0)
      (3) 콜백함수구성 : function(val,idx,obj){}
          1) val : 처리중 배열의 값
          2) idx : 처리중 배열의 순번
          3) obj : 처리중 배열전체
      (4) 리턴데이터 : 배열형데이터(하나여도 배열값으로 넘어옴!)
      (5) 활용케이스 : 검색리스트 결과 리턴
      (6) 코드예 :
          변수 = 배열.filter(v=>{
              if(v[속성명].indexOf(검색어)!==-1) return true;
          })
          -> 배열을 자동순회하여 if문에 해당되는 데이터가 있으면
          return true 하여 다른값이 계속 나올때까지 배열로 값을
          할당변수에 저장한다!(배열을 전체순회함!)

      3. LIKE 검색방법 : 값의 일부만 넣어도 검색되는 방법
      -> indexOf(값) 을 사용함!
      결과값으로 문자열의 위치순번을 리턴하는데
      만약 없으면 -1을 리턴하므로 이것을 이용하여 
      조건문에 -1이 아닌경우가 검색결과가 있는 경우가 됨!
      예) 
      if(문자열.indexOf(검색문자열)!==-1){결과리턴}
******************************************************/

// 숫자값 배열
const arrNumber = [4, 5, 8, 10, 2, 1, 9, 3, 7, 6];
// 예
const arrNumber2 = [380, 1000, 245, 2278];
// 문자값 배열
const arrString = ["파", "타", "하", "가", "바", "사", "다", "라", "차"];

// sort()는 기본 문자(문자열)로 처리하므로 숫자는 내부함수로 빼기 연산처리함.
// console.log('숫자 배열 : ',arrNumber);
// console.log('숫자 오름차순 : ',arrNumber2.sort());
// // 앞에거와 뒤에있는걸 뺏을때 양수면 순서를 바꿈
// console.log('숫자 오름차순 sort((a,b)=>a-b) : ',arrNumber2.sort((a,b)=>b-a  ));

// console.log('문자 배열 : ',arrString);
// console.log('문자 배열 오름차순 : ',arrString.sort());
// console.log('문자 배열 내림차순 : ',arrString.reverse());

//////////////////////////////////////////////////////////
////////////배열데이터 화면 출력하기//////////////////
// 1. 숫자로만 된 배열의 화면 뿌리기
// map() 메서드로 배열값을 태그로 감싸서 출력하기

// (1)출력대상 :.showNum
const showNum = mFn.qs(".showNum");
// (2) map()메서드 없이 배열값을 이미지태그로 변환하여 코드만들기 함수
const returnTag = (x) => {
  //x는 배열 전달변수
  let hcode = "";
  // 배열만큼 순회하여 태그만들기
  x.forEach((v) => {
    // // console.log('나야나!',v);
    hcode += `
        <img 
        src="./images/num/num_0${v}.png" 
        alt="숫자${v}이미지">
        `;
  }); ///// forEach ///////
  // 3.코드리턴하기
  return hcode;
}; /////returnTag함수/////////

// (3) 배열 숫자데이터만큼 이미지로 변환하여 화면출력
const showImgNum = (arrObj) => {
  showNum.innerHTML = arrObj
    .map(
      (v) => `
    <img src="./images/num/num_0${v}.png" alt="숫자${v}이미지">`
    )
    .join("");
}; ///////////showImgNum함수////////////
/**********************************************************************************
  [map() 메서드의 특징 ]
map((배열값, 순번,전체배열)=>{})
1. 메서드를 사용한 자리에 결과가 배열로 리턴됨
2. 원본배열은 그대로 보존됨
3. 리턴 키워드나 변수, 함수 등 처리방법 불필요
4. 이를 변수에 할당하면 새로운 배열이 생성됨
5. 문자열로 찍어주려면 변수메서드 join() 사용
6. join('') 반문자열 결합을 사용하면 배열값이 깨끗하게 문자열 덩어리로 출력됨
 ->>> 배열.map().join('') -> 배열 맵쪼잉
 ->>> join()을 안쓰면 배열의 기본값이 콤마로 연결되어 할당되는데 콤마를 없애려면 반드시  
      join해야함

 **********************************************************************************/
// console.log('원본 배열:',arrNumber2);

// console.log('원본 배열로 태그작성:',
// arrNumber2.map(v=>`<숫자>${v}</숫자>`));

// console.log('원본 배열로 태그작성한 배열을 문자열로 변경하기:',
// arrNumber2
// .map(v=>`<숫자>${v}</숫자>`).join('🎃'));

// console.log('원본 배열로 데이터작성:',
// arrNumber2.map((v,i)=>
// `👓회원번호${i+1}:${v}포인트`));
// console.log('원본 배열:',arrNumber2);

// 함수호출
showImgNum(arrNumber);

// (5) 정렬 기준에 선택박스 변경 이벤트 발생 시 정렬 변경하기(오름차순/내림차순)
// (5-1) 대상 : #sel 선택박스
const selBox = mFn.qs("#sel");
// (5-2) 이벤트 연결하기 : change
mFn.addEvt(selBox, "change", (e) => changeSort(e, arrNumber));

// (5-3) 정렬변경함수 만들기
function changeSort(e, arrObj) {
  // e - 이벤트 발생 요소의 전달된 이벤트 함수
  //arrObj - 배열전달변수 -> 원본배열을 담음(주소복사)
  // 원본배열을 보존키위해 깊은복사를 함
  // 배열값이 일반배열값이므로 스프레드 연산자사용
  arrObj = [...arrObj];
  // -> 다시 새로운 배열로 값이 복사됨

  // 1. 선택옵션값 읽어오기
  let optVal = e.currentTarget.value;
  // 추가 : 이벤트발생요소(선택박스)의 아이디 읽어오기
  let selId = e.currentTarget.id;
  // console.log('선택함수',optVal,'\n아이디',selId);
  // 2. 정렬변경 분기하기
  // 2-1.오름차순 : 값 1
  if (optVal == 1) {
    arrObj.sort((a, b) => (a == b ? 0 : a < b ? -1 : 1));
    // 해석
    // 앞값 뒷값 같으면 0, 뒷값이 크면 -1, 앞값이 크면 1
    // 즉 앞값이 크면 자리를 바꿔서 유지하므로 오름차순 정렬

    // (( 공통 정렬 처리하기 ))
    // 문자든 순자든 sort()메서드의 내부적 처리에서 앞뒤 문자가 같으면 0, 뒷문자 크면 -1,
    // 뒷문자가 작으면 1로 리턴값 처리
    // -> 숫자 시그널 : 0 아무것도 안함 / 1 순서바꿔서 유지 / -1 순서 유지

    // -> [내부적 처리란?]
    // 문자일 경우 '가'>'나' 1로 처리 할 경우
    // '나','가'로 순서를 바꿔서 처리함(내림차순)
    // 즉, 문자역도 순서대로 글자 알파벳,가나다라  순등 특정문서기준이 브라우저에 저장되어있음

    // 빼기처리는 문자 등 기차 데이터는 처리불가함
    // sort() 빼기연산처리 : 앞수-뒷수
    // arrNumber.sort((a,b)=>a-b);
  }
  // 2-2.내림차순 : 값 2
  else if (optVal == 2) {
    arrObj.sort((a, b) => (a == b ? 0 : a < b ? 1 : -1));
    // arrNumber.sort((a,b)=>b-a);
  } ////////if문///////////

  // 주의!!!!!!!!!!
  // 원본배열을 정렬후엔 원본배열은 없어진다!
  // 배열을 다른변수에 할당 후 다른변수를 정렬해도 원본배열은 없어진다!

  // 3. 정렬변경된 배열 화면에 출력하기
  if (selId == "sel") showImgNum(arrObj);
  else if (selId == "sel2") showSpanText(arrObj);

  // 전달변수에 할단된 배열확인하기
  // console.log('정렬후 원본배열:',arrObj);
  // 원본 배열확인하기
  // console.log('정렬후 원본배열:',arrNumber);
} /////////////changeSort함수////////////////

////////////////////////////////////////
// 2. 문자로만 된 배열의 화면 뿌리기
// MAP()메서드로 배열값을 태그로 감싸 출력하기
// (1) 출력대상 : .showNum2
const showText = mFn.qs(".showNum2");
// (2) 배열만큼 태그넣고 문자 출력하기
const showSpanText = (arrObj) => {
  //arrObj - 전달된 배열
  showText.innerHTML = arrObj.map((v) => `<span>${v}</span>`).join("");
}; ///////////////showSpanText함수////////////////

// (3) 텍스트 출력함수 호출
showSpanText(arrString);

// (4) 텍스트 정렬선택박스 변경시 정렬함수 호출
// (4-1) 대상 : #sel2
const selBox2 = mFn.qs("#sel2");
// (4-2) 이벤트 연결하기 - change
// 연결된 함수는 위의 숫자정렬한 정렬함수를 사용한다

mFn.addEvt(selBox2, "change", (e) => changeSort(e, arrString));

//////////////////////////////////////////////////////////////////////////////////////////
// 3. 객체데이터 배열의 정렬

// 3-1. 데이터 : 객체데이터 배열
// 데이터구조 : (1) 순번 - idx / (2) 제목 - tit / (3) - cont
const list1 = [
  {
    idx: 8,
    tit: "나는 누구?",
    cont: "공동구매) 슬로건 공구 (계좌와 네이버폼)",
  },
  {
    idx: 4,
    tit: "여기는 어디?",
    cont: "총공 공지] 오늘부터 일 2회, 총공 진행합니다",
  },
  {
    idx: 1,
    tit: "나야나",
    cont: "연합 갈라 서포트 계좌오픈",
  },
  {
    idx: 15,
    tit: "이제 얼마나 남은거니?",
    cont: "음악프로그램에 출연 요청글도 써볼까요?",
  },
]; /////////////// list1 /////////////

//   console.log(list1);

// 3-2. 출력대상 : .showList3
const showList3 = mFn.qs(".showList3");

// 3-3. 배열데이터로 코드 만들기 함수
const updateCode = (arrData, exBox) => {
  // arrData = 배열 데이터
  // exBox = 출력할 박스

  // 태그 출력하기
  exBox.innerHTML = `
    <table>
    <thead>
    <tr>
        <th>번호</th>
        <th>제목</th>
        <th>내용</th>
    </tr>
    </thead>
    <tbody>
        ${arrData
          .map(
            (v) => `
        <tr>
            <td>${v.idx}</td>
            <td>${v.tit}</td>
            <td>${v.cont}</td>
        </tr>
        `
          )
          .join("")}
    </tbody>
    </table>
`;
}; //////////////////updateCode함수////////

// 3-4. 코드 만들어 출력하는 함수 호출하기
updateCode(list1, showList3);

// 3-5. 정렬변경 이벤트 발생시 실제 정렬 변경하기
// - change 이벤트 대상 선택박스들
// (1)정렬종류 대상 : .sel3
const sel3 = mFn.qs(".sel3");
// (2)정렬기준 대상 : .cta3
const cta3 = mFn.qs(".cta3");

// (3) 이벤트 대상 선택 변경시
// -> 실제 정렬을 적용하여 리스트를 갱신한다.
// -> 정렬 적용 시 정렬기준 대상 선택 항목을 가져가야함
mFn.addEvt(sel3, "change", (e) => sortingFn(e, cta3.value, list1, showList3));

// (4) 정렬기준 대상 선택 변경시
// -> 정렬종류 대상 선택 초기화하기 ("정렬 선택"으로 변경)
mFn.addEvt(cta3, "change", () => {
  // 정렬종류 첫번째 값은 value=0이므로 이것을 value에 할당하면 선택박스값이 첫번째로 변경된다
  sel3.value = "0";
}); ///////////////////change 이벤트함수

// 3-6. 정렬함수 만들기
function sortingFn(evt, cta, arrData, exBox) {
  // evt - 이벤트 발생요소의 이벤트객체 전달
  // cta - 정렬기준 값(객체 속성명- 키값)
  // console.log(evt,arrData,exBox);

  // 1. 선택값 읽어오기
  let selVal = evt.target.value;
  console.log(selVal);

  // 검색기준 선택박스 값 읽어오기
  console.log("정렬기준", cta);
  // 2. 정렬분기하기
  // 2-1. 오름차순
  if (selVal == 1) {
    arrData.sort((a, b) => (a[cta] == b[cta] ? 0 : a[cta] > b[cta] ? 1 : -1));
  } /// if /////
  // 2-2. 내림차순
  else if (selVal == 2) {
    arrData.sort((a, b) => (a[cta] == b[cta] ? 0 : a[cta] > b[cta] ? -1 : 1));
  } /// else if /////
  console.log(arrData);

  // 3. 정렬결과 리스트 업데이트하기
  updateCode(arrData, exBox);
} //////////////sortingFn함수///////////////////


//////////////////////////////////////////////
////////////// 배열의 검색 !!! ////////////////
//////////////////////////////////////////////

// 4. 객체데이터 검색후 배열의 정렬 ////////////

// 4-1. 출력대상선정: showList4
const showList4 = mFn.qs('.showList4');
// console.log(showList4);

// 4-2. 데이터셋팅 : 객체 데이터 배열
const list2 = [
  {
      idx: 58,
      tit: "당근마켓에 가자",
      cont: "당근마켓이 항상 좋은건 아니야~!!ㅠ.ㅠ",
  },
  {
      idx: 15,
      tit: "당근마켓에 가자",
      cont: "당근마켓이 정말로 싸고 좋다구~!",
  },
  {
      idx: 74,
      tit: "점심에 뭐먹지? 당근이지!",
      cont: "오스틴님 생일 서포트 안내",
  },
  {
      idx: 18,
      tit: "직돌이는 쉬고싶다~!",
      cont: "활동정지에 대한 파생글 무통보 삭제 및 경고",
  },
  {
      idx: 104,
      tit: "올해는 다른 회사로 이직한다!",
      cont: "⚜️갈라콘 서포트에 많은 참여 부탁드립니다!",
  },
]; /////////////// list2 /////////////   

// 4-3. 코드 만들어 출력하는 함수 호출하기
updateCode(list2, showList4);

// 4-5. 검색 이벤트 설정하기
// 대상선정:
// (1) 검색기준 선택박스
const searchCta4=mFn.qs('.search-cta4');
// (2) 검색버튼
const btnSearch=mFn.qs('.sbtn');
// (3) 검색어 입력창
const keyWord=mFn.qs('#stxt');

// 4-5-2. 이벤트 설정하기
mFn.addEvt(btnSearch,"click",searchingfn);

// 4-6. 검색 함수 만들기
function searchingfn(){
  // 1. 검색기준값 읽어오기
  let cta=searchCta4.value;
  // 2. 검색어 읽어오기
  let kword=keyWord.value;

  // 3. 검색어가 없으면 돌아가기
  if(kword==""){
    alert("검색어를 입력해주세요");
    keyWord.focus();
    return;
  }
  // console.log(cta,kword);

  // 4. 검색기준으로 검색어를 사용하여 검색하기
  // 검색대상 데이터 배열: list2
  // 사용 배열 메서드 :filter()
  let result = list2.filter(v=>{
    // v=배열값
    // console.log(v["tit"].indexOf(kword));


    // 만약 찾는 문자가 전체문자열에 있으면 -1이 아님
    if(v[cta].indexOf(kword)!=-1) return true;
    // 이 조건에 리턴값을 true로 하면 해당 데이터를 배열로 만들어서 순서대로 변수에 할당한다.
    // 여기서는 result가 결과 배열 변수가 된다.


  });
  // 전체문제열.indexOf(문자열) -> 해당 문자열이 전체문제열에서 몇번째에 있는지 그 순번을 리턴해줌 
  // 만약 없으면 -1값을 리턴한다.

  console.log(result);

  // 5. 결과를 화면에 보여주기 : updateCode함수 호출
  updateCode(result,showList4);

}/////////////searchinFn 함수/////////////////