import { BrowserRouter, Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import Home from './pages/Home';

export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/*" element={<NavBar />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
}
