import baseUrl from "./url.js"

export default function Request({ url, method, data, header }) {
	/* 默认设置 */
	if(!method) method = "POST"; 
	if(!header) header = { "Content-Type": "application/x-www-form-urlencoded" };
	
	var promise = new Promise((resolve, reject)=> {
		let _url = baseUrl + url;
		uni.request({
			url: _url,
			method: method,
			data: data,
			header: header,
			success: (res)=> { resolve(res) },
			fail: (error)=> { reject(error) }
		})
	})
}