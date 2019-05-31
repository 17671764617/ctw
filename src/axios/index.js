import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

export default class Axios {

	// jsonp 封装
	static jsonp(options) {
		return new Promise((resolve, reject) => {
			JsonP(options.url, {
				param: 'callback'
			}, function(err, response) {
				if (!response.status || response.status === 'success') {
					resolve(response);
				} else {
					reject(response.message);
				}
			})
		})
	}

	// axios 封装
	static ajax(options) {
		let loading;
		if (options.data && options.data.isShowLoading != false) {
			loading = document.getElementById('ajaxLoading')
			loading.style.display = "block"
		}

		let baseApi = 'https://www.easy-mock.com/mock/5cef54f18858b86e69fdf47d/mockapi'
		return new Promise((resolve, reject) => {
			axios({
				url: options.url,
				method: 'get',
				baseURL: baseApi,
				timeout: 5000,
				params: (options.data && options.data.params) || '',
			}).then((response) => {
				if (options.data && options.data.isShowLoading != false) {
					loading = document.getElementById('ajaxLoading')
					loading.style.display = "none"
				}
				if (response.status === 200){
					let res = response.data
					if (res.code === 0) {
						resolve(res)
					} else {
						Modal.info({
							title: "提示",
							content: res.msg
						})
					}
				} else {
					reject(response.data)
				}
			})
		})
	}
}