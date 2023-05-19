import { lookLoaderBackground__active } from '../../../assets/images'
import Button from '../../components/Buttons/Button'
import LookLoader from '../../components/Loaders/LookLoader'
import ProfilePictureModal from '../../components/Modals/ProfilePictureModal'
import NavigationSideBar from '../../components/NavigationComponents/NavigationSideBar'
import Footer from '../../layouts/Footer'
import PageLayout from '../../layouts/PageLayout'
import UploadLookPageStyles from './UploadLookPage.styles'
import { ImagePickerAsset } from 'expo-image-picker'
import { useMemo, useState } from 'react'
import { Image, ImageBackground, ImageSourcePropType } from 'react-native'

function UploadLookPage() {
  const [modalOpened, setModalOpened] = useState<boolean>(false)
  const [image, setImage] = useState<ImagePickerAsset>()

  const backgroundImage = Image.resolveAssetSource(
    lookLoaderBackground__active as ImageSourcePropType,
  )?.uri

  const uploadImage = () => {
    setModalOpened(true)
  }

  const footer = useMemo(() => {
    return (
      <Footer
        style={UploadLookPageStyles['upload-look-page__footer']}
        isNavigation
      >
        <NavigationSideBar />
      </Footer>
    )
  }, [])

  if (image) {
    return <LookLoader />
  }

  return (
    <ImageBackground
      style={UploadLookPageStyles['upload-look-page-background']}
      resizeMode="cover"
      source={{ uri: backgroundImage }}
    >
      <PageLayout
        style={UploadLookPageStyles['upload-look-page']}
        contentStyle={UploadLookPageStyles['upload-look-page__content']}
        footer={footer}
        footerIsNavigation
        scroll={false}
      >
        <Button
          type="secondary"
          onPress={uploadImage}
        >
          Создать новый образ
        </Button>

        <ProfilePictureModal
          opened={modalOpened}
          setOpened={setModalOpened}
          setImage={setImage}
        />
      </PageLayout>
    </ImageBackground>
  )
}

export default UploadLookPage
