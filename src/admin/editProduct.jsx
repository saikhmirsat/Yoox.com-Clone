import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import "./editProduct.css"
import axios from 'axios'
import { Link } from 'react-router-dom'


const initialData = {
    title: "",
    price: "",
    type: "",
    image_1: "",
    image_2: "",
    image_3: "",
    image_4: ""
}
const EditProduct = () => {
    const params = useParams()
    const [formData, setFormData] = useState(initialData)

    const handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const { title, price, type, image_1, image_2, image_3, image_4 } = formData;


    const handleSubmit = (e) => {
        e.preventDefault()

        axios.patch(`https://mirsat-vercel-database.vercel.app/yooxData/${params.product_id}`, {
            title,
            price,
            type,
            image_1,
            image_2,
            image_3,
            image_4,
        })

        alert("updated");


    }
    return (
        <div>
            <hr />
            <div className='edit-prod-cpntainer'>
                <h1>Edit Product</h1>
                <form onSubmit={handleSubmit} className="ediitngForm">
                    <label htmlFor="">
                        Title : <input type="text" placeholder='Enter new title' name='title' value={title} onChange={handleChange} />
                    </label>
                    <label htmlFor="">
                        Price : <input type="number" placeholder='Enter new price' name='price' value={price} onChange={handleChange} />
                    </label>
                    <label htmlFor="">
                        Type : <input type="text" placeholder='Enter the type of product' name='type' value={type} onChange={handleChange} />
                    </label>
                    <label htmlFor="">
                        Image-1 : <input type="url" placeholder='Enter new image link' name='image_1' value={image_1} onChange={handleChange} />
                    </label>
                    <label htmlFor="">
                        Image-2 : <input type="url" placeholder='Enter new image link' name="image_2" value={image_2} onChange={handleChange} />
                    </label>
                    <label htmlFor="">
                        Image-3 : <input type="url" placeholder='Enter new image link' name="image_3" value={image_3} onChange={handleChange} />
                    </label>
                    <label htmlFor="">
                        Image-4 : <input type="url" placeholder='Enter new image link' name="image_4" value={image_4} onChange={handleChange} />
                    </label>
                    <input type="submit" style={{ width: '50%', margin: 'auto', backgroundColor: '#333333', color: 'white', textAlign: 'center', border: 'none' }} />
                </form>
            </div>
            <Link to="/adminIndex" className='edit-form-go-back'>Go Back</Link>
        </div>
    )
}

export default EditProduct;