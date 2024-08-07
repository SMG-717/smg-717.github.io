const [gsize, bsize] = [8, 8]
const pieces = {
  k: "♔", q: "♕", r: "♖", b: "♗", n: "♘", p: "♙",
  K: "♚", Q: "♛", R: "♜", B: "♝", N: "♞", P: "♟︎",
}

function renderGrid() {
  const items = []
  for (let i = 0; i < gsize; i += 1) {
    for (let j = 0; j < gsize; j += 1) {
      const index = gsize * i + j
      const top = i % bsize == 0 ? " top" : ""
      const left = j % bsize == 0 ? " left" : ""
      const right = j == gsize - 1 ? " right" : ""
      const bottom = i == gsize - 1 ? " bottom" : ""
      const black = (i + j) % 2 === 0 ? " black" : ""

      items.push(
        `<input
          readonly
          class="square${top}${left}${right}${bottom}${black}"
          onclick="registerInput(${index})"
          maxLength="1" 
          autoComplete="off"
        />`
      )
    }
    items.push(`<br/>`)
  }
  grid.innerHTML = items.join("")
  gridElements = grid.getElementsByClassName("square")
}

window.onload = () => {
  grid = document.getElementById("qhess");
  statusMessage = document.getElementById("status");
  renderGrid()
  gridElements[0].value = pieces.r
  gridElements[1].value = pieces.n
  gridElements[2].value = pieces.b
  gridElements[3].value = pieces.k
  gridElements[4].value = pieces.q
  gridElements[5].value = pieces.b
  gridElements[6].value = pieces.n
  gridElements[7].value = pieces.r
  gridElements[8].value = pieces.p
  gridElements[9].value = pieces.p
  gridElements[10].value = pieces.p
  gridElements[11].value = pieces.p
  gridElements[12].value = pieces.p
  gridElements[13].value = pieces.p
  gridElements[14].value = pieces.p
  gridElements[15].value = pieces.p
  gridElements[48].value = pieces.P
  gridElements[49].value = pieces.P
  gridElements[50].value = pieces.P
  gridElements[51].value = pieces.P
  gridElements[52].value = pieces.P
  gridElements[53].value = pieces.P
  gridElements[54].value = pieces.P
  gridElements[55].value = pieces.P
  gridElements[56].value = pieces.R
  gridElements[57].value = pieces.N
  gridElements[58].value = pieces.B
  gridElements[59].value = pieces.Q
  gridElements[60].value = pieces.K
  gridElements[61].value = pieces.B
  gridElements[62].value = pieces.N
  gridElements[63].value = pieces.R
}