import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './routes/home/page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
