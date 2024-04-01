// CGV PJ 메인 페이지 JS - main.js

/******************************************************* 
  [ 요구사항 분석 ]
  1. 영화 포스터 메뉴 클릭 시 해당 예고편을 메인 아이프레임에 상영되도록 변경해준다
  2. 이때 자동재생 옵션을 추가하여 src변경 시 바로 동영상이 재생되게 함.
  3. 영상이 끝나면 다시 처음부터 재생되게 옵션을 추가해 준다.
 *******************************************************/

// 1. 대상선정
// 1-1 이벤트 대상 : .poster-menu a
const pMenu =document.querySelectorAll('.poster-menu a');
// 1-2. 변경 대상 : #ifr
const ifr = document.querySelector('#ifr');

console.log('대상 ',pMenu,ifr);

// 2. 영화아이디 정보 객체로 구성하기
const movieId = {
    "스파이더맨":"aa0WjdSYdCk",
    "서울의 봄":"-AZ7cnwn2YI",
    "짱구는 못말려":"IQZwykwNQYo",
    "웡카":"Bldf9SWRPFM",
    "스미코구라시":"quyIxaEvuVg",
    "추락의 해부":"VMBCqyg2qZ8",
} 

// 3. 이벤트 설정 및 기능구현
// 포스터버튼에 forEach()메서드로 순회한다.
pMenu.forEach((ele)=>{
    // ele - 각각의 a요소 / idx - 각 요소의 순번
    ele.onclick=()=>{
        // 1. 클릭된 A요소를 구분하기 위해 하위 img 포스터의 alt속성 읽어오기
        // 속성 읽기 내장함수 : getAttribute();
        let txt = ele.querySelector('img').getAttribute('alt');
        console.log('나 클릭!', txt);

        // 2. 아이프레임 src변경하기
        // 속성변경 JS내장함수 : setAttribute(속성명, 값)
        // 대상 : ifr
        // 영화아이디값 - > movieId객체
        // 객체호출법 : movieId[영화이름속성명]
        // 영화이름속성명은 txt변수에 할당되어있음 -> movieId[txt]
        ifr.setAttribute('src',`https://www.youtube.com/embed/${movieId[txt]}?autoplay=1`);

        // 3. 클릭된 a의 부모인 li에 클래스 on넣기
        // for Each문 사용해보기
        forEach((x,i)=>{
            // x - a요소 / i - 순번
            // x.parentElement는 a요소 부모인 li요소
            if(i==idx){
                // 해당 순번은 on넣기
                x. parentElement.classList.add('on');
            }else{
                // 나머지는 on빼기
                x. parentElement.classList.remove('on');
            }


        });///forEach문///

    };//click이벤트
});///forEach///

