import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]  ">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-screen">
        <main className=" mx-auto md:max-w-4xl">
          <Outlet />{" "}
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
