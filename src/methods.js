const axios = require("axios");


module.exports = {
  getMemberByName: ({name, token, url}) => {
    return axios.get(url + '/members/' + name, {
      headers: {
        'Authorization': `${token}`
      }
    })
  },
  sendMessage: ({token, url, text, userId}) => {
    const data = JSON.stringify({
      "data": {
        "body": text
      }
    });
    const config = {
      method: 'post',
      url: `${url}/message-threads/${userId}/messages`,
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      data
    };
    return axios(config)
  },
  sendMessageImg: ({token, url, text, userId, price, type}) => {
    const data = JSON.stringify({
      "data": {"type": type, "price": price, "title": text}
    });
    const config = {
      method: 'post',
      url: `${url}/message-threads/${userId}/upload-tokens`,
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      data
    };
    return axios(config)
  },
  sendImg: ({token, uploadUrl, file}) => {
    const config = {
      method: 'post',
      url: uploadUrl,
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
    };
    return axios(config)
  },
  getMemberId: ({id, name, token, url}) => {
    const data = JSON.stringify({
      "data": {
        "partner": {"id": id, "name": name, "type": 'member'}
      }
    });
    const config = {
      method: 'post',
      url: url + '/message-threads',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      data: data
    };
    return axios(config)
  },
};