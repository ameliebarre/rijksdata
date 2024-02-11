import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./routes/home/page";
import RootLayout from "./routes/root/RootLayout";
import Details from "./routes/detail/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/collection/detail/:objectNumber", element: <Details /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
