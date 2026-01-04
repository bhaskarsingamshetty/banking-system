import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Indexpage from './components/Indexpage';
import LoginPage from './components/Loginpage';
import Loan from './components/Loan';  // Import Loan component
import Pasbook from './components/Pasbook';
import Cards from './components/cards';
import Insurence from './components/Insurence';
import Invest from './components/Invest'
import History from './components/History'
import Upi from './components/Upi';
import Billpayments from './components/Billpayments';
import Signup from './components/Signup';
import HeroSection from './components/HeroSection';
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,   
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/signup", element: <Signup /> },
      { path: "/index", element: <Indexpage /> },
      { path: "/loan", element: <Loan /> },
      { path: "/passbook", element: <Pasbook /> },
      { path: "/cards", element: <Cards /> },
      { path: "/insurence", element: <Insurence /> },
      { path: "/invest", element: <Invest /> },
      { path: "/history", element: <History /> },
      { path: "/upi", element: <Upi /> },
      { path: "/billpayments", element: <Billpayments /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
