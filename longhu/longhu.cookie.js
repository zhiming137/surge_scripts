const appName = 'longhu'
const dataKey = 'my_data_longhu'
const tokenVal = $request.headers['token']
const userKeyVal = $request.headers['userkey']
const xGaiaApiKeyVal = $request.headers['X-Gaia-Api-Key']
const xLongforStoreIdVal = $request.headers['X-Longfor-StoreId']

if (tokenVal && userKeyVal) {
  let dataJson = JSON.stringify({
    'token' : tokenVal,
    'userKey' : userKeyVal,
    'xGaiaApiKey' : xGaiaApiKeyVal,
    'xLongforStoreId' : xLongforStoreIdVal,
  })
  console.log(dataJson)
  let data = $persistentStore.write(dataJson, dataKey)

  if (data) {
    let msg = `${appName}`
    $notification.post(msg, 'token写入成功', '详见日志')
    console.log(msg)
    console.log(data)
  }
}

$done({})
