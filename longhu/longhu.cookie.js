const cookieName = 'longhu'
const tokenKey = 'my_token_longhu'
const tokenVal = $request.headers['token']
const userKey = 'my_userkey_longhu'
const userKeyVal = $request.headers['userKey']

if (tokenVal && userKeyVal) {
  let token = $persistentStore.write(tokenVal, tokenKey)
  let userKey = $persistentStore.write(userKey, userKeyVal)

  if (token && userKey) {
    let msg = `${cookieName}`
    $notification.post(msg, 'token写入成功', '详见日志')
    console.log(msg)
    console.log(tokenVal)
    console.log(userKeyVal)
  }
}

$done({})
