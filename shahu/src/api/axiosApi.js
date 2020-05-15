import request from '@/config/request'

//获取所有时间
// export function getDate() {
//   return request({
//     method: 'get',
//     url: 'Pine/findTime',
//     //data: data
//   })
// }

// export function getData(date,cameraNum) {
//   return request({
//     method: 'get',
//     url: 'Bird/findBirdBasic',
//     params:{date:date,caremaNum:cameraNum}
//   })
// }

//历史页面数据获取
export function getData(data) {
  return request({
    method: 'post',
    headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		},
    url: '/Bird/findBirdBasic',
    params: data
  })
}

//登录接口
export function isLogin(data) {
  return request({
    method: 'post',
    headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		},
    url: '/user/login',
    params: data
  })
}

//鸟类详情接口
export function birdsInfo(data) {
  return request({
    method: 'post',
    headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		},
    url: '/Biology/BirdsInfo',
    params: data
  })
}

//报表接口
export function getReport(data) {
  return request({
    method: 'post',
    headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		},
    url: '/Bird/findBirdBasicByMonth',
    params: data
  })
}

//报表页面获取当月出现的鸟的种类
export function getReportBird(data) {
  return request({
    method: 'post',
    headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		},
    url: '/Bird/findBirdNameByMonth',
    params: data
  })
}

