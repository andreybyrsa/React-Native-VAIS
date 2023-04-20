import Button from '../../components/Button'
import NumberField from '../../components/Input/NumberField'
import Typography from '../../components/Typography'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import getCurrentTimer from '../../utils/getCurrentTimer'
import PhoneConfirmPageStyles from './PhoneConfirmPage.styles'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useMemo, useState } from 'react'
import { TouchableHighlight } from 'react-native'

const defaultTime = 240

function PhoneConfirmPage() {
  const navigation = useNavigation()

  const [time, setTime] = useState<number>(defaultTime)
  const [verifyCode, setVerifyCode] = useState<string>('')
  const [errorValue, setErrorValue] = useState<string>('')

  const buttonDisabled = !!verifyCode && errorValue === 'undefined'

  useEffect(() => {
    setTimeout(() => {
      setTime((prevState) => (prevState > 0 ? prevState - 1 : 0))
    }, 1000)
  }, [time])

  const navigateToIndexPage = () => {
    return navigation.navigate('/' as never)
  }

  const resendCode = () => {
    setTime(defaultTime)
  }

  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-1">Проверочный код</Typography>} />
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer>
        <Button
          onClick={navigateToIndexPage}
          disabled={!buttonDisabled}
        >
          Продолжить
        </Button>
      </Footer>
    )
  }, [errorValue])

  return (
    <PageLayout
      header={header}
      footer={footer}
      contentStyle={PhoneConfirmPageStyles['phone-confirm-page__content']}
    >
      <Typography variant="text-4">
        Мы отправили код на номер{' '}
        {
          <Typography
            variant="text-4"
            color="color-text-link"
          >
            +71112224455
          </Typography>
        }
      </Typography>
      <NumberField
        setValue={setVerifyCode}
        setError={setErrorValue}
        required
      />
      {time ? (
        <Typography variant="text-4">
          До повторной отправки кода осталось {getCurrentTimer(time)}
        </Typography>
      ) : (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={resendCode}
        >
          <Typography
            variant="text-4"
            color="color-text-link"
          >
            Отправить код повторно
          </Typography>
        </TouchableHighlight>
      )}
    </PageLayout>
  )
}

export default PhoneConfirmPage
