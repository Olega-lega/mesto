export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._headers,
      },
    }).then((res) => this._parseResponse(res));
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._parseResponse);
  }

  deleteCard(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
    }).then(() => {
      this._parseResponse;
    });
  }

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._headers,
      },
    }).then(this._parseResponse);
  }

  setInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.link,
      }),
    }).then(this._parseResponse);
  }

  setAva(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._parseResponse);
  }

  setlike(data) {
    return fetch(`${this._url}/cards/likes/${data._id}`, {
      method: "PUT",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
    }).then(this._parseResponse);
  }

  removeLike(data) {
    return fetch(`${this._url}/cards/likes/${data._id}`, {
      method: "DELETE",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
    }).then(this._parseResponse);
  }
}
