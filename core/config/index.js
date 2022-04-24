import config from "./config.js"

export default {
	// 获取系统全部配置
	all() {
		return config;
	},
	// 获取某一项配置
	get(key, def = undefined) {
		return config[key]
		console.error(`检测到不存在的配置项: ${key}`)
		return def
	}
}