import Button from '../../components/Button'
import Cell from '../../components/Cell'
import IconComponent from '../../components/IconComponent'
import ImageComponent from '../../components/ImageComponent'
import NavigationSideBar from '../../components/NavigationComponents/NavigationSideBar'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import UserSelector from '../../store/reducers/user/UserSelector'
import CellContentType from '../../types/CellContentType'
import getPhoneMaskPattern from '../../utils/getPhoneMaskPattern'
import ProfilePageStyle from './ProfilePage.styles'
import { useMemo } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

const Cells: CellContentType[] = [
  {
    id: 0,
    title: 'Избранное',
  },
  {
    id: 1,
    title: 'Оценить приложение',
  },
  {
    id: 2,
    title: 'Связаться с нами',
  },
]

function ProfilePage() {
  const user = useSelector(UserSelector())

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
          <ImageComponent
            style={ProfilePageStyle['profile-page__profile-pic']}
            imageSrc={user.profilePic}
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
        />
      ))}
      <Button type="primary">Перейти на премиум</Button>
    </PageLayout>
  )
}

export default ProfilePage
