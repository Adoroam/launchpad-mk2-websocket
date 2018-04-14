import { 
  all_black_check,
  reset_lights,
  button_by_coord
 } from "./fn";

import {
  is_valid_hex,
  rgb_to_hex,
  is_valid_rgb
} from './rgb'

/*============================
===========CONSTANTS==========
============================*/

// START SOCKET
export const socket = io()

// DEFINE BLACK FOR USE LATER
const black = '#000000'

// X/Y ID REGEX
const id_coord = /^x(\d)y(\d)$/i

// CREATE BLANK ARRAY FOR BRUSHES
let blank_brushes = [
  black,
  black,
  black,
  black,
  black
]

// COLOR INPUT
const color_input = document.getElementById('color')

// EYEDROPPER
const eyedrop_ele = document.getElementById('eyedrop')

// BODY ELEMENT
const body_ele = document.getElementById('body')

// ARRAY OF BRUSH ELEMENTS
const brush_eles = blank_brushes.map((item, ind) => document.getElementById(`b_${ind}`))

// SET ACTIVE BRUSH TO FIRST SLOT
let active_brush = 0

// ARRAY OF ALL ELEMENTS MAPPED TO XY
let element_array

// DEFINE LAUNCHPAD ELEMENTS IN DOCUMENT
const lp = {
  regions: [],
  buttons: []
}

// EYEDROP STATUS
let eyedrop_status = false

/*============================
===========FUNCTIONS==========
============================*/

// SET ACTIVE BRUSH
const set_active = (ind) => {
  brush_eles[active_brush].classList.remove('selected')
  active_brush = ind
  brush_eles[active_brush].classList.add('selected')
}

// HANDLE KEYPRESS (BODY)
export const handle_keypress = (ev) => {
  let { code, ctrlKey } = ev
  let brush_key = /Digit([12345])/
  if (brush_key.test(code)) {
    let index = parseInt(brush_key.exec(code)[1]) - 1
    set_active(index)
  }
  if (code === 'KeyE') color_input.click()
}
body_ele.onkeypress = handle_keypress

// FUNCTION FOR ARRAY OF ALL ELEMENTS
const create_element_array = () => lp.buttons.map(btn => {
  let { x, y } = btn
  return document.getElementById(`x${x}y${y}`)
})

// get x y id
const get_id_xy = (ele) => {
  let matches = ele.id.match(id_coord)
  return {
    x: parseInt(matches[1]),
    y: parseInt(matches[2])
  }
}

// SET COLOR FROM EDIT INPUT
const set_color = (ele, update) => {
  let { x, y } = get_id_xy(ele)
  let button = button_by_coord(x, y, lp)
  let color = update 
    ? brushes[active_brush]
    : button.color
  ele.nodeValue = color
  ele.style.backgroundColor = color
  if (update) {
    button.color = color
    socket.emit('update', lp)
  } 
}

// CLICK FUNCTION TOGGLE
const set_click_fns = () => {
  if (!eyedrop_status) {
    element_array.forEach(ele => {
      ele.onclick = () => { set_color(ele, true) }
    })
  } else {
    element_array.forEach(ele => {
      ele.onclick = () => {
        let ele_bg = ele.style.backgroundColor
        if (is_valid_rgb(ele_bg)) ele_bg = rgb_to_hex(ele_bg)    
        brushes[active_brush] = ele_bg
        update_dom()
      }
    })
  }
}

// SET ON CHANGE FOR MAIN LAUNCHPAD
const element_onchange = () => {
  set_click_fns()
  
  color_input.onchange = () => {
    brushes[active_brush] = color_input.value
    brush_eles[active_brush].style.backgroundColor = color_input.value
    document.cookie = brushes
  }

  brush_eles.forEach((ele, ind) => {
    ele.onclick = () => { set_active(ind) }
    ele.ondblclick = () => { 
      set_active(ind)
      color_input.click()
    }
  })
}

// UPDATE LP OBJECT
const update_lp = (payload) => {
  let { regions, buttons } = payload
  lp.buttons = buttons
  lp.regions = regions
}

// GET BRUSHES
const brushes_cookie = () => {
  return document.cookie
    ? document.cookie.split(',')
    : false
}

// EMPTY BRUSHES ARR
const brushes = brushes_cookie()
  ? brushes_cookie()
  : blank_brushes

// TOGGLE EYEDROPPER
export const toggle_eyedrop = () => {
  if (eyedrop_status) eyedrop_ele.classList.remove('selected')
  if (!eyedrop_status) eyedrop_ele.classList.add('selected')
  eyedrop_status = !eyedrop_status 
  set_click_fns()
}

// UPDATE THE DOM WITH NEW VALUES
const update_dom = () => {
  element_array.forEach(ele => {
    set_color(ele, false)
  })
  color_input.value = brushes[active_brush]
  brush_eles.forEach((ele, ind) => {
    ele.style.backgroundColor = brushes[ind]
  })
}


/*============================
===========WEBSOCKET==========
============================*/

// WEBSOCKET STARTUP
socket.on('startup', (payload) => {
  update_lp(payload)
  element_array = create_element_array()
  update_dom()
  element_onchange()
})

socket.on('update', (payload) => {
  update_lp(payload)
  update_dom()
})

// WEBSOCKET RESET
socket.on('reset', () => {
  if (!all_black_check(lp)) socket.emit('reset')
  reset_lights(lp)
  color_input.value = black
  update_dom()
})
