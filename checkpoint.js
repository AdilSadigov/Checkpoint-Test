let input = document.getElementById("input")
let title = document.getElementById("title")
let btn = document.getElementById("btn")
let arr = []

btn.addEventListener("click", () => {
    arr.push(input.value)
    // console.log(arr)
    let json = JSON.stringify(arr)
    localStorage.setItem("books", json)
    title.innerText = input.value
    input.value = ""
    let parse = localStorage.getItem("books", JSON.parse(json))
    console.log(parse)
})