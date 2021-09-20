import AsyncStorage from '@react-native-community/async-storage'

/**
 * Get Access token.
 */
export const getAccessToken = () => AsyncStorage.getItem('accessToken')

/**
 * Set access token.
 */
export const setAccessToken = (accessToken: string) => AsyncStorage.setItem('accessToken', accessToken)

/**
 * Remove access token.
 */
export const removeAccessToken = () => AsyncStorage.removeItem('accessToken')
