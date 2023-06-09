import getCurrentColor from '../../utils/getCurrentColor'
import { StyleSheet } from 'react-native'

const PageLayoutStyles = StyleSheet.create({
  'page-layout': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    overflow: 'hidden',

    backgroundColor: getCurrentColor('color-background-primary'),

    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  'page-layout__header': {
    width: '100%',
  },
  'page-layout__content': {
    position: 'relative',

    height: '100%',
    maxHeight: '100%',
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  'page-lyaout__footer': {
    width: '100%',
  },
  'page-lyaout__footer-navigation': {
    backgroundColor: getCurrentColor('color-background-secondary'),
    width: '100%',
  },
})

export default PageLayoutStyles
