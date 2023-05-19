import Button from '../../components/Buttons/Button'
import SubcriptionModal from '../../components/Modals/SubscriptionModal'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import PageType from '../../types/PageType'
import React, { useMemo, useState } from 'react'

function DevPage({ navigation }: PageType) {
  const [error, setError] = useState<string>('')
  console.log(error)

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

  return (
    <PageLayout
      header={header}
      footer={footer}
    >
      <Button onPress={openModal}>Открыть модалку</Button>
      <SubcriptionModal
        opened={subcriptionOpen}
        setOpened={setSubcriptionOpen}
      />
    </PageLayout>
  )
}

export default DevPage
