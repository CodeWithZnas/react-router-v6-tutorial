import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Login from './pages/login';
import Post from './pages/post';



function App() {
  let isLogged = true

	let data = {
		'message': 'User not logged'
	}
  return (
		<BrowserRouter>
        <Routes>
            <Route path='/' element={ <Layout />}> 
							<Route path='/about' element={ <About />} />
							<Route path='/contact' element={ <Contact />} />
							<Route index element={ <Home /> } />
						</Route>

						<Route path='*' element={ <h1>404 Page not found</h1>}/>
           
        </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //     <Navbar />
    //     <Routes>
    //         <Route path='/' element={ <Home />} />
    //         <Route path='/about' element={ <About />} />
    //         <Route path='/contact' element={ <Contact />} />
    //         <Route path='/login' element={ <Login />} />

		// 				{/* Conditional Route */}
    //         <Route path='/dashboard' element={ isLogged ? <Dashboard /> : <Navigate to='/login' replace state={data} /> } />

		// 				{/* Dyanamic Route */}
    //         <Route path='/post/:category/:slug' element={ <Post />} />

		// 				{/* Catch all Route */}
		// 				<Route path='*' element={ <h1>404 Page not found</h1>}/>
    //     </Routes>
    // </BrowserRouter>
  );
}

export default App;
