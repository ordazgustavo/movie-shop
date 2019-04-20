import { darken, lighten } from 'polished'

const brand = {
  primary: '#651AD1',
  secondary: '#8F16B9',
}

const light = {
  primary_light: `${lighten(0.055, brand.primary)}`,
  gray: '#D3D3D3',
  black: '#000',
  white: '#fff',
  bg_color: '#fff',
  body_color: '#fafafa',
  link_color: brand.primary,
  link_color_hover: `${darken(0.099, brand.primary)}`,
  red: '#E75248',
  green: '#17A974',
  blue: '#327CDC',
  yellow: '#FFB700',
  purple: '#8242F6',
  purple_dark: '#231c42',
  font_color: '#000',
  border_color: '#fafafa',
  border_hover_color: `${darken(0.2, '#fafafa')}`,
}

const dark = {
  primary_light: `${lighten(0.055, brand.primary)}`,
  gray: '#D3D3D3',
  black: '#000',
  white: '#fff',
  bg_color: '#0d0d21',
  body_color: '#0d0d21',
  link_color: brand.primary,
  link_color_hover: `${darken(0.099, brand.primary)}`,
  red: '#E75248',
  green: '#17A974',
  blue: '#327CDC',
  yellow: '#FFB700',
  purple: '#8242F6',
  purple_dark: '#231c42',
  font_color: '#fff',
  border_color: '#333448',
  border_hover_color: `${lighten(0.1, '#333448')}`,
}

const theme = {
  light,
  dark,
}

export default theme
