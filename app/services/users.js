export async function uploadUsers(params) {
  console.log('params>>>>.', params);
  try {
    // 注意这里的await语句，其所在的函数必须有async关键字声明
    let response = await fetch('http://192.168.43.186:8080/health/user/login', {//eslint-disable-line
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
      // body: params
    });
    let responseJson = await response.json();
    // console.log(response);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
