import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import withData from "../HOC/withData";

import TicrowService from "../../servises/tikrow-service";

const getData = new TicrowService();

const ItemListWithData = withData(ItemList, getData.getFetchAll);

const ItemDetailstWithData = withData(ItemDetails, getData.getFetchItemDetails);

export { ItemDetailstWithData, ItemListWithData };
