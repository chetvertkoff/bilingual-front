import compose from 'compose-function'
import { withSocket } from '@/app/HOC/withSocket'
import { withErrorHandler } from '@/app/HOC/withErrorHandler'
// TODO заменить на свой compose

export const withProviders = compose(withErrorHandler, withSocket)
