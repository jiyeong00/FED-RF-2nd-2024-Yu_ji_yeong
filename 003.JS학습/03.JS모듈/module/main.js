// 모듈연습 메인JS - main.js

// 공통함수 불러오기
import myFn from "./my_function.js";

// {1. 텍스트 데이터 불러오기 방법1 - 보내준 이름 그대로 쓰기 }
// import { mTitle,sTitle,personInfo,mvData } from './text-data.js';

// [2. 텍스트 데이터 불러오기 방법2 - 별칭 사용하기 ]
// ->> 별칭을 지었으면 반드시 별칭으로 사용해야한
// import {
//   mTitle as mTit,
//   sTitle as sTit,
//   personInfo as pInfo,
//   mvData as mDt,
// } from "./text-data.js";

// [3. 한꺼번에 불러오기 - *사용 ]
// ->> import * as 별칭 from '경로';
// ->> 별칭이름으로 한꺼번에 불러온 값을 객체에 담음
// ->> 모듈용 전용객체에 저장하여 객체.변수명으로 사용한다.
//      예) console.log(txtData,txtData.mTitle);
import * as txtData from "./text-data.js";

// 불러온 객체확인
console.log(txtData,txtData.mTitle);


// [ 4. export default로 내보낸 단일 함수 불러오기 ]
// 가져올때는 다른 이름이여도 됨
// import makeMessage from "./msg_format.js";
import 헐 from "./msg_format.js";

console.log(헐);

/*************************************************** 
    
    [ import 형식 ]
    import 전달변수 from 파일경로;
      (1) import문법을 쓰려면 호출하는 html script요소에 type="module" 속성을 반드시 세팅해야한다.
      (2) 반드시 가져올 모듈JS에서 export를 해줘야함!
      (3) from 뒤에 경로는 반드시 상대경로일 경우 같은 위치일 지라도 ./ 표시를 꼭해야함!(없으면 안나옴!)(/,./,../ 표시필수)
      (4) 모듈구성은 반드시 서버형식으로 열어야 작동한다!
        > (http://...) Live Server로 열기때문에 볼 수 있음!
    -> 로컬파일로 열면 작동안됨!

    [ import의 사용방법 ]
    1. export default인 경우
        - import 변수 from '경로';
        -> 변수는 변경가능
    2. export {}인 경우 <<<중괄호로 내보내는 경우
        - import {보내준 변수명,....} from '경로'

    [ import 시 변수명 변경하기 : 별칭사용하기 ]
    import {전달변수 as 별칭} from 파일경로;
    예) import {mymymy as m} from 파일경로;
    -> 별칭 사용이유:  단순변경요구, 같은이름 변수 피하기

____________________________________________________

    [ 모듈화를 위한 구성 ]
    1. 데이터 처리하기 위한 JS
    -> text-data.js
    2. 구체적인 데이터 구성처리를 위한 JS
    -> msg_format.js
***************************************************/

// DOM선택함수 객체 불러오기
