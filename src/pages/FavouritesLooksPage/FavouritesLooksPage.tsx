import TouchableIcon from '../../components/Icons/TouchableIcon'
import Typography from '../../components/Typography'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import { useNavigation } from '@react-navigation/native'
import { useMemo } from 'react'

function FavouritesLooksPage() {
  const navigation = useNavigation()

  const navigateToPrevious = () => {
    return navigation.goBack()
  }

  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={
          <TouchableIcon
            iconName="ios-return-up-back"
            iconSize={40}
            onPress={navigateToPrevious}
          />
        }
        rightSideSlot={<Typography variant="title-1">Избранное</Typography>}
      />
    )
  }, [])

  return <PageLayout header={header} />
}

export default FavouritesLooksPage
