import Api from '@/services/Api'

export default {
  index (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  post ({ userId, songId }) {
    return Api().post('bookmarks', { userId, songId })
  },
  delete (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
