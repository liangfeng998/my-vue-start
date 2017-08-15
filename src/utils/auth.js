import storage from '@/utils/storage'

const TokenKey = 'Admin-Token'

export function getToken() {
  return storage.getItem(TokenKey)
}

export function setToken(token) {
  return storage.setItem(TokenKey, token)
}

export function removeToken() {
  return storage.removeItem(TokenKey)
}
