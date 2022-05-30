import {useEffect} from "react";
import {db, storage} from "./firebase/firebase";
import {collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";
import {getAllProducts} from "./redux/reducers/products";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Shops from "./pages/Shops/Shops";
import Charity from "./pages/Charity/Charity";
import Layout from "./Layout/Layout";
import Auth from "./pages/Auth/Auth";

function App() {

    const dispatch = useDispatch()

    const products = useSelector((s) => s.products.products)


    useEffect(() => {
        getDocs(collection(db, 'products'))
            .then((res) => dispatch(getAllProducts({arr: res.docs.map(el => ({...el.data(), id:el.id}) )})))
    },[])


  return (
    <div className="App">
        <Routes>

            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='shops' element={<Shops/>}/>
                <Route path='charity' element={<Charity/>}/>
            </Route>


            <Route path='/auth' element={<Auth/>}/>
        </Routes>
    </div>
  );
}

export default App;
