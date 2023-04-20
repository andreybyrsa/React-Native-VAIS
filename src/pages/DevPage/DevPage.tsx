import { gear, logo } from '../../../assets/images'
import Button from '../../components/Button'
import Cell from '../../components/Cell'
import IconButton from '../../components/IconButton'
import IconComponent from '../../components/IconComponent'
import ImageComponent from '../../components/ImageComponent'
import NumberField from '../../components/Input/NumberField'
import PhoneField from '../../components/Input/PhoneField'
import TextField from '../../components/Input/TextField'
import LookLoader from '../../components/Loaders/LookLoader'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import PageType from '../../types/PageType'
import DevPageStyles from './DevPage.styles'
import React, { useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'

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
    <View>
      <LookLoader />
    </View>
  )
}

export default DevPage
