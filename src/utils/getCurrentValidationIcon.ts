const getCurrentValidationIcon = (error: string, isRequired: boolean) => {
  if (isRequired) {
    return 'close-outline'
  }
  return error !== 'undefined' ? 'close-outline' : 'checkmark'
}

export default getCurrentValidationIcon
