import useCustomFonts from '../../../hooks/useCustomFonts'
import { FormsTypes } from '../../../types/FormsTypes'
import getCurrentColor from '../../../utils/getCurrentColor'
import getCurrentValidationIcon from '../../../utils/getCurrentValidationIcon'
import getPhoneMaskPattern from '../../../utils/getPhoneMaskPattern'
import replacePhoneSymbols from '../../../utils/replacePhoneSymbols'
import IconComponent from '../../IconComponent'
import Typography from '../../Typography'
import PhoneFieldStyles from './PhoneField.styles'
import PhoneFieldProps from './PhoneField.types'
import { useEffect, useState } from 'react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View } from 'react-native'

function PhoneField({
  style,
  label,
  type = 'primary',
  setValue,
  setError,
  required = false,
}: PhoneFieldProps) {
  const [currentPhoneValue, setCurrentPhoneValue] = useState<string>('+7')
  const [isRequired, setIsRequired] = useState<boolean>(false)

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
      setError(`${errors?.phoneField?.type}`)
    }
  }, [errors?.phoneField?.type])

  const onHandlerChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const currentEventValue = replacePhoneSymbols(event.nativeEvent.text)

    if (currentEventValue.length > 12) {
      return
    }

    if (setValue) {
      setValue(currentEventValue)
    }

    if (currentEventValue.length > replacePhoneSymbols(currentPhoneValue).length) {
      setCurrentPhoneValue((prevState) =>
        getPhoneMaskPattern(replacePhoneSymbols(prevState) + currentEventValue.slice(-1)),
      )
      setIsRequired(false)
    } else {
      setCurrentPhoneValue(getPhoneMaskPattern(currentEventValue))
      if (currentEventValue.length === 2) setIsRequired(true)
    }
  }

  const validatePhoneValue = (value: string) => {
    let currentValue = replacePhoneSymbols(value)

    if (replacePhoneSymbols(value).length === 13) {
      currentValue = currentValue.slice(0, -1)
    }

    return /^(\+7|7|8)?\(?[489][0-9]{2}\)?[0-9]{3}?[0-9]{2}?[0-9]{2}$/.test(currentValue)
  }

  if (currentPhoneValue.length <= 1) {
    setCurrentPhoneValue('+7')
  }

  if (!fonts) {
    return <Text>Error fonts</Text>
  }

  return (
    <View style={PhoneFieldStyles['phone-field-wrapper']}>
      {label && (
        <Typography
          style={PhoneFieldStyles['phone-field-label']}
          variant="title-3"
        >
          {label}
        </Typography>
      )}
      <View>
        <Controller
          control={control}
          rules={{
            validate: validatePhoneValue,
          }}
          render={({ field: { onChange } }) => (
            <TextInput
              style={[
                PhoneFieldStyles['phone-filed'],
                PhoneFieldStyles[`phone-field--${type}`],
                isRequired && required && PhoneFieldStyles['phone-field--required'],
                style,
              ]}
              selectionColor={getCurrentColor('color-text-primary')}
              keyboardType="phone-pad"
              value={currentPhoneValue}
              onChangeText={onChange}
              onChange={onHandlerChange}
            />
          )}
          name="phoneField"
        />
        {!getValues('phoneField') ? (
          <View />
        ) : (
          <IconComponent
            iconStyle={PhoneFieldStyles['phone-field__icon']}
            iconName={getCurrentValidationIcon(`${errors?.phoneField?.type}`, isRequired)}
            color={errors?.phoneField ? 'color-icon-error' : 'color-icon-correct'}
            size={35}
          />
        )}
      </View>
    </View>
  )
}

export default PhoneField
