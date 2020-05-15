//配置基础的axios
import axios from 'axios'
import ipObj from '@/config/baseip'

const service = axios.create({
	baseURL: ipObj.baseip, // api的base_url
	// `withCredentials` 表示跨域请求时是否需要使用凭证
	//withCredentials: true, // 默认的false
	timeout: 8000, // 请求超时时间
	//	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
})

export default service