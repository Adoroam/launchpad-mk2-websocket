/*============================
===========INCLUDES===========
============================*/

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const io_socket = require('socket.io')
const app = express()
const server = http.Server(app)
const io = io_socket(server)
const Launchpad = require('launchpad-mk2')
let lp = new Launchpad({ in: 0, out: 1 })

/*============================
===========CONSTANTS==========
============================*/

const black = '#000000'
let limit = 63
const rings = [
  [
    {x: 4, y: 4},
    {x: 4, y: 5},
    {x: 5, y: 4},
    {x: 5, y: 5},
  ],
  [
    {x: 3, y:3},
    {x: 3, y:4},
    {x: 3, y:5},
    {x: 3, y:6},
    {x: 4, y:3},
    {x: 4, y:6},
    {x: 5, y:3},
    {x: 5, y:6},
    {x: 6, y:3},
    {x: 6, y:4},
    {x: 6, y:5},
    {x: 6, y:6}
  ],
  [
    {x: 2, y: 2},
    {x: 2, y: 3},
    {x: 2, y: 4},
    {x: 2, y: 5},
    {x: 2, y: 6},
    {x: 2, y: 7},
    {x: 3, y: 2},
    {x: 3, y: 7},
    {x: 4, y: 2},
    {x: 4, y: 7},
    {x: 5, y: 2},
    {x: 5, y: 7},
    {x: 6, y: 2},
    {x: 6, y: 7},
    {x: 7, y: 2},
    {x: 7, y: 3},
    {x: 7, y: 4},
    {x: 7, y: 5},
    {x: 7, y: 6},
    {x: 7, y: 7}
  ],
  [
    {x: 1, y: 1},
    {x: 1, y: 2},
    {x: 1, y: 3},
    {x: 1, y: 4},
    {x: 1, y: 5},
    {x: 1, y: 6},
    {x: 1, y: 7},
    {x: 1, y: 8},
    {x: 2, y: 1},
    {x: 2, y: 8},
    {x: 3, y: 1},
    {x: 3, y: 8},
    {x: 4, y: 1},
    {x: 4, y: 8},
    {x: 5, y: 1},
    {x: 5, y: 8},
    {x: 6, y: 1},
    {x: 6, y: 8},
    {x: 7, y: 1},
    {x: 7, y: 8},
    {x: 8, y: 1},
    {x: 8, y: 2},
    {x: 8, y: 3},
    {x: 8, y: 4},
    {x: 8, y: 5},
    {x: 8, y: 6},
    {x: 8, y: 7},
    {x: 8, y: 8}
  ]
]

const hex_regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
const address_regex = /^\:\:ffff\:([\d\.]*)/i

/*===========================
===========EXPRESS===========
===========================*/

app.use(express.static(__dirname))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => { res.sendFile('') })

const port = 80
server.listen(port, () => { console.log(`app listening on port ${port}`) })

/*============================
===========FUNCTIONS==========
============================*/

const all_black_check = () => lp.buttons.every(button => button.color === black)

// COMPARE TWO ARRAYS
const arrCompare = (arr1, arr2) => arr1.every((item, ind) => item === arr2[ind])

// CHECK HEX STRING FOR VALID COLOR
const is_valid_hex = (hex_string) => hex_regex.test(hex_string)

// RESCALE RGB VALUES FOR LAUNCHPAD
const scale_to_lp = (num) => (num * 63) / 255

// HEX STRING TO ARRAY OF RGB VALUES
const hex_to_rgb_array = (hex_string) => {
  let result = hex_regex.exec(hex_string)
  return [ result[1], result[2], result[3] ]
}

// HEX STRING TO SCALED INTEGER VALUES FOR LAUNCHPAD
const hex_to_lp = (hex_string) => {
  if (is_valid_hex(hex_string)) {
    let rgb_array = hex_to_rgb_array(hex_string)
      .map(val => parseInt(val, 16))
      .map(val => scale_to_lp(val))
    return {
      r: rgb_array[0],
      g: rgb_array[1],
      b: rgb_array[2],
    }
  } else { return { r: 0, g: 0, b: 0 } }
}

// RESET ALL COLORS TO BLACK
const reset_lights = () => { lp.buttons.forEach(btn => btn.color = black) }

// CHANGE COLORS FOR COLOR GROUP
const setGroup = (group, input) => {
  let { inc, dec, num, rgb } = input
  if (!!rgb) {
    let { r, g, b } = hex_to_lp(rgb)
    group.buttons.forEach(btn => {
      btn.setRgbColor(r, g, b)
    })
    group.color = input
  }
  if (!!num) {
    group.buttons.forEach(btn => {
      btn.setColor(parseInt(num))
    })
  }
  if (!!inc || !!dec) {
    inc
      ? (group.count < limit)
        ? group.count++
        : group.count = limit
      : (group.count > 0)
        ? group.count--
        : group.count = 0
    group.buttons.forEach(btn => {
      btn.setColor(parseInt(group.count))
    })
  }
}

const set_all = (buttons = map_buttons()) => {
  buttons.forEach((btn, ind) => {
    let { x, y, color } = btn
    let { r, g, b } = hex_to_lp(color)
    let found_button = lp.buttons.find(button => button.x === x && button.y === y)
    found_button.color = color
    found_button.setRgbColor(r, g, b)
  })
}
const map_buttons = () => lp.buttons
  .map(btn => ({
    x: btn.x,
    y: btn.y,
    note: btn.note,
    color: (btn.color === 0) ? black : btn.color
  }))
  .filter(btn => (btn.x > 0 && btn.y > 0))
  .filter(btn => (btn.x <= 8 && btn.y <= 8))

const button_compare = (input) => {
  let current = map_buttons()
  return input.every((item, ind) => item.color === current[ind].color)
}

/*============================
===========WEBSOCKET==========
============================*/

// PARENT CONNECTION
io.on('connection', socket => {

  // SET READABLE ADDRESS
  let address = address_regex.test(socket.handshake.address)
    ? socket.handshake.address
      .replace(address_regex, '$1')
    : socket.handshake.address

  // LOG ADDRESS IF NOT LOCAL
  if (address !== '::ffff:192.168.2.1') { 
    console.log(`user connected from ${address}`) 
  }

  // EMIT STARTUP ON CONNECT
  io.emit('startup', map_buttons())

  // WEBSOCKET UPDATE ALL COLORS
  socket.on('update', payload => {
    // check to see if current state matches payload
    if (!button_compare(payload)) {
      set_all(payload)
      io.emit('update', map_buttons())
    } 
  })

  // HANDLE RESETS
  socket.on('reset', () => {
    if (!all_black_check()) io.emit('reset')
    lp.darkAll()
    reset_lights()
  })
  
})

/*============================
===========LAUNCHPAD==========
============================*/

// LAUNCHPAD KEYPRESS
lp.on('press', info => {
  // console.log(info)
  if (!!info.button) {
    let coords = [
      info.button.x,
      info.button.y
    ]
    console.log(coords)
    if (arrCompare(coords, [8, 8])) lp.darkAll()
    if (arrCompare(coords, [7, 8])) lp.getButton(8, 7).setRgbColor(63, 53, 40)
  }
})
