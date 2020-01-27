export const apiGet = (url) => () => fetch(url).then(v => v.json());
export const apiPut = (url, id, obj) => () => fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: new Headers({'content-type': 'application/json'}),
}).then(
    v => v.json()
).then(r => {
    if (r.error) {
        return Promise.reject(r.validation);
    } else {
        return r;
    };
});
export const apiPost = (url, obj) => () => fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: new Headers({'content-type': 'application/json'}),
}).then(
    v => v.json()
).then(r => {
    if (r.error) {
        return Promise.reject(r.validation);
    } else {
        return r;
    };
});
export const apiDelete = (url, id) => () => fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: new Headers({'content-type': 'application/json'}),
}).then(
    v => v.json()
).then(r => {
    if (r.error) {
        return Promise.reject(r.validation);
    } else {
        return id;
    };
});