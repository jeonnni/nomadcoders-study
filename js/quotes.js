// 명언

const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로"
    },
    {
        quote: "성공은 준비와 기회의 만남이다.",
        author: "세네카"
    },
    {
        quote: "작은 습관이 큰 변화를 만든다.",
        author: "제임스 클리어"
    },
    {
        quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author: "벤자민 프랭클린"
    },
    {
        quote: "노력하는 사람에게 불가능이란 없다.",
        author: "알렉산더 대왕"
    },
    {
        quote: "행복은 방향이지 장소가 아니다.",
        author: "시드니 J. 해리스"
    },
    {
        quote: "우리가 반복적으로 하는 것이 곧 우리 자신이다.",
        author: "아리스토텔레스"
    },
    {
        quote: "포기하지 마라. 위대한 일은 시간이 걸린다.",
        author: "익명"
    },
    {
        quote: "생각하는 대로 살지 않으면 사는 대로 생각하게 된다.",
        author: "폴 발레리"
    },
    {
        quote: "할 수 있다고 믿으면 이미 반은 이룬 것이다.",
        author: "시어도어 루스벨트"
    }
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
// console.log(quote.textContent = quotes[0].quote);
// console.log(author.textContent = quotes[0].author);
// console.log(Math.floor((Math.random()*10)+1));

const random = Math.floor((Math.random()*quotes.length));
quote.textContent = quotes[random].quote
author.textContent = quotes[random].author