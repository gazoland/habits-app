const form = document.querySelector('#form-habits-board') // id = form-habits-board
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')
button.addEventListener("click", addDay)
form.addEventListener("change", saveData)

function addDay () {

    let todayDay = new Date().getDate()
    let todayMonth = new Date().getMonth() + 1

    if (todayDay < 10) {
      todayDay = '0' + String(todayDay)
    }

    if (todayMonth < 10) {
      todayMonth = '0' + String(todayMonth)
    }

    const todayDate = todayDay + "/" + todayMonth

    const dayExists = nlwSetup.dayExists(todayDate)

    if (dayExists){
        alert("Today's date already exists.")
        return
    } 
    nlwSetup.addDay(todayDate)
    alert("Adding today's date.")
}

function saveData() {
  localStorage.setItem("nlwSetupHabitsData", JSON.stringify(nlwSetup.data))
}

nlwSetup.setData(JSON.parse(localStorage.getItem("nlwSetupHabitsData")) || {})

nlwSetup.load()
