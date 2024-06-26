export default class Url {
  constructor(url) {
    this.url = new URL(url);
    this.url.scheme = this.url.protocol.replace(':', '');
    this.url.queryParams = Object.fromEntries(this.url.searchParams);
  }

  getScheme() {
    return this.url.scheme;
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    return this.url.queryParams;
  }

  getQueryParam(key, defaultValue = null) {
    return this.url.searchParams.get(key) ?? defaultValue;
  }

  toString() {
    return this.url.toString();
  }

  equals(url) {
    return (this.toString() === url.toString());
  }
}
