// REGEX
export const hex_regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

// CHECK HEX STRING FOR VALID COLOR
export const is_valid_hex = (hex_string) => hex_regex.test(hex_string)

// RESCALE RGB VALUES FOR LAUNCHPAD
export const scale_to_lp = (num) => (num * 63) / 255

// HEX STRING TO ARRAY OF RGB VALUES
export const hex_to_rgb_array = (hex_string) => {
  let result = hex_regex.exec(hex_string)
  return [result[1], result[2], result[3]]
}

// HEX STRING TO SCALED INTEGER VALUES FOR LAUNCHPAD
export const hex_to_lp = (hex_string) => {
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
