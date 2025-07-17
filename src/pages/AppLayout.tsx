import { Outlet } from 'react-router';
import StoreContextProvider from '../stores/StoreContextProvider';
import { observer } from 'mobx-react-lite';
import NavBar from '../components/NavBar';
const AppLayout: React.FC = () => {
  return (
    <StoreContextProvider>
      <NavBar />
      <Outlet />
    </StoreContextProvider>
  );
};

export default observer(AppLayout);
