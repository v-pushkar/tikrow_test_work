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
      position: "!Kasjer[TEST]",
      customer: "LEROY-MERLIN STARONIWA[TEST]",
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
      position: "!Kasjer[TEST]",
      customer: "LEROY-MERLIN STARONIWA[TEST]",
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
      position: "!Kasjer[TEST]",
      customer: "LEROY-MERLIN STARONIWA[TEST]",
      rate_total: 29.7,
      rate_hour: 9.9,
      alert_rate: null,
      express: false
    }
  ];
  getFetchAll = async () => {
    return this._dataFetchAll;
  };
  _getImg = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getFetchItemDetails = {
    img: this._getImg,
    id: "11507[TEST]",
    availability: "item.availability_status[TEST]",
    start: "11.12.2019[TEST]",
    end: "25.12.2019[TEST]",
    time: "11:00[TEST]",
    position: "position[TEST]",
    customer: "consumer[TEST]",
    rate: "20zl[TEST]",
    rateHouer: "20zl[TEST]",
    adress: {},
    requirements: "requirements[TEST]",
    description: "description[TEST]"
  };
}
