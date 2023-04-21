import Button from '../../components/Button'
import NumberField from '../../components/Input/NumberField'
import Typography from '../../components/Typography'
import { User } from '../../domain/User'
import useAuth from '../../hooks/useAuth'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import { setUser, setUserToken } from '../../store/reducers/user/UserReducer'
import UserSelector from '../../store/reducers/user/UserSelector'
import getCurrentTimer from '../../utils/getCurrentTimer'
import getPhoneMaskPattern from '../../utils/getPhoneMaskPattern'
import PhoneConfirmPageStyles from './PhoneConfirmPage.styles'
import { useNavigation } from '@react-navigation/native'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { TouchableHighlight } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

let defaultTime = 240

function PhoneConfirmPage() {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [time, setTime] = useState<number>(defaultTime)
  const [isCounting, setIsCounting] = useState<boolean>(true)

  const [verifyCode, setVerifyCode] = useState<string>('')
  const [errorValue, setErrorValue] = useState<string>('')

  const user = useSelector(UserSelector()) as User
  const isAuth = useAuth()

  const buttonDisabled = !!verifyCode && errorValue === 'undefined'

  useEffect(() => {
    if (isCounting) {
      setTimeout(() => {
        setTime((prevState) => (prevState > 0 ? prevState - 1 : 0))
      }, 1000)
    }
  }, [time, isCounting])

  const onHandlerSubmit = useCallback(() => {
    setIsCounting(false)
    dispatch(setUserToken(verifyCode))
  }, [verifyCode, isCounting])

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
          onClick={onHandlerSubmit}
          disabled={!buttonDisabled}
        >
          Продолжить
        </Button>
      </Footer>
    )
  }, [errorValue, onHandlerSubmit])

  if (isAuth && isCounting === false) {
    return navigation.navigate('/' as never)
  }

  return (
    <PageLayout
      header={header}
      footer={footer}
      contentStyle={PhoneConfirmPageStyles['phone-confirm-page__content']}
    >
      <Typography variant="text-4">
        Код отправлен на номер{' '}
        {
          <Typography
            variant="text-4"
            color="color-text-link"
          >
            {getPhoneMaskPattern(`${user?.phoneNumber}`)}
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
