/*============================
===========INCLUDES===========
============================*/

import http from 'http'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import io_socket from 'socket.io'
import Launchpad from 'launchpad-mk2'

const app = express()
const server = http.Server(app)
const io = io_socket(server)

let lp = new Launchpad({ in: 0, out: 1 })
lp.regions = []

/*============================
===========CONSTANTS==========
============================*/

const black = '#000000'
let limit = 63

const address_regex = /^\:\:ffff\:([\d\.]*)/i

/*===========================
===========EXPRESS===========
===========================*/
const dist = path.join(__dirname, '/dist')
app.use(express.static(dist))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => { res.sendFile('') })

const port = 80
server.listen(port, () => { console.log(`app listening on port ${port}`) })

/*============================
===========FUNCTIONS==========
============================*/

// SHARED FUNCTIONS
import { 
  all_black_check,
  arrCompare,
  reset_lights,
  button_by_coord
} from './src/fn'

// HEX => RGB FUNCTIONS
import { 
  is_valid_hex,
  scale_to_lp,
  hex_to_rgb_array,
  hex_to_lp 
} from './src/rgb'

// SET BUTTONS
const set_all = (input) => {
  let { buttons } = input
    ? input
    : map_lp()
  buttons.forEach((btn, ind) => {
    let { x, y, color } = btn
    let { r, g, b } = hex_to_lp(color)
    let button = button_by_coord(x, y, lp)
    button.color = color
    button.setRgbColor(r, g, b)
  })
}

// CREATE PAYLOAD OBJECT FROM LP
const map_lp = () => {
  let buttons = lp.buttons
    .map(btn => ({
      x: btn.x,
      y: btn.y,
      note: btn.note,
      color: (btn.color === 0) ? black : btn.color
    }))
    .filter(btn => (btn.x > 0 && btn.y > 0))
    .filter(btn => (btn.x <= 8 && btn.y <= 8))
  return { regions: lp.regions, buttons: buttons }
}

const payload_compare = (input) => {
  let { buttons } = map_lp()
  return input.buttons.every((btn, ind) => btn.color === buttons[ind].color)
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
  if (address !== '192.168.2.1') { 
    console.log(`user connected from ${address}`) 
  }

  // EMIT STARTUP ON CONNECT
  io.emit('startup', map_lp())

  // WEBSOCKET UPDATE ALL COLORS
  socket.on('update', payload => {
    if (!payload_compare(payload)) {
      set_all(payload)
      io.emit('update', map_lp())
    } 
  })

  // HANDLE RESETS
  socket.on('reset', () => {
    if (!all_black_check(lp)) io.emit('reset')
    lp.darkAll()
    reset_lights(lp)
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
