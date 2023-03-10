const express = require('express')
const serverless = require('serverless-http')
const axios = require("axios");
const cors = require('cors')
const multer = require('multer')
const upload = multer()
const FormData = require('form-data');
const bodyParser = require('body-parser')
const {getMemberByName, getMemberId, sendMessage, sendMessageImg} = require("./methods");
const request = require('request')

const app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        'hello': 'asd'
    })
})

router.get('/me', (req, res) => {
  let token = req.headers.authorization
  const users = []

  request.get({
    url: 'https://api-gateway.modelcenter.jasmin.com/gw/inner/v2/me',
    headers: {
      'Authorization': `${token}`
    }
  }, (error, response, body) => {
    if (error) {
      res.send({error: true, message: error});
    } else {
      res.send(body);
    }
  }); 
});
  
router.get('/test', (req, res) => {
  let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIwMTM4MzU3ZThkNDRkOGM5ZDU5NzIxZWEwOTA5ZDZkZWJhNTEzYzQ3NjlmODEyZTE1YmIxMjY5ZTNjZjUyYmZlZmQ0MGRkYTM5NWYxYzA0In0.eyJhdWQiOiJtc2MtcG9ydGFsIiwianRpIjoiMjAxMzgzNTdlOGQ0NGQ4YzlkNTk3MjFlYTA5MDlkNmRlYmE1MTNjNDc2OWY4MTJlMTViYjEyNjllM2NmNTJiZmVmZDQwZGRhMzk1ZjFjMDQiLCJpYXQiOjE2NzMwOTUwNjksIm5iZiI6MTY3MzA5NTA2OSwiZXhwIjoxNjczMDk4NjY5LCJzdWIiOiIyMTUyMjg4Iiwic2NvcGVzIjpbIioiXX0.NdK4D2oQCBrC1SlEJMW7BQTiHbVLsm2DTUVeM3Q9IQj5t6CWp2R_ExppbIdzXMabkbsQmJkt6r4F8zPR-DkKb7VVJ-c0E2GXZ86db1YvP3ebdA7tj_mgbQ4AOwYnE-jeP2Vuq9jcaG6ng6ROZx2hsw3FAnZhPpWCnEHkO9G97MCzC0nUwsSxKQkUQRUSHQHmStp_Auncuw4jfhJ7UFHPCjv14Jbb6Ospt8txX_CDt43yJ63kmV5H4tFZQhhP29fuXZhXHTEbmNVXJDKisPHKUNbHyEig0EMedp7n33dyBYYrtf0T_3tPLo2sYVccP8OP9XWATmwt1F1GfF4z6QxmeKXFLc_vAWNtRpBMpGn10tXelbCxea8EUV5-dvkWTF-Cu5xVj201ettAut06pVvpiHVbfLogFpYlvyvPwLh-6-sf4j7T8eQG_RQ4aREBJZQTCSo5GIYqFTJ4MWuKHeHRNXSL4pifxRZZjTomevYB1k_PARE51AC_0_DXuDC1WO3oZ-Q7YOD8Lo6b9_RBLUa3Kc1ktQu2r7HORl-4lxknY7D3uUutRWWtykLVCzARHxgJaMa9CB48v9qko5THRw5UDAl3AGOjFDQfM12nzM7W962T-2r5gkba4YkzquNs50oIANSxbm_ROLDfFE2g3Y1krhQKL26htzh77gBXIVMi914'
  request.get({
    url: 'https://api-gateway.modelcenter.jasmin.com/gw/inner/v2/me',
    headers: {
      'Authorization': `${token}`
    }
  }, (error, response, body) => {
    if (error) {
      res.send({error: true, message: error});
    } else {
      res.send(body);
    }
  }); 
});
  
  router.get('/getPayedImages', (req, res) => {
    const token = req.headers.authorization
    const users = []
    const aa = 'https://api-gateway.modelcenter.jasmin.com/v1/me/performers/3453796/message-threads/89144742/messages?features[]=gifts&features[]=show-deleted&features[]=show-seen-status&page[limit]=20&page[cursor]=QUVTLTI1Ni1DQkM6Rt3JP1NpVHerdlhDwFWCijEyb3RDNmtGZlRqNlVacUJ1enkyYTdiMXRnaTdDUGNBSHJqTzhKUEplUzJUM0lTNFU3QTV3bXlwMHBuVnBHQzdkaE5xd0VNSkNtUTFqUWFTU1dRaDkxUmZCTlFrSjJWSnhsTUpWZGRCV3A3TkRXK1lVaDFBQ1ZDTk1pc2ZwZ0F4'
    const ss = 'https://api-gateway.modelcenter.jasmin.com/v1/me/performers/3453796/message-threads/89144742/messages?features[]=gifts&features[]=show-deleted&features[]=show-seen-status&page[limit]=20&page[cursor]=QUVTLTI1Ni1DQkM6sdCn9UxlCXIMT5N671pSymdCQVlMT1h5WHZtU2hDd2FCRlFkNUFLaDkxMDRKaGxNdHRtVWt5ZCttVDJyQWJRV082di9rZ2xrTlc2bW51YWhDVTM1b0JOTnF2WVkzMUNBaTRLbGRueFVVUGNxYmZIdmJZV3Z3UVpIdStsQnNHRE5DY2dmS3lMc2FRUEpZNUp6'
    axios.get('https://api-gateway.modelcenter.jasmin.com/v1/me/performers/3453796/message-threads/89144742/messages?features[]=gifts&features[]=show-deleted&features[]=show-seen-status&page[limit]=100', {
      headers: {
        'Authorization': `${token}`
      }
    }).then(resp => {
      res.send(resp.  data);
    }).catch(err => {
      res.send({error: true, message: err?.response?.data?.error || 'unknown'});
    })
  });
  
  router.get('/messageThreads', (req, res) => {
    const token = req.headers.authorization
    const users = []
    let array = []
    let finalArray = []
    let lastDate = null
    let mediaUnreadMessages = null
  
    axios.get('https://api-gateway.modelcenter.jasmin.com/v1/me/performers/3453796/message-threads', {
      headers: {
        'Authorization': `${token}`
      }
    }).then(resp => {
      if (resp?.data) {
        array = [...array, ...resp.data.data]
        mediaUnreadMessages = resp.data.meta.unreadThreadCount
        lastDate = resp.data.data[resp.data.data.length - 1].lastMessage.createdAt
        cycolApi(lastDate)
      } else {
        console.log("ERR")
        res.send({error: true, message: err?.response?.data?.error || 'unknown'});
      }
      // res.send(resp.data);
    }).catch(err => {
      res.send({error: err, message: err?.response?.data?.error || 'unknown'});
    })
  
    function cycolApi(date){
      console.log('cycle')
      const url = `https://api-gateway.modelcenter.jasmin.com/v1/me/performers/3453796/message-threads?filter%5BparticipantNameLike%5D=&filter%5BolderThan%5D=${date.slice(0,10)}T${date.slice(11,13)}%3A${date.slice(14,16)}%3A${date.slice(17,19)}%2B${date.slice(20,22)}%3A${date.slice(23,25)}`
      axios.get(url, {
        headers: {
          'Authorization': `${token}`
        }
      }).then(resp => {
        if (resp?.data) {
          array = [...array, ...resp.data.data]
          lastDate = resp.data.data[resp.data.data.length - 1].lastMessage.createdAt
          console.log('lenth arr', array.length, lastDate)
          if(lastDate !== '2022-08-18T18:33:59+00:00' && array.length < 5500){
            cycolApi(lastDate)
          }else{
            console.log('READY')
            res.send({array})
          }
        } else {
          res.send({error: true, message: err?.response?.data?.error || 'unknown', array});
        }
      }).catch(err => {
        res.send({error: true, message: err?.response?.data?.error || 'unknown', array});
      })
    }
  
  
  });
  
  router.post('/pricing', (req, res) => {
    const token = req.headers.authorization
    const modelId = req.body.modelId
    const url = `https://api-gateway.modelcenter.jasmin.com/v1/me/performers/${modelId}`
  
    axios.get('https://api-gateway.modelcenter.jasmin.com/gw/inner/v2/performers/3994268/pricing', {
      headers: {
        'Authorization': `${token}`
      }
    }).then(resp => {
      console.log('11')
      res.send(resp.data);
    }).catch(err => {
      console.log('22', err)
  
      res.send({error: true, message: err?.response?.data?.error || 'unknown'});
    })
  });
  
  router.get('/getMembers', (req, res) => {
    const token = req.headers.authorization
    const form = new FormData();
    form.append('orderBy', 'total_spent_amount');
    form.append('csrfToken', 'c9cbfd1caf19c740fefc749fd96d1f0955a9fa76');
  
    axios.post('https://modelcenter.livejasmin.com/ru/statistics/paying-members', form, {
      headers: {
        'Authorization': `${token}`
      }
    }).then(resp => {
      res.send(resp.data);
    }).catch(err => {
      console.log(err)
      res.send({error: true, message: err?.response?.data?.error || 'unknown'});
    })
  });
  
  router.post('/sendMessage', upload.array(), (req, res) => {
    console.log(req.body)
  
    const token = req.headers.authorization
    const text = req.body.message
    const name = req.body.name
    const typeMessage = req.body.type || 'message'
    const modelId = req.body.modelId
    const price = req.body.price
    const img = req.body.modelId
  
    if (!name) return res.send({error: true, message: 'name is required'});
    if (!text) return res.send({error: true, message: 'message is required'});
    if (!modelId) return res.send({error: true, message: 'modelId is required'});
    if (typeMessage === 'image' && !toString(price)) return res.send({error: true, message: 'price is required'});
  
    const url = `https://api-gateway.modelcenter.jasmin.com/v1/me/performers/${modelId}`
  
    return res.send({error: true, message: ''});
  
    getMemberByName({name, token, url}).then(resp => {
      getMemberId({
        id: resp.data.data.id || '',
        name: resp.data.data.nick || '',
        text, token, url
      }).then(resp => {
        if (typeMessage === 'image') {
          sendMessageImg({userId: resp.data.data.id || '', text, url, price, type: typeMessage, token}).then(resp => {
            res.send(resp.data);
          }).catch(err => {
            console.log(err)
            res.send({error: true, message: err?.response?.data?.error || 'unknown', step: 'sendMessageImg'});
          })
        } else {
          console.log('222')
          sendMessage({userId: resp.data.data.id || '', text, url, token}).then(resp => {
            res.send(resp.data);
          }).catch(err => {
            res.send({error: true, message: err?.response?.data?.error || 'unknown', step: 'sendMessage'});
          })
        }
      }).catch(err => {
        res.send({error: true, message: err?.response?.data?.error || 'unknown', step: 'getMemberId'});
      })
    }).catch(err => {
      res.send({error: true, message: err?.response?.data?.error || 'unknown', step: 'getMemberByName'});
    })
  });

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)