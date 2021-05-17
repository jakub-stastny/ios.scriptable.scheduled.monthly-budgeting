/* Our month runs from the 5th to the 5th, which is when I receive the rents. */
function weeksInMoth() {
  const today = new Date()
  const beginningOfNextCycle = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate() - 1)

  const days = new Array()
  const date = new Date(today)

  while (date < beginningOfNextCycle) {
    date.setDate(date.getDate() + 1)
    days.push(new Date(date))
  }

  // Week starts on Thursday.
  const numberOfWeeks = days.filter(day => day.getDay() == 4).length

  return numberOfWeeks
}

function recalculate() {
  document.getElementById('results').style.backgroundColor = 'green'
  const savingsElement = document.getElementById('savings')
  savingsElement.html = "1000"

  const numberOfWeeksElement = document.getElementById('number-of-weeks')
  numberOfWeeksElement.html = weeksInMonth()
}

document.addEventListener('DOMContentLoaded', () => {
  recalculate()
}
