export function getQueryParam(paramName) {
    const params = new URLSearchParams(document.location.search);
    return params.get(paramName);
}