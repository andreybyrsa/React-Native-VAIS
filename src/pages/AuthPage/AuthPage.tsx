import Button from '../../components/Button'
import IconComponent from '../../components/IconComponent'
import PhoneField from '../../components/Input/PhoneField'
import TextField from '../../components/Input/TextField'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import AuthPageStyles from './AuthPage.styles'
import { useMemo, useState } from 'react'
import { View } from 'react-native'

function AuthPage() {
  const [userName, setUserName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('+7')
  const [errorValue, setErrorValue] = useState<string>('')

  const buttonDisable = !!userName && phoneNumber !== '+7' && errorValue === 'undefined'

  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-1">Авторизация</Typography>} />
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer>
        <Button disabled={!buttonDisable}>Войти</Button>
      </Footer>
    )
  }, [buttonDisable])

  return (
    <PageLayout
      header={header}
      footer={footer}
      contentStyle={AuthPageStyles['auth-page__content']}
    >
      <View style={AuthPageStyles['auth-page__inputs']}>
        <TextField
          label="Имя"
          setValue={setUserName}
          setError={setErrorValue}
          required
        />
        <PhoneField
          label="Номер телефона"
          setValue={setPhoneNumber}
          setError={setErrorValue}
          required
        />
      </View>

      <View style={AuthPageStyles['auth-page__politics']}>
        <Typography variant="text-4">Регистрируясь, вы принимаете условия</Typography>
        <Typography variant="text-4">Политики конфиденциальности</Typography>
      </View>

      <View style={AuthPageStyles['auth-page__icons']}>
        <IconComponent
          color="color-background-secondary"
          size={50}
          iconName="ios-logo-apple"
        />
        <IconComponent
          color="color-background-secondary"
          size={50}
          iconName="ios-logo-google"
        />
        <IconComponent
          color="color-background-secondary"
          size={50}
          iconName="ios-logo-facebook"
        />
      </View>
    </PageLayout>
  )
}

export default AuthPage
