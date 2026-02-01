"use client"	
import { useState } from "react";
import "./product.css";

interface IProps {
    listProducts: string[],
    setListProducts: (v:string[]) => void
}

const InputProduct = (props: IProps) => {

    const {listProducts, setListProducts} = props;
    const [title, setTitle] = useState("");

    const handleClick = () => {
        //if empty then won't set listToDo
        if(!title) {
            alert("Please enter product title");
            return;
        }
        setListProducts([...listProducts, title]);
        setTitle(""); // after setListToDo then set input value to empty
    }

    return (
        <div className="input-wrap">
            <label>Add New Item</label>
            <input 
                value={title} // dynamic variable
                type="text"
                name="todo"
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
            <button onClick={() => handleClick()}>Save</button>
        </div>
    );
}

export default InputProduct;