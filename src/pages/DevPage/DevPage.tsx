import { logo } from '../../../assets/images'
import Button from '../../components/Button'
import Cell from '../../components/Cell'
import IconButton from '../../components/IconButton'
import IconComponent from '../../components/IconComponent'
import ImageComponent from '../../components/ImageComponent'
import NumberField from '../../components/Input/NumberField'
import PhoneField from '../../components/Input/PhoneField'
import TextField from '../../components/Input/TextField'
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
      <Footer
        iconButton={
          <IconButton
            type="primary"
            iconName="md-heart-sharp"
            size={35}
          />
        }
      >
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
      <PhoneField
        label="Номер телефона"
        required
      />
      <TextField
        label="Введите имя"
        required
      />
      <NumberField required />
    </PageLayout>
  )
}

export default DevPage
