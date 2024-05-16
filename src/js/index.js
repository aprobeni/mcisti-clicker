const clickerHtml = document.getElementById("_clicker")
const scoreHtml = document.getElementById("_score")
const multiplierHtml = document.getElementById("_multiplier")//todo
const autoHtml = document.getElementById("_auto")//todo

var score = 0
var multiplier = 1
var auto = 0 // todo

clickerHtml.addEventListener("click", () => {
    score += multiplier
    updateStatsHtml()
})

function updateStatsHtml() {
    scoreHtml.innerText = score
} 

updateStatsHtml()