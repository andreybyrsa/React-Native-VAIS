const Colors = {
  //? Text colors
  'color-text-primary': '#02202B',
  'color-text-secondary': '#00E4FF',
  'color-text-tertiary': '#FFFFFF',
  'color-text-error': '#FF0000',
  'color-text-link': '#107987',

  //? Icon colors
  'color-icon-primary': '#02202B',
  'color-icon-secondary': '#00E4FF',
  'color-icon-tertiary': '#FFFFFF',
  'color-icon-correct': '#2E994B',
  'color-icon-error': '#FF0000',

  //? Button colors
  'color-button-primary_enable': '#264A5A',
  'color-button-primary_active': '#02202B',
  'color-button-primary_disable': '#7496A6',

  'color-button-secondary_enable': '#02202B',
  'color-button-secondary_active': '#FFFFFF',
  'color-button-secondary_disable': '#7496A6',

  //? Border colors
  'color-border-primary_error': '#FF0000',
  'color-border-secondary_error': '#FF0000',

  'color-border-primary_enable': '#264A5A',
  'color-border-primary_active': '#02202B',
  'color-border-primary_disable': '#7496A6',

  'color-border-secondary_enable': '#00E4FF',
  'color-border-secondary_active': '#02202B',
  'color-border-secondary_disable': '#7496A6',

  //? Input colors
  'color-input-primary': '#8AA7BB',
  'color-input-primary_error': '#FEE4E4',

  'color-input-secondary': '#02202B',
  'color-input-secondary_error': '#FEE4E4',

  //? TextArea colors
  'color-textarea-primary': '#5F8393',

  //? Image colors
  'color-image-primary': '#A5B0B7',

  //? Background colors
  'color-background-primary': '#C3CFD7',
  'color-background-primary_active': '#8AA7BB',
  'color-background-secondary': '#264A5A',
  'color-background-tertiary': '#FFFFFF',
  'color-background-dark': '#052E3E',
  'color-background-dark_light': '#5F8393',
  'color-background-light': '#A5B0B7',
  'color-background-blue': '#4D76A1',
}

const ColorsKeys = Object.keys(Colors)
const ColorsValues = Object.values(Colors)
const pairs: [string, { color: string }][] = []

ColorsKeys.forEach((elem, index) => {
  pairs.push([elem, { color: ColorsValues[index] }])
})
const ColorsStyles = Object.fromEntries(pairs)

export { Colors, ColorsStyles }
export type ColorsType = keyof typeof Colors
