import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

console.log("Logger", logger)

export default applyMiddleware(
    thunk,
    logger,
)