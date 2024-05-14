// 공유신발 데이터 불러오기
import guData from "./data.js";

console.log(guData);

// 국가 옵션배열
const country=["캄보니아","베트남","중국","러시아","일본"];
const countryNum=country.length;

// 랜덤 수 생성함수
const rdmNum=(n)=>Math.floor(Math.random()*n);

// 1~n까지의 랜덤수
// Math.ceil(Math.random()*n)
// 0~n-1까지의 랜덤수
// Math.floor(Math.random()*n)

// 1. 기존 데이터에 새로운 속성 추가
guData.forEach((v)=>{
    // myData.push(v);
    v["소재"]="천연가죽(소), 면100%";
    v["색상"]="BLACK/TRUE WHITE";
    v["치수"]="상단표기";
    v["제조자/수입자"]="(유)브이에프코리아";
    v["제조국"]=country[rdmNum(countryNum)];
    v["제조연월"]="상품라벨에서 확인";
    v["A/S 책임자와 전화번호"]="(유)브이에프코리아 / 온라인 스토어 고객센터 1522-1882";
    v["Model"]="VN000CYU"+(rdmNum(999)+1000);
    // console.log(rdmNum(countryNum));
})

// console창에서 우클릭> copy object 클릭하면 데이터 나옴














