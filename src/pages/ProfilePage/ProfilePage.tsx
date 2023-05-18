import Button from '../../components/Button'
import Cell from '../../components/Cell'
import IconComponent from '../../components/IconComponent'
import AppRatingModal from '../../components/Modals/AppRatingModal'
import ConnectUsModal from '../../components/Modals/ConnectUsModal'
import SubcriptionModal from '../../components/Modals/SubscriptionModal'
import NavigationSideBar from '../../components/NavigationComponents/NavigationSideBar'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import { removeUser } from '../../store/reducers/user/UserReducer'
import UserSelector from '../../store/reducers/user/UserSelector'
import CellContentType from '../../types/CellContentType'
import getPhoneMaskPattern from '../../utils/getPhoneMaskPattern'
import ProfilePageStyle from './ProfilePage.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useMemo, useState } from 'react'
import { Image, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

function ProfilePage() {
  const [ratingOpened, setRatingOpened] = useState<boolean>(false)
  const [connectOpened, setConnectOpened] = useState<boolean>(false)
  const [subcriptionOpened, setSubcriptionOpened] = useState<boolean>(false)

  const Cells: CellContentType[] = [
    {
      id: 0,
      title: 'Избранное',
      onClick: navigateToFavourites,
    },
    {
      id: 1,
      title: 'Оценить приложение',
      onClick: openRatingModal,
    },
    {
      id: 2,
      title: 'Связаться с нами',
      onClick: openConnectModal,
    },
  ]

  const user = useSelector(UserSelector())
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const logOutFromAccount = async () => {
    dispatch(removeUser())
    await AsyncStorage.removeItem('@user')

    navigation.reset({
      key: '0',
      index: 0,
      routes: [{ name: '/on-boarding' as never }],
    })
  }

  function openRatingModal() {
    setRatingOpened(true)
  }

  function openConnectModal() {
    setConnectOpened(true)
  }

  function openSubcriptionModal() {
    setSubcriptionOpened(true)
  }

  function navigateToFavourites() {
    return navigation.navigate('/favourites' as never)
  }

  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-1">Профиль</Typography>} />
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer isNavigation>
        <NavigationSideBar />
      </Footer>
    )
  }, [])

  return (
    <PageLayout
      contentStyle={ProfilePageStyle['profile-page__content']}
      header={header}
      footer={footer}
      footerIsNavigation
      scroll={false}
    >
      <View style={ProfilePageStyle['profile-page__profile-info']}>
        {user?.profilePic ? (
          <Image
            style={ProfilePageStyle['profile-page__profile-pic']}
            source={{ uri: `${user.profilePic}` }}
            alt="avatar"
          />
        ) : (
          <IconComponent
            iconName="ios-person-circle-outline"
            size={70}
          />
        )}
        <View>
          <Typography variant="text-2">Имя: {user?.userName}</Typography>
          <Typography variant="text-2">
            Телефон: {getPhoneMaskPattern(`${user?.phoneNumber}`)}
          </Typography>
        </View>
      </View>

      {Cells.map((elem: CellContentType) => (
        <Cell
          key={elem.id}
          title={elem.title}
          after={
            <IconComponent
              iconName="md-chevron-forward"
              size={35}
            />
          }
          onClick={elem.onClick}
        />
      ))}
      <Button type="primary" onClick={openSubcriptionModal}>Перейти на премиум</Button>
      <Cell
        title="Выйти"
        after={
          <IconComponent
            iconName="md-chevron-forward"
            size={35}
          />
        }
        onClick={logOutFromAccount}
      />

      <AppRatingModal
        opened={ratingOpened}
        setOpened={setRatingOpened}
      />

      <ConnectUsModal
        opened={connectOpened}
        setOpened={setConnectOpened}
      />

      <SubcriptionModal
        opened={subcriptionOpened}
        setOpened={setSubcriptionOpened}
      />
    </PageLayout>
  )
}

export default ProfilePage
