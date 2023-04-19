import Button from '../../components/Button'
import IconComponent from '../../components/IconComponent'
import ImageComponent from '../../components/ImageComponent'
import PhoneField from '../../components/Input/PhoneField'
import TextField from '../../components/Input/TextField'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import AuthPageStyles from './AuthPage.styles'
import { useNavigation } from '@react-navigation/native'
import { ImagePickerAsset, MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker'
import React, { useMemo, useState } from 'react'
import { TouchableHighlight, View } from 'react-native'

function AuthPage() {
  const navigation = useNavigation()

  const [userName, setUserName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('+7')
  const [errorValue, setErrorValue] = useState<string>('')

  const [image, setImage] = useState<ImagePickerAsset>()

  const openImagesLibrary = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0])
    }
  }

  const navigateToPhoneConfirmPage = () => {
    return navigation.navigate('/phone-confirm' as never)
  }

  const buttonDisable = !!userName && phoneNumber !== '+7' && errorValue === 'undefined'

  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-1">Авторизация</Typography>} />
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer>
        <Button
          disabled={!buttonDisable}
          onClick={navigateToPhoneConfirmPage}
        >
          Войти
        </Button>
      </Footer>
    )
  }, [buttonDisable])

  return (
    <PageLayout
      header={header}
      footer={footer}
      contentStyle={AuthPageStyles['auth-page__content']}
    >
      <TouchableHighlight
        style={AuthPageStyles['auth-page__avatar-image-container']}
        underlayColor="transparent"
        onPress={openImagesLibrary}
      >
        {image ? (
          <ImageComponent
            style={AuthPageStyles['auth-page__avatar-image']}
            imageSrc={image}
            alt="avatar"
          />
        ) : (
          <IconComponent
            iconName="ios-person-circle-outline"
            size={170}
          />
        )}
      </TouchableHighlight>

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
