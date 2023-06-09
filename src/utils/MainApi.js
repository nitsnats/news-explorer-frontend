// class MainApi {
//   constructor({ baseUrl, headers }) {
//     this._baseUrl = baseUrl;
//     this._headers = headers;
//   }

//   // getAppInfo() {
//   //   return Promise.all([this.getInitialCards(), this.getUserInfo()]);
//   // }

//   register(email, password, name) {
//     return fetch(`${this._baseUrl}/signup`, {
//         method: 'POST',
//         headers: {
//           Acccept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password, name }),
//       })
//       .then(checkResponse);
//         //  .then((res) => {
//         //    return res.json();
//         //  });
//         // .then((res) => {
//         //   if (res.status === 201) {
//         //     return res.json();
//         //   } else {
//         //     throw new Error('409 - Unsuccessful registration');
//         //   }
//         // }
//     // );
//   }

//   authorize(email, password) {
//     return fetch(`${this._baseUrl}/signin`, {
//         method: 'POST',
//         headers: {
//           Acccept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       })
//       .then(checkResponse);
//     //     .then((res) => {
//     //       return res.json();
//     //     })
//     //     // .then((res) => res.json())
//     //     .then((data) => {
//     //       if (data.token) {
//     //         localStorage.setItem('token', data.token);
//     //         return data;
//     //         // } else {
//     //         //   return;
//     //       }
//     //     }
//     // );
//   }

//   getUserInfo() {
//     // getUserInfo(token) {
//     return fetch(`${this._baseUrl}/users/me`, {
//         method: 'GET',
//         headers: {
//           Acccept: 'application/json',
//           'Content-Type': 'application/json',
//           // authorization: `Bearer ${token}`,
//           authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       })
//       .then(checkResponse);
//         // .then((res) => {
//         //   return res.ok
//         //     ? res.json()
//         //     : Promise.reject(`${res.status} - ${res.message}`);
//         // })
//         // .then((data) => {
//         //   return data;
//         // })
//         // .catch((err) => console.log(err));
//         // .then((res) => {
//         //     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//         // });
//     //     .then((res) => {
//     //       if (res.ok) {
//     //         return res.json();
//     //       }
//     //     }
//     // );
//   }
//   getArticles() {
//     // getArticles(token) {
//     return fetch(`${this._baseUrl}/articles`, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         // authorization: `Bearer ${token}`,
//         authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     })
//     .then(checkResponse);
//     // .then((res) => {
//     //   if (res.ok) {
//     //     return res.json();
//     //   }
//     // });
//     // // .then((res) => res.json())
//   }

//   addArticle(article) {
//     // const token = localStorage.getItem('token');
//     return fetch(`${this._baseUrl}/articles`, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           // authorization: `Bearer ${token}`,
//           authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify(article),
//       })
//       .then(checkResponse);
//         // .then((res) => {
//         //   if (res.ok) {
//         //     return res.json();
//         //   }
//         // });
//         // .then((res) => res.json())
//         //     .then((data) => {
//         //       return data;
//         //     })
//         // );
//     //     .then((res) => {
//     //       return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//     //     }
//     // );
//   }

//   deleteArticle(articleId, token) {
//     // const token = localStorage.removeItem('token');
//     return fetch(`${this._baseUrl}/articles/${articleId}`, {
//       method: 'DELETE',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${token}`,
//         // authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     })
//     .then(checkResponse);
//     // .then((res) => {
//     //   return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//     // });
//   }
// }

// const checkResponse = (res) =>
//   res.ok ? res.json() : Promise.reject(res.statusText);

// // let node_env = "production";

// // let base_url =
// //   node_env === "production"
// //     ? "https://api.nitsnats.students.nomoredomainssbs.ru"
// //     : "http://localhost:3000";

// const mainApi = new MainApi({
//   baseUrl: 'http://localhost:3000', //localhost
//   // baseUrl: 'http://localhost:8080', //localhost
//   // baseUrl: 'https://api.news.nitsnats.mooo.com', //api back-end
//   // baseUrl: base_url,
//   headers: {
//     // 'Content-Type': 'application/json',
//     // Authorization: `Bearer ${token}`,
//   },
// });

// export default mainApi;

// // .then(checkResponse);

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      })
      .then(checkResponse);
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      .then(checkResponse)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        return data;
      });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(checkResponse);
  }

  getArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(checkResponse);
  }

  addArticle(article) {
    return fetch(`${this._baseUrl}/articles`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(article),
      })
      .then(checkResponse);
  }

  deleteArticle(articleId) {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(checkResponse);
  }
}

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(res.statusText);

const mainApi = new MainApi({
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'https://api.news.nitsnats.mooo.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default mainApi;
