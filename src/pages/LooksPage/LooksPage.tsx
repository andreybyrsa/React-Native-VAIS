import FilterButton from '../../components/FilterButton'
import NavigationSideBar from '../../components/NavigationComponents/NavigationSideBar'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import { useMemo } from 'react'

function LooksPage() {
  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={<Typography variant="title-1">Образы</Typography>}
        rightSideSlot={<FilterButton />}
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
    ></PageLayout>
  )
}

export default LooksPage
