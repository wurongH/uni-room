// 接口
const baseUrl = 'https://www.jifangyunkong.com/h5do.php'

// 首页列表
const indexdata = JSON.stringify({
  "req_type": "master_list",
  "data": {
    "tel": "13615051022"
  }
})
	

module.exports = {
	baseUrl,
	indexdata,
}
