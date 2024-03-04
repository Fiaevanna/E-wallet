import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <div>
      <h1>E-wallet</h1>

      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
