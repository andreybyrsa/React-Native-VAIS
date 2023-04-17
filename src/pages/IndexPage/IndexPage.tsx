import IconComponent from '../../components/IconComponent'
import NavigationSideBar from '../../components/NavigationComponents/NavigationSideBar'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import React, { useMemo } from 'react'

function IndexPage() {
  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={<Typography variant="title-1">Главная</Typography>}
        rightSideSlot={
          <IconComponent
            iconName="ios-heart-outline"
            size={45}
          />
        }
      />
    )
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
      header={header}
      footer={footer}
      footerIsNavigation
    />
  )
}

export default IndexPage
