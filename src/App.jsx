import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import AddNewCardPage from "./pages/AddNewCardPage";
import Root from "./components/Root";
import CardsPage from "./pages/CardsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          path="/cards"
          element={ <CardsPage/> }
        />
        <Route path="/newcard" element={<AddNewCardPage />} />
      </Route>
    )
  );
  return (
    <>
    
      <RouterProvider router={router} />
    </>
  );
}

export default App;
