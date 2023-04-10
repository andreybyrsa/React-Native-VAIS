import PageType from './PageType'

interface RouteType {
  id: number
  path: string
  component: ({ navigation }: PageType) => JSX.Element
}

export default RouteType
