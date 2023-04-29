import useCustomFonts from '../../../hooks/useCustomFonts'
import { FormsTypes } from '../../../types/FormsTypes'
import getCurrentColor from '../../../utils/getCurrentColor'
import getCurrentValidationIcon from '../../../utils/getCurrentValidationIcon'
import IconComponent from '../../IconComponent'
import Typography from '../../Typography'
import NumberFielsStyles from './NumberField.styles'
import NumberFieldProps from './NumberField.types'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View } from 'react-native'

function NumberField({
  style,
  label,
  placeholder = 'Введите код',
  type = 'primary',
  setValue,
  setError,
  required = false,
  maxLength = 5,
  minLength = 5,
}: NumberFieldProps) {
  const fonts = useCustomFonts()

  const {
    control,
    getValues,
    formState: { errors },
  } = useForm<FormsTypes>({
    mode: 'onChange',
  })

  useEffect(() => {
    if (setError) {
      setError(`${errors?.numberField?.type}`)
    }
  }, [errors?.numberField?.type])

  const isRequired = errors?.numberField?.type === 'required'

  const CurrentPlaceholderColor = isRequired
    ? getCurrentColor('color-text-error')
    : type === 'primary'
    ? getCurrentColor('color-text-primary')
    : getCurrentColor('color-text-secondary')

  const onHandlerChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (setValue) {
      setValue(event.nativeEvent.text)
    }
  }

  if (!fonts) {
    return <Text>Error fonts</Text>
  }

  return (
    <View style={NumberFielsStyles['number-field-wrapper']}>
      {label && (
        <Typography
          style={NumberFielsStyles['number-field-label']}
          variant="title-3"
        >
          {label}
        </Typography>
      )}
        <Controller
          control={control}
          rules={{
            required,
            pattern: /^[0-9]+$/,
            minLength,
            maxLength,
          }}
          render={({ field: { onChange } }) => (
            <TextInput
              style={[
                NumberFielsStyles['number-filed'],
                NumberFielsStyles[`number-field--${type}`],
                isRequired && NumberFielsStyles['number-field--required'],
                style,
              ]}
              selectionColor={getCurrentColor('color-text-primary')}
              placeholderTextColor={CurrentPlaceholderColor}
              placeholder={placeholder}
              keyboardType="phone-pad"
              onChange={onHandlerChange}
              onChangeText={onChange}
            />
          )}
          name="numberField"
        />
    </View>
  )
}

export default NumberField
