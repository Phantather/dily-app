import {useEffect} from "react";
import {db, storage} from "./firebase/firebase";
import {collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from "@firebase/firestore";
import {getAllProducts} from "./redux/reducers/products";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Shops from "./pages/Shops/Shops";
import Charity from "./pages/Charity/Charity";
import Layout from "./Layout/Layout";
import Auth from "./pages/Auth/Auth";
import './app.scss'
import Confirm from "./pages/Auth/Confirm/Confirm";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";


function App() {
  const dispatch = useDispatch();

  const products = useSelector((s) => s.products.products);

  useEffect(() => {
    getDocs(collection(db, 'products'))
        .then((res) => dispatch(getAllProducts({arr: res.docs.map(el => ({...el.data(), id:el.id}))})))
  }, []);

  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
