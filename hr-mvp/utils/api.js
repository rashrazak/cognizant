import axios from "axios";
import ls from 'local-storage';
import queryString from 'query-string'

const API_URL = process.env.backendApi;

//login-session
export default{
  postUrl: function(endPoint, params, validate = false) {

    let val = validate ?'validateStatus':'test'
    return new Promise((resolve, reject) => {
      return axios({
        method:'post',
        url:`${API_URL}${endPoint}`,
        data:queryString.stringify(params),
        [val]: function () {
          return true
        }
      }).then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error.response);
      });
    });
  },
  postFormData: function(endPoint, params, validate = false) {
    let val = validate ?'validateStatus':'test'
    return new Promise((resolve, reject) => {
      return axios({
        method:'post',
        url:`${API_URL}${endPoint}`,
        data:params,
        [val]: function () {
          return true
        }
      }).then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error.response);
      });
    });
  },
  postRaw: function(endPoint, params, validate = false){
    let val = validate ?'validateStatus':'test'
    return new Promise((resolve, reject) => {
      return axios({
        method:'post',
        url:`${API_URL}${endPoint}`,
        data:params,
        [val]: function () {
          return true
        }
      }).then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error.response);
      });
    });
  },
  get: function(endPoint, validate = false) {
    let val = validate ?'validateStatus':'test'
    return new Promise((resolve, reject) => {
      const language = ls('language')? ls.get('language') : 'en'
      return axios({
        method:'get',
        url:`${API_URL}${endPoint}`,
        [val]: function () {
          return true
        }
      }).then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error.response);
      });
    });
  },
  delete: function(endPoint, params, validate = false) {
    let val = validate ?'validateStatus':'test'
    return new Promise((resolve, reject) => {
      return axios
        .delete(`${API_URL}${endPoint}`,{
          data:params,
        }) 
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error.response);
        });
      });
  },
  patchRaw: function(endPoint, params, validate = false){
    let val = validate ?'validateStatus':'test'
    return new Promise((resolve, reject) => {
      return axios({
        method:'patch',
        url:`${API_URL}${endPoint}`,
        data:params,
        [val]: function () {
          return true
        }
      }).then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error.response);
      });
    });
  },
  put: function(endPoint, params, validate = false) {
    let val = validate ?'validateStatus':'test'// 
    return new Promise((resolve, reject) => {
        return axios({
            method:'put',
            url:`${API_URL}${endPoint}`,
            data:params,
            [val]: function () {
              return true
            }
          }).then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error.response);
          });
        });
  },
  
};
