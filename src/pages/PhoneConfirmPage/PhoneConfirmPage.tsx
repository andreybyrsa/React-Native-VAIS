import Button from '../../components/Buttons/Button'
import NumberField from '../../components/Input/NumberField'
import UserLoader from '../../components/Loaders/UserLoader'
import Typography from '../../components/Typography'
import { User } from '../../domain/User'
import useAuth from '../../hooks/useAuth'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import PageLayout from '../../layouts/PageLayout'
import { setUser, setVerifyCode } from '../../store/reducers/user/UserReducer'
import UserSelector from '../../store/reducers/user/UserSelector'
import getCurrentTimer from '../../utils/getCurrentTimer'
import getPhoneMaskPattern from '../../utils/getPhoneMaskPattern'
import PhoneConfirmPageStyles from './PhoneConfirmPage.styles'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { TouchableHighlight } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

let defaultTime = 240

function PhoneConfirmPage() {
  const dispatch = useDispatch()

  const [time, setTime] = useState<number>(defaultTime)

  const [code, setCode] = useState<string>('')
  const [errorValue, setErrorValue] = useState<string>('')

  const user = useSelector(UserSelector()) as User
  const isAuth = useAuth()

  const buttonDisabled = !!code && errorValue === 'undefined'

  useEffect(() => {
    if (!isAuth) {
      setTimeout(() => {
        setTime((prevState) => (prevState > 0 ? prevState - 1 : 0))
      }, 1000)
    }
  }, [time, isAuth])

  const onHandlerSubmit = useCallback(() => {
    dispatch(setVerifyCode(code))
  }, [code])

  const resendCode = () => {
    setTime(defaultTime)
    dispatch(setUser(user))
  }

  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-1">Проверочный код</Typography>} />
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer>
        <Button
          onPress={onHandlerSubmit}
          disabled={!buttonDisabled}
        >
          Продолжить
        </Button>
      </Footer>
    )
  }, [errorValue, onHandlerSubmit])

  if (isAuth) {
    return <UserLoader />
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
        setValue={setCode}
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
