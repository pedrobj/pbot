/**
 * Mocking client-server processing
 */
import _profile from './profile.json'

const TIMEOUT = 100

export default {
  getProfile(cb, timeout) {
    setTimeout(() => cb(_profile), timeout || TIMEOUT)
  }
}