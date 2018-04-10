// DEFINE BLACK
const black = '#000000'

// CHECK BUTTON COLORS
export const all_black_check = (lp) => lp.buttons.every(button => button.color === black)

// COMPARE TWO ARRAYS
export const arrCompare = (arr1, arr2) => arr1.every((item, ind) => item === arr2[ind])

// RESET ALL COLORS TO BLACK
export const reset_lights = (lp) => { lp.buttons.forEach(btn => btn.color = black) }

// FIND BUTTON BY COORD
export const button_by_coord = (x, y, lp) => lp.buttons
  .find(button => button.x === x && button.y === y)
