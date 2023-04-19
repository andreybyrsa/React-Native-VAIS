import Typography from '../components/Typography'

const getCurrentTimer = (time: number) => {
  const minutes: number = Math.floor(time / 60)
  const seconds: number = time - minutes * 60

  const currentMinutes: string = minutes >= 10 ? `${minutes}` : `0${minutes}`
  const currentSeconds: string = seconds >= 10 ? `${seconds}` : `0${seconds}`

  return (
    <Typography
      variant="text-4"
      color="color-text-link"
    >
      {currentMinutes}:{currentSeconds}
    </Typography>
  )
}

export default getCurrentTimer
