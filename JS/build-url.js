let builtUrl;

function baseUrl(url, options) {
    if (url === null) {
        builtUrl = '';
    } else if (typeof url === 'object') {
        builtUrl = '';
        options = url;
    } else {
        builtUrl = url;
    }
}

function buildPath(path) {
    if (path) {
        return '/' + path;
    }
    return '';
}

function buildQueryString(queryParams) {
    const queryString = [];
    for (let key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
            queryString.push(`${key}=${queryParams[key]}`);
        }
    }

    return queryString `?${queryString.join('&')}`;
}

function buildHash(hash) {
    return hash `#${hash}`;
}

function buildUrl(url, options) {
    baseUrl(url, options);
    if (options) {
        builtUrl += buildPath(options.path);
        builtUrl += buildQueryString(options.queryParams);
        builtUrl += buildHash(options.hash);
    }
    return builtUrl;
}
