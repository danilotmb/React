import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
import useFetch from './hooks/useFetch'

function Index() { return <h1> Index</h1> }
function Blog() { return <h1> Blog</h1> }
function Home() { return <h1> Home</h1> }
function ErrorPage() { return <h1> 404</h1> }
function App() {
  const [counter, setCounter] = useLocalStorage("counter", 0);

  const {data, loading} = useFetch("https://world.openfoodfacts.org/api/v2/product/737628064502.json");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>

      <button onClick={() => { setCounter(counter + 1) }}>{counter} </button>
      {loading ? <h1>In attesa dei dati</h1> : JSON.stringify(data) }

      <nav>
        <Link to={""}>Index</Link>
        <Link to={"blog"}>Blog</Link>
        <Link to={"home"}>Home</Link>
      </nav>

    </BrowserRouter>
  )
}

export default App
