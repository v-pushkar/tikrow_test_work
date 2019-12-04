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
    // console.log(res);
    const transformData = res.map(this._transformAll);
    console.log("transformData", transformData);
    return transformData;
  };

  _transformAll = item => {
    return {
      id: item.id,
      start: item.start_data,
      end: item.end_date,
      time: item.time,
      position: item.position,
      customer: item.customer,
      rate: item.rate_total
    };
  };
}
