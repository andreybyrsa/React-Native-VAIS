import { logo } from '../../../assets/images'
import Button from '../../components/Button'
import IconButton from '../../components/IconButton'
import Cell from '../../components/Cell'
import IconComponent from '../../components/IconComponent'
import ImageComponent from '../../components/ImageComponent'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import PageType from '../../types/PageType'
import DevPageStyles from './DevPage.styles'
import React, { useMemo } from 'react'

function DevPage({ navigation }: PageType) {
  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-1">Dev Page</Typography>} />
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer>
        <Button onClick={() => navigation.navigate('/')}>Продолжить</Button>
      </Footer>
    )
  }, [])

  return (
    <PageLayout
      header={header}
      footer={footer}
      contentStyle={DevPageStyles['dev-page__content']}
    >
      <Button>Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button disabled>Primary disabled</Button>
      <Button
        type="secondary"
        disabled
      >
        Primary
      </Button>
      <Cell
        after={
          <IconComponent
            iconName="md-chevron-forward"
            size={30}
          />
        }
        subtitle="Избранное"
        text="Какой-то супер бомбический текст"
        before={
          <IconComponent
            iconName="md-chevron-forward"
            size={30}
          />
        }
      />
      <ImageComponent
        style={{ width: 150, height: 150 }}
        imageSrc={logo}
        alt="logo"
      />
      <IconButton
        // style={{width:50, height: 50, backgroundColor: '#000'}}
        children = {
          <IconComponent
            iconName="md-chevron-forward"
            size={30}
          />
        }
      />
    </PageLayout>
  )
}

export default DevPage
