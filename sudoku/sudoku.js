const configurations = [
  ".................................................................................",
  "123456789234567891345678912456789123567891234678912345789123456891234567912345678",
]

function pullConfiguration(index) {
  return configurations[index].split("").map(a => a === "." ? "" : a)
}

function registerInput(e, index) {
  // Do validation before state change
  e.currentTarget.value = e.data
  state[index] = e.data
}

function renderGrid() {
  const items = []
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      items.push(
        `<input
          class="sudokuSqaure"
          value="${state[i + 9 * j]}"
          onBeforeInput="registerInput(event,${state[i + 9 * j]})"
          maxLength="1" 
          autoComplete="off" 
          inputMode="numeric"
        />`
      )
    }
    items.push(`<br/>`)
  }
  grid.innerHTML = items.join("")
}

var state;
var grid;

window.onload = () => {
  grid = document.getElementById("sudokuGrid");
  state = pullConfiguration(1)
  renderGrid()
}