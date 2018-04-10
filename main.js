/*============================
===========CONSTANTS==========
============================*/

// INSTANTIATE SOCKET.IO
const socket = io()

// DEFINE BLACK FOR USE LATER
const black = '#000000'

// X/Y ID REGEX
const id_coord = /^x(\d)y(\d)$/i

// ARRAY OF ALL ELEMENTS MAPPED TO XY
let element_array

// DEFINE LAUNCHPAD ELEMENTS IN DOCUMENT
let buttons
const rings = [
  [
    { x: 4, y: 4 },
    { x: 4, y: 5 },
    { x: 5, y: 4 },
    { x: 5, y: 5 },
  ],
  [
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 3, y: 5 },
    { x: 3, y: 6 },
    { x: 4, y: 3 },
    { x: 4, y: 6 },
    { x: 5, y: 3 },
    { x: 5, y: 6 },
    { x: 6, y: 3 },
    { x: 6, y: 4 },
    { x: 6, y: 5 },
    { x: 6, y: 6 }
  ],
  [
    { x: 2, y: 2 },
    { x: 2, y: 3 },
    { x: 2, y: 4 },
    { x: 2, y: 5 },
    { x: 2, y: 6 },
    { x: 2, y: 7 },
    { x: 3, y: 2 },
    { x: 3, y: 7 },
    { x: 4, y: 2 },
    { x: 4, y: 7 },
    { x: 5, y: 2 },
    { x: 5, y: 7 },
    { x: 6, y: 2 },
    { x: 6, y: 7 },
    { x: 7, y: 2 },
    { x: 7, y: 3 },
    { x: 7, y: 4 },
    { x: 7, y: 5 },
    { x: 7, y: 6 },
    { x: 7, y: 7 }
  ],
  [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 1, y: 5 },
    { x: 1, y: 6 },
    { x: 1, y: 7 },
    { x: 1, y: 8 },
    { x: 2, y: 1 },
    { x: 2, y: 8 },
    { x: 3, y: 1 },
    { x: 3, y: 8 },
    { x: 4, y: 1 },
    { x: 4, y: 8 },
    { x: 5, y: 1 },
    { x: 5, y: 8 },
    { x: 6, y: 1 },
    { x: 6, y: 8 },
    { x: 7, y: 1 },
    { x: 7, y: 8 },
    { x: 8, y: 1 },
    { x: 8, y: 2 },
    { x: 8, y: 3 },
    { x: 8, y: 4 },
    { x: 8, y: 5 },
    { x: 8, y: 6 },
    { x: 8, y: 7 },
    { x: 8, y: 8 }
  ]
]


/*============================
===========FUNCTIONS==========
============================*/

// RESET LIGHTS
const reset_lights = () => {
  if (!buttons.every(btn => btn.color === black)) {
    socket.emit('reset')
  }
  buttons.forEach(btn => btn.color = black)
  // ring_inputs.forEach(input => input.value = black)
  update_dom()
}

// FUNCTION FOR ARRAY OF ALL ELEMENTS
const create_element_array = () => buttons.map(btn => {
  let { x, y } = btn
  return document.getElementById(`x${x}y${y}`)
})


const update_dom = () => {
  buttons.forEach((btn, ind) => {
    let { color } = btn
    let ele = element_array[ind]
    ele.value = color
    ele.parentElement.style.backgroundColor = color
  })
}

// get x y id
const get_id_xy = (ele) => {
  let matches = ele.id.match(id_coord)
  return parseInt(matches[2] + matches[1])
}

// SET ON CHANGE FOR MAIN LAUNCHPAD
const element_onchange = () => {
  // SET ONCHANGE FOR INDIVIDUAL INPUTS
  element_array.forEach(ele => {
    ele.onchange = () => {
      ele.parentElement.style.backgroundColor = ele.value
      let button = buttons.find(btn => btn.note === get_id_xy(ele) )
      button.color = ele.value
      socket.emit('update', buttons)
    }
  })
}

/*============================
===========WEBSOCKET==========
============================*/

// WEBSOCKET STARTUP
socket.on('startup', (payload) => {
  buttons = payload
  element_array = create_element_array()
  update_dom()
  element_onchange()
  
})

socket.on('update', (payload) => {
  buttons = payload
  update_dom()
})

// WEBSOCKET RESET
socket.on('reset', () => {
  reset_lights()
})

