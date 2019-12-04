export default class TicrowService {
  _apiBase = "https://apidev.tikrow.com/commission-open/fetch-all";
  _itemBase = "https://apidev.tikrow.com/commission-open/fetch/";
  _imgBase = "https://apidev.tikrow.com/commission-open/image/";

  async getResource(url) {
    const res = await fetch(`${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch: ${url},
        resived ${res.status}`);
    }
    const data = await res.json();
    console.log("data", data);
    return data;
  }
  getFetchAll = async () => {
    const res = await this.getResource(this._apiBase);
    return res.map(this._transformAll);
  };
  getFetchItemDetails = async id => {
    const res = await this.getResource(this._itemBase + id);
    console.log("get item", res);
    return this._transformItemDetails(res);
  };
  _getImg = id => {
    return this._imgBase + id;
  };
  _getDate = value => {
    const date = new Date(value);
    return date
      .toLocaleDateString()
      .split("/")
      .join(".");
  };
  _transformAll = items => {
    return {
      id: items.id,
      start: items.start_data,
      end: items.end_date,
      time: items.time,
      position: items.position,
      customer: items.customer,
      rate: items.rate_total
    };
  };
  _transformItemDetails = item => {
    return {
      img: this._getImg(item.id),
      id: item.id,
      availability: item.availability_status,
      start: this._getDate(item.start_date),
      end: this._getDate(item.end_date),
      time: item.time,
      position: item.position,
      customer: item.customer,
      rate: item.rate_total,
      rateHouer: item.rate_hour,
      adress: item.address,
      requirements: item.requirements,
      description: item.description
    };
  };
}
