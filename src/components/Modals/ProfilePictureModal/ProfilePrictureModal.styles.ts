import getCurrentColor from '../../../utils/getCurrentColor'
import { StyleSheet } from 'react-native'

const ProfilePictureModalStyles = StyleSheet.create({
  'profile-picture-modal': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  'profile-picture-modal__footer': {
    backgroundColor: getCurrentColor('color-background-primary'),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  'profile-picture-modal__buttons-wrapper': {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  'profile-picture-modal__buttons': {
    gap: 8,
  },
})

export default ProfilePictureModalStyles
