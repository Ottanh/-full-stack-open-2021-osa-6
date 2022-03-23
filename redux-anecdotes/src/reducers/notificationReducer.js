import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notification: '',
  id: ''
}


const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action){
      const { msg, timeOutId } = action.payload
      console.log(timeOutId)
      state.notification = msg
      state.id = timeOutId
    },
    clearTimeout(state, action){
      this.clearTimeout(state.id)
    }
  }
})

export const createNotification = (msg, time) => {  
  return async (dispatch, getState) => {
    clearTimeout(getState().notifications.id)
    const timeOutId = setTimeout(() => dispatch(setNotification('')), time)
    dispatch(setNotification({msg, timeOutId})) 
  }}


export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer