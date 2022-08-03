let links = document.querySelectorAll('.links')
console.log(links);
let content = document.querySelector('.flex')
let flexLeft = document.querySelector('.flex-left')
let flexCenter = document.querySelector('.flex-center')
let flexRight = document.querySelector('.flex-right')
let btn = document.querySelector('button').addEventListener('click', function () {
    content.style.display = 'flex'


    let textArr = []
    let linksLenght = 0
    let linksHref = []


    for (let i = 0; i < links.length; i++) {
        textArr.push(links[i].innerText)
        linksHref.push(links[i].href)
        linksLenght = links.length

    }
    for (key of textArr) {
        let row = document.createElement('ul')
        row.innerHTML = `<li>${key}</li> `
        flexLeft.appendChild(row)
    }

    for (key of linksHref) {
        let row = document.createElement('ul')
        row.innerHTML = `<li>${key}</li> `
        flexCenter.appendChild(row)
    }

    flexRight.innerHTML = linksLenght
})









console.log(textArr, linksHref, linksLenght);