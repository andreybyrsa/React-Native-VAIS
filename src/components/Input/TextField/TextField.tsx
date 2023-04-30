import useCustomFonts from '../../../hooks/useCustomFonts'
import { FormsTypes } from '../../../types/FormsTypes'
import getCurrentColor from '../../../utils/getCurrentColor'
import Typography from '../../Typography'
import TextFieldStyles from './TextField.styles'
import TextFieldProps from './TextField.types'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View } from 'react-native'

function TextField({
  style,
  label,
  placeholder = 'Введите текст',
  type = 'primary',
  setValue,
  setError,
  required = false,
  maxLength = 15,
  minLength = 2,
}: TextFieldProps) {
  const fonts = useCustomFonts()

  const {
    control,
    formState: { errors },
  } = useForm<FormsTypes>({
    mode: 'onChange',
  })

  useEffect(() => {
    if (setError) {
      setError(`${errors?.textField?.type}`)
    }
  }, [errors?.textField?.type])

  const isRequired = errors?.textField?.type === 'required'

  const CurrentPlaceholderColor = isRequired
    ? getCurrentColor('color-text-error')
    : type === 'primary'
    ? getCurrentColor('color-text-primary')
    : getCurrentColor('color-text-secondary')

  const getCurrentErrorMessage = (error: string) => {
    return error === 'pattern'
      ? 'Вы ввели некорректную форму'
      : error === 'maxLength'
      ? `Длина должна быть меньше ${maxLength} символов`
      : error === 'minLength'
      ? `Длина должна быть больше ${minLength} символов`
      : 'Форма обязательна к заполнению'
  }

  const onHandlerChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (setValue) {
      setValue(event.nativeEvent.text)
    }
  }

  if (!fonts) {
    return <Text>Error fonts</Text>
  }

  return (
    <View style={TextFieldStyles['text-field-wrapper']}>
      {label && (
        <Typography
          style={TextFieldStyles['text-field-label']}
          variant="title-3"
        >
          {label}
        </Typography>
      )}
      <Controller
        control={control}
        rules={{
          required,
          pattern: /^[а-яА-Я a-zA-z][а-яА-Я0-9 a-zA-Z0-9]*[._-]?[а-яА-Я0-9 a-zA-Z0-9]+$/,
          minLength,
          maxLength,
        }}
        render={({ field: { onChange } }) => (
          <TextInput
            style={[
              TextFieldStyles['text-filed'],
              TextFieldStyles[`text-field--${type}`],
              isRequired && TextFieldStyles['text-field--required'],
              style,
            ]}
            selectionColor={getCurrentColor('color-text-primary')}
            placeholderTextColor={CurrentPlaceholderColor}
            placeholder={placeholder}
            onChange={onHandlerChange}
            onChangeText={onChange}
          />
        )}
        name="textField"
      />
      {errors?.textField && (
        <Typography
          style={TextFieldStyles['text-field-error']}
          color="color-text-error"
          variant="text-2"
        >
          {getCurrentErrorMessage(`${errors?.textField?.type}`)}
        </Typography>
      )}
    </View>
  )
}

export default TextField
