import {useLoaderData} from 'react-router-dom';
import {getMenu} from '../../services/apiRestaurant';

function Menu() {
  const data = useLoaderData();
  console.log(data);

  return <h1>Menu</h1>;
}

export async function loader() {
  const data = await getMenu();
  return data;
}

export default Menu;
