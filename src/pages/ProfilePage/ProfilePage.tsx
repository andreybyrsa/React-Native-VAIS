import Button from '../../components/Button'
import Cell from '../../components/Cell'
import IconComponent from '../../components/IconComponent'
import NavigationSideBar from '../../components/NavigationComponents/NavigationSideBar'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import CellContentType from '../../types/CellContentType'
import ProfilePageStyle from './ProfilePage.styles'
import { useMemo } from 'react'
import { View } from 'react-native'

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
        <IconComponent
          iconName="ios-person-circle"
          size={70}
        />
        <View>
          <Typography variant="title-3">Имя: Kirill</Typography>
          <Typography variant="title-3">Телефон: 81112224455</Typography>
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
