const replacePhoneSymbols = (value: string) => {
  return value.replaceAll(/[ \-()]/g, '')
}

export default replacePhoneSymbols
