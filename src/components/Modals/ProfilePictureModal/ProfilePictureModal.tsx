import Footer from '../../../layouts/Footer'
import PageLayout from '../../../layouts/PageLayout'
import Button from '../../Buttons/Button'
import DefaultModal from '../DefaultModal'
import ProfilePictureModalProps from './ProfilePictureModal.types'
import ProfilePictureModalStyles from './ProfilePrictureModal.styles'
import {
  MediaTypeOptions,
  launchCameraAsync,
  launchImageLibraryAsync,
  requestCameraPermissionsAsync,
} from 'expo-image-picker'
import { useMemo } from 'react'
import { View } from 'react-native'

function ProfilePictureModal({ opened, setOpened, setImage }: ProfilePictureModalProps) {
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

    setOpened(false)
  }

  const openCamera = async () => {
    const cameraRequest = await requestCameraPermissionsAsync()

    if (cameraRequest.granted) {
      let result = await launchCameraAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [5, 3],
        quality: 1,
      })

      if (!result.canceled) {
        setImage(result.assets[0])
      }

      setOpened(false)
    }
  }

  const footer = useMemo(() => {
    return (
      <Footer style={ProfilePictureModalStyles['profile-picture-modal__buttons-wrapper']}>
        <View style={ProfilePictureModalStyles['profile-picture-modal__buttons']}>
          <Button onPress={openCamera}>Сделать фотографию</Button>
          <Button onPress={openImagesLibrary}>Открыть галерею</Button>
        </View>
      </Footer>
    )
  }, [])

  return (
    <DefaultModal
      opened={opened}
      setOpened={setOpened}
      animationType="slide"
    >
      <PageLayout
        style={ProfilePictureModalStyles['profile-picture-modal']}
        footerStyle={ProfilePictureModalStyles['profile-picture-modal__footer']}
        footer={footer}
      />
    </DefaultModal>
  )
}

export default ProfilePictureModal
