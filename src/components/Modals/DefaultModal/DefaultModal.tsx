import DefaultModalStyles from './DefaultModal.styles'
import DefaultModalProps from './DefaultModal.types'
import { Modal, TouchableHighlight } from 'react-native'

function DefaultModal({ opened, setOpened, children, animationType }: DefaultModalProps) {
  const closeModal = () => {
    setOpened(false)
  }

  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={opened}
    >
      <TouchableHighlight
        style={DefaultModalStyles['default-modal__blur-content']}
        underlayColor="transparent"
        activeOpacity={1}
        onPress={closeModal}
      >
        {children}
      </TouchableHighlight>
    </Modal>
  )
}

export default DefaultModal
