import IconComponent from '../../components/IconComponent'
import Typography from '../../components/Typography'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import { useNavigation } from '@react-navigation/native'
import { useMemo } from 'react'
import { TouchableHighlight } from 'react-native'

function FavouritesLooksPage() {
  const navigation = useNavigation()

  const navigateToPrevious = () => {
    return navigation.goBack()
  }

  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={1}
            onPress={navigateToPrevious}
          >
            <IconComponent
              iconName="ios-return-up-back"
              size={40}
            />
          </TouchableHighlight>
        }
        rightSideSlot={<Typography variant="title-1">Избранное</Typography>}
      />
    )
  }, [])

  return <PageLayout header={header} />
}

export default FavouritesLooksPage
