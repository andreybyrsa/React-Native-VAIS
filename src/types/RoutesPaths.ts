import router from '../router/router'

const RoutesPaths = [...router] as const

export type RoutesPathsType = (typeof RoutesPaths)[number]['path']

const a: RoutesPathsType = ''
