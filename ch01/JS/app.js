/*  app.js */

let number = 10;
console.log(number);

let pTag = document.getElementById("info");
console.log(pTag);
showLocation();

function showLocation() {

    // BOM 최상의 객체 - Window
    let locationInfo = window.location.href;

   window.document.getElementById("info").textContent=`현재 URL : ${locationInfo}`;

}

function showNavigator() {
    let navigatorInfo = window.navigator.userAgent;
    window.document.getElementById("info").textContent=`현재 브라우저 정보: ${navigatorInfo}`;

}

function openwindow() {
    window.open("http://www.naver.com ", "_blank", "width=300, height=300");
}

