const appName = 'longhu'
const dataKey = 'my_data_longhu'

function sign() {
  const dataJson = JSON.parse($persistentStore.read(dataKey))
  const tokenVal = dataJson.token
  const userKeyVal = dataJson.userKey
  const xGaiaApiKeyVal = dataJson.xGaiaApiKey
  const xLongforStoreIdVal = dataJson.xLongforStoreId

  let body = {
    storeId: xLongforStoreIdVal
  }

  let url = {
    url: `https://c2-openapi.longhu.net/riyuehu-core/ryh/sign/submit`,
    headers: {
      token: tokenVal,
      userkey: userKeyVal,
      Referer: 'https://servicewechat.com/wx50282644351869da/86/page-frame.html',
      'X-Gaia-Api-Key': xGaiaApiKeyVal,
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.9(0x17000929) NetType/WIFI Language/zh_CN'
    },
    body: JSON.stringify(body)
  }

  $httpClient.post(url, (error, response, data) => {
    let result = JSON.parse(data)
    let title = `${appName}`
    let subTitle = `结果: 失败`
    let detail = `请把日志中的输出反馈到Github`
    // 成功
    if (result && result.resultCode == 1) {
      subTitle = `结果: 成功`
      detail = `积分: ${result.result.bonus}`
    }
    // 失败
    else if (result && result.resultCode == 0) {
      subTitle = `结果: 失败`
      detail = `${result.resultMsg}`
    }
    $notification.post(title, subTitle, detail)
    console.log(`${appName}, data: ${data}`)
  })

  $done({})
}

sign()
