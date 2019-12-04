export default class TestTicrowService {
  _dataFetchAll = [
    {
      id: 11506,
      availability_status: "undefined",
      can_rate: false,
      can_cancel: true,
      start_date: 1577635200,
      end_date: 1577646000,
      time: 3,
      position: "!Kasjer",
      customer: "LEROY-MERLIN STARONIWA",
      rate_total: 29.7,
      rate_hour: 9.9,
      alert_rate: null,
      express: false
    },
    {
      id: 11507,
      availability_status: "undefined",
      can_rate: false,
      can_cancel: true,
      start_date: 1577635200,
      end_date: 1577646000,
      time: 3,
      position: "!Kasjer",
      customer: "LEROY-MERLIN STARONIWA",
      rate_total: 29.7,
      rate_hour: 9.9,
      alert_rate: null,
      express: false
    },
    {
      id: 11504,
      availability_status: "undefined",
      can_rate: false,
      can_cancel: true,
      start_date: 1577635200,
      end_date: 1577646000,
      time: 3,
      position: "!Kasjer",
      customer: "LEROY-MERLIN STARONIWA",
      rate_total: 29.7,
      rate_hour: 9.9,
      alert_rate: null,
      express: false
    }
  ];
  getFetchAll = async () => {
    return this._dataFetchAll;
  };
}
