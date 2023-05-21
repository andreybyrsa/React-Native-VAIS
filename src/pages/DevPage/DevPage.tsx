import { jacket } from '../../../assets/images'
import Button from '../../components/Buttons/Button'
import Card from '../../components/Cards/Card'
import SubcriptionModal from '../../components/Modals/SubscriptionModal'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import PageType from '../../types/PageType'
import DevPageStyles from './DevPage.styles'
import React, { useMemo, useState } from 'react'
import { View } from 'react-native'

function DevPage({ navigation }: PageType) {
  const [error, setError] = useState<string>('')

  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-1">Dev Page</Typography>} />
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer
        iconButton={
          <Button
            isIcon
            iconName="md-heart-sharp"
            iconSize={35}
          />
        }
      >
        <Button onPress={() => navigation.navigate('/')}>Продолжить</Button>
      </Footer>
    )
  }, [])

  const [subcriptionOpen, setSubcriptionOpen] = useState<boolean>(true)
  const openModal = () => {
    setSubcriptionOpen(true)
  }

  const cards = [
    {
      id: 0,
      src: [jacket, jacket, jacket, jacket],
      cardName: 'Классический костюм',
      cardPrice: '100 рублей',
      date: Date.now().toString(),
    },
    {
      id: 1,
      src: [jacket, jacket, jacket, jacket, jacket, jacket],
      cardName: 'Классический костюм',
      cardPrice: '100 рублей',
      date: Date.now().toString(),
    },
    {
      id: 2,
      src: [jacket, jacket, jacket],
      cardName: 'Классический костюм',
      cardPrice: '100 рублей',
      date: Date.now().toString(),
    },
    {
      id: 3,
      src: [jacket, jacket],
      cardName: 'Классический костюм',
      cardPrice: '100 рублей',
      date: Date.now().toString(),
    },
  ]

  return (
    <PageLayout
      header={header}
      footer={footer}
    >
      <View style={DevPageStyles['dev-page__content']}>
        <View style={DevPageStyles['dev-page__cards']}>
          {cards.map((elem) => (
            <Card
              isLookCard
              key={elem.id}
              imageSrces={elem.src}
              date={elem.date}
              cardName={elem.cardName}
              cardPrice={elem.cardPrice}
            />
          ))}
        </View>
      </View>
    </PageLayout>
  )
}

export default DevPage
