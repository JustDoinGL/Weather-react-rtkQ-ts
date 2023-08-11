import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { weatherActions } from '../store/weather/weatherSlice'
import { langueActions } from '../store/Langue/langueSlice'

const actions = {
  ...weatherActions,
  ...langueActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}