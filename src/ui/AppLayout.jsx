import {Outlet, useNavigation} from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="layout">
      <Header />

      <main>
        <Outlet />{' '}
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
