let links = document.querySelectorAll('.links')
let imgСounter = document.querySelectorAll('img')

for (let i = 0; i < links.length; i++) {
    console.log(links.length);
}
console.log(links[0].innerHTML);

let imgWidth = []
let imgHeight = []
for (let i = 0; i < imgСounter.length; i++) {
    imgWidth.push(imgСounter[i].width)
    imgHeight.push(imgСounter[i].height)
}
console.log('Количество картинок:', imgСounter.length); 

console.log('Ширина первой картинки:',imgWidth[0]);
let max = Math.max(...imgWidth)

console.log( 'Ширина самой широкой картинки:', max);

let resW = 0
let resH = 0
for (let i = 0; i < imgWidth.length; i++) {
    resW += imgWidth[i];
   
}

for (let j = 0; j < imgHeight.length; j++) {
    resH += imgHeight[j];
    
}
let resWH = resH * 2 + resW * 2

console.log('сумма всех высот',resWH);
