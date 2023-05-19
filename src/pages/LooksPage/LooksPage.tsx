import FilterButton from '../../components/Buttons/FilterButton'
import FilterModal from '../../components/Modals/FilterModal'
import NavigationSideBar from '../../components/NavigationComponents/NavigationSideBar'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import { useMemo, useState } from 'react'

function LooksPage() {
  const [modalOpened, setModalOpened] = useState<boolean>(false)

  const openFilterModal = () => {
    setModalOpened(true)
  }

  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={<Typography variant="title-1">Образы</Typography>}
        rightSideSlot={<FilterButton onPress={openFilterModal} />}
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
    >
      <FilterModal
        opened={modalOpened}
        setOpened={setModalOpened}
      />
    </PageLayout>
  )
}

export default LooksPage
