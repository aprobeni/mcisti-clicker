const clickerHtml = document.getElementById("_clicker")
const scoreHtml = document.getElementById("_score")
const multiplierHtml = document.getElementById("_multiplier")//todo
const autoHtml = document.getElementById("_auto")//todo

var score = 0
var multiplier = 1
var auto = 1

var level = 0
var required = 10

//todo levelup

clickerHtml.addEventListener("click", () => {
    score += multiplier
    updateStatsHtml()
})

function updateStatsHtml() {
    scoreHtml.innerText = (Number.isInteger(score) ? score : score.toFixed(1))
}

setInterval(function() {
    if (auto>0) {
        score += auto
        updateStatsHtml()
    }
}, 1000)

updateStatsHtml()