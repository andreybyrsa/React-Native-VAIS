import { StyleSheet } from 'react-native'

const ProfilePageStyle = StyleSheet.create({
  'profile-page__content': {
    gap: 16,
  },
  'profile-page__profile-info': {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  'profile-page__profile-pic': {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
})

export default ProfilePageStyle
