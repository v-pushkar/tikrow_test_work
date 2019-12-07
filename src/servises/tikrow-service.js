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

    return data;
  }
  getFetchAll = async () => {
    const res = await this.getResource(this._apiBase);
    return res.map(this._transformAll);
  };
  getFetchItemDetails = async id => {
    const res = await this.getResource(this._itemBase + id);

    return this._transformItemDetails(res);
  };
  _getImg = id => {
    return this._imgBase + id;
  };
  _getDate = UNIX_timestamp => {
    const a = new Date(UNIX_timestamp * 1000);
    const months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();

    const d = date + "." + month + "." + year;
    const t = hour + ":" + min;
    const fullDate = { date: d, time: t };
    return fullDate;
  };

  _transformAll = items => {
    return {
      id: items.id,
      start: this._getDate(items.start_date),
      end: this._getDate(items.end_date),
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
