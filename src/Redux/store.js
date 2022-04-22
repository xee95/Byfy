import { configureStore } from '@reduxjs/toolkit'
import { devToolsEnhancer } from 'redux-devtools-extension'
import authReducer from './auth/authReducer'
 

 
const store = configureStore(
    { reducer:{ auth:authReducer }, 
    devTools:[ devToolsEnhancer({ realtime: true }) ], })
 
export default store