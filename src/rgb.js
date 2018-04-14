// REGEX
export const hex_regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
export const rgb_regex = /^rgb\((\d+),\s?(\d+),\s(\d+)\)?$/i

// CHECK HEX STRING FOR VALID COLOR
export const is_valid_hex = (hex_string) => hex_regex.test(hex_string)
export const is_valid_rgb = (rgb_str) => rgb_regex.test(rgb_str)

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

const num_to_hex = (num_str) => {
  let hex = num_str.toString(16)
  if (hex.length === 1) return '0' + hex
  return hex
}

export const rgb_to_hex = (rgb_str) => {
  if (is_valid_rgb(rgb_str)) {
    let matches = rgb_regex.exec(rgb_str)
    let values = [matches[1], matches[2], matches[3]]
    let hex_chunks = values
      .map(item => parseInt(item))
      .map(item => num_to_hex(item))
    return `#${hex_chunks.join('')}` 
  } else { return '#000000'}
}