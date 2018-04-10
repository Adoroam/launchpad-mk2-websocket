import { 
  all_black_check,
  reset_lights,
  button_by_coord
 } from "./fn";

/*============================
===========CONSTANTS==========
============================*/

// START SOCKET
export const socket = io()

// DEFINE BLACK FOR USE LATER
const black = '#000000'

// X/Y ID REGEX
const id_coord = /^x(\d)y(\d)$/i

const edit_input = document.getElementById('edit')

// ARRAY OF ALL ELEMENTS MAPPED TO XY
let element_array

// DEFINE LAUNCHPAD ELEMENTS IN DOCUMENT
const lp = {
  regions: [],
  buttons: []
}

const multiselect = {
  edit: false,
  color: '',
  coord_list: []
}

/*============================
===========FUNCTIONS==========
============================*/

// FUNCTION FOR ARRAY OF ALL ELEMENTS
const create_element_array = () => lp.buttons.map(btn => {
  let { x, y } = btn
  return document.getElementById(`x${x}y${y}`)
})

// UPDATE THE DOM WITH NEW VALUES
const update_dom = () => {
  lp.buttons.forEach((btn, ind) => {
    let { color } = btn
    let ele = element_array[ind]
    ele.value = color
    ele.parentElement.style.backgroundColor = color
  })
}

// get x y id
const get_id_xy = (ele) => {
  let matches = ele.id.match(id_coord)
  return {
    x: parseInt(matches[1]),
    y: parseInt(matches[2])
  }
}

// SET ON CHANGE FOR MAIN LAUNCHPAD
const element_onchange = () => {
  // SET ONCHANGE FOR INDIVIDUAL INPUTS
  element_array.forEach(ele => {
    let parent = ele.parentElement
    ele.onchange = () => {
      parent.style.backgroundColor = ele.value
      let { x, y } = get_id_xy(ele)
      let button = button_by_coord(x, y, lp)
      button.color = ele.value
      socket.emit('update', lp)
    }
    parent.onclick = () => {
      if (multiselect.edit) {
        let coords = get_id_xy(ele)
        if (parent.nodeValue === null) {
          parent.classList.add('selected')
          parent.nodeValue = 'selected'
          multiselect.coord_list.push(coords)
        } else {
          parent.classList.remove('selected')
          parent.nodeValue = null
          let index = multiselect.coord_list.indexOf(coords)
          multiselect.coord_list.splice(index, 1)
        }
      }
    }
  })
  
  edit_input.onchange = () => {
    if (multiselect.edit) {
      multiselect.coord_list.forEach(coords => {
        let { x, y } = coords
        button_by_coord(x, y, lp).color = edit_input.value
      })
      update_dom()
      socket.emit('update', lp)
    }
  }
}

// TOGGLE EDIT MODE
export const toggle_edit = () => {
  if (multiselect.edit) {
    edit_input.classList.remove('edit')
    element_array.forEach(ele => {
      ele.parentElement.classList.remove('selected')
      ele.parentElement.nodeValue = null
    })
    multiselect.coord_list = []
  } else {
    edit_input.classList.add('edit')
  }
  multiselect.edit = !multiselect.edit
}

// SAVE NEW REGION
export const save_edit = () => {
  // let new_region = {
  //   color: multiselect.color,
  //   coords: multiselect.coords
  // }
  // lp.regions.push(new_region)
  socket.emit('update', lp)
}

// UPDATE LP OBJECT
const update_lp = (payload) => {
  let { regions, buttons } = payload
  lp.buttons = buttons
  lp.regions = regions
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
  edit_input.value = black
  update_dom()
})
