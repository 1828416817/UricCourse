import request from '~/utils/request'
export default {
  getList() {
    return request({
      url: `/educms/banner/getAll`,
      method: 'get'
    })
  }
}
