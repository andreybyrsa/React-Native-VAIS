import Button from '../../components/Buttons/Button'
import IconComponent from '../../components/Icons/IconComponent'
import ImageComponent from '../../components/ImageComponent'
import PhoneField from '../../components/Input/PhoneField'
import TextField from '../../components/Input/TextField'
import ProfilePictureModal from '../../components/Modals/ProfilePictureModal'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import { setUser } from '../../store/reducers/user/UserReducer'
import AuthPageStyles from './AuthPage.styles'
import { useNavigation } from '@react-navigation/native'
import { ImagePickerAsset } from 'expo-image-picker'
import React, { useCallback, useMemo, useState } from 'react'
import { TouchableHighlight, View } from 'react-native'
import { useDispatch } from 'react-redux'

function AuthPage() {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const [userName, setUserName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('+7')
  const [errorValue, setErrorValue] = useState<string>('')

  const [image, setImage] = useState<ImagePickerAsset>()

  const [modalOpened, setModalOpened] = useState<boolean>(false)

  const buttonDisable = !!userName && phoneNumber !== '+7' && errorValue === 'undefined'

  const openModal = () => {
    setModalOpened(true)
  }

  const onHandlerSubmit = useCallback(() => {
    dispatch(
      setUser({
        userName,
        phoneNumber,
        profilePic: image?.uri,
      }),
    )
    return navigation.navigate('/phone-confirm' as never)
  }, [userName, phoneNumber, image])

  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-1">Авторизация</Typography>} />
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer>
        <Button
          disabled={!buttonDisable}
          onPress={onHandlerSubmit}
        >
          Войти
        </Button>
      </Footer>
    )
  }, [buttonDisable, onHandlerSubmit])

  return (
    <PageLayout
      header={header}
      footer={footer}
      contentStyle={AuthPageStyles['auth-page__content']}
    >
      <TouchableHighlight
        style={AuthPageStyles['auth-page__avatar-image-container']}
        underlayColor="transparent"
        onPress={openModal}
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

      <ProfilePictureModal
        opened={modalOpened}
        setOpened={setModalOpened}
        setImage={setImage}
      />
    </PageLayout>
  )
}

export default AuthPage
