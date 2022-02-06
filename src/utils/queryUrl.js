export function urlQueryToObject(defaultValues = {}) {
    try {
        var search = window.location.search.substring(1);
        const obj = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
        return {...defaultValues, ...obj}
    } catch (err) {
        return defaultValues
    }
}

export const objectToUrlQuery = function (obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return  str.join("&");
}

export const urlQuery = () => {
    var search = window.location.search.substring(1);
    return !search
      ? {}
      : JSON.parse(
          '{"' +
            decodeURI(search.replace(/&/g, '","').replace(/=/g, '":"')) +
            '"}'
        );
  };