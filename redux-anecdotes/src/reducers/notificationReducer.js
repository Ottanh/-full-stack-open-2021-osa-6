import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notification: ''
}


const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action){
      state.notification = action.payload
    }
  }
})

export const createNotification = (msg, time) => {  
  return async dispatch => {   
    dispatch(setNotification(msg)) 
    setTimeout(() => dispatch(setNotification('')), time)
  }}


export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer