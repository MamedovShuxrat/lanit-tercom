let url = document.location.href
let urlHost = document.location.hostname
let urlProtocol = document.location.protocol
let urlPath = document.location.pathname

let btn = document.getElementById('btn') 
btn.onclick = function () {
    alert(` Полный url: ${url}\n Протокол: ${urlProtocol}\n Хост: ${urlHost}\n Путь url: ${urlPath}`)

}




let urlObj = {

}