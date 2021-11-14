const quotes = [{
    quote : "날개가 없으니 사람은 나는법을 찾는것이다.",
    author: "하이큐",
},
{
    quote : "재능은 꽃 피우는 것, 센스는 갈고닦는 것.",
    author: "하이큐",
},
{
    quote : "인간이 5명이나 모이면 반드시 1명은 쓰레기가 있다.",
    author: "나루토",
},
{
    quote : "자신을 믿지 않는 자는 노력할 가치도 없다.",
    author: "나루토",
},
{
    quote : "자신의 나약함과 무능함이 온몸을 짓눌러도 이를 악물고 앞으로 나아가라.",
    author: "귀멸의 칼날",
},
{
    quote : "약해지는 것, 늙어가는 것도 인간의 덧없는 아름다움이다.",
    author: "귀멸의 칼날",
},
{
    quote : "사람이 언제 죽는다고 생각하나? ...사람들에게 잊혀졌을 때다.",
    author: "원피스",
},
{
    quote : "천년은 살고싶지 않아. 나는 오늘만 산다.",
    author: "원피스",
},
{
    quote : "사람은 무언가의 희생 없이 아무것도 얻을 수 없다.",
    author: "강철의 연금술사",
},
{
    quote : "죽을 때까지 죽여주마.",
    author: "강철의 연금술사",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;