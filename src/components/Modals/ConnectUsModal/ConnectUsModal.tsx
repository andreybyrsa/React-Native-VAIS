import PageLayout from '../../../layouts/PageLayout'
import Typography from '../../Typography'
import DefaultModal from '../DefaultModal'
import ConnectUsModalStyles from './ConnectUsModal.styles'
import ConnectUsModalProps from './ConnectUsModal.types'
import { setStringAsync } from 'expo-clipboard'
import { useState } from 'react'
import { TouchableHighlight, View } from 'react-native'

function ConnectUsModal({ opened, setOpened }: ConnectUsModalProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copyEmail = async (email: string) => {
    await setStringAsync(email)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 5000)
  }

  return (
    <DefaultModal
      animationType="fade"
      opened={opened}
      setOpened={setOpened}
    >
      <PageLayout style={ConnectUsModalStyles['connect-us-modal']}>
        <View style={ConnectUsModalStyles['connect-us-modal__info']}>
          <Typography variant="title-3">Свяжитесь с нами!</Typography>
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={1}
            onPress={() => copyEmail('VirtualAI@mail.com')}
          >
            <Typography
              variant="title-3"
              color="color-text-link"
            >
              VirtualAI@mail.com
            </Typography>
          </TouchableHighlight>
          {isCopied && <Typography variant="text-4">Почта скопирована!</Typography>}
        </View>
      </PageLayout>
    </DefaultModal>
  )
}

export default ConnectUsModal
