import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {createProduct} from "../../firebase/firebaseFunction";
import {useDispatch} from "react-redux";



const AddProduct = () => {

    const dispatch = useDispatch();
    const [progress, setProgress ] = useState(0);
    const {register, handleSubmit, reset} = useForm();

    const addProductHandler = (data) => {
        createProduct(data.image[0], setProgress,data, dispatch  )
    }
    return (
        <>
        <form onSubmit={handleSubmit(addProductHandler)}>
           title <input type="text" {...register("title")}/>
            <br/>
           color <input type="text" {...register("color")}/>
            <br/>
           price <input type="number" {...register("price")}/>
            <br/>
            year<input type="number" {...register("year")}/>
            <br/>

            state <input type="text" {...register("state")}/>
            <br/>
           ssd <input type="number" {...register("ssd")}/>
            <br/>
           ram <input type="number" {...register("ram")}/>
            <br/>
          image  <input type="file" {...register("image")}/>
            <br/>
            <button type='submit'>add</button>

        </form>
            {progress}
            </>
    );
};

export default AddProduct;