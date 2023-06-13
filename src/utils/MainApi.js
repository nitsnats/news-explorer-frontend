
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
