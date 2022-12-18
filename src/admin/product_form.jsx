import React, { useState } from "react";
import "./product_form.css";
import axios from "axios"
//import AdminIndex from "./AdminIndex"

const initialData = {
  for_whom: "",
  category: "",
  title: "",
  type: "",
  price: "",
  offer: "",
  size: "",
  image_1: "",
  image_2: "",
  image_3: "",
  image_4: "",
  tag: "",
  color: "",
  sleeve: "",
  zip_structure: "",
  materials: "",
  print: "",
};

const ProductDetails = () => {
  const [formData, setFormData] = useState(initialData);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const {
    for_whom,
    category,
    title,
    type,
    price,
    offer,
    size,
    image_1,
    image_2,
    image_3,
    image_4,
    tag,
    color,
    sleeve,
    zip_structure,
    materials,
    print,
  } = formData;

  const handleSubmit = async(e) => {
    e.preventDefault();
    const request={
      for_whom,
      category,
      title,
      type,
      price,
      offer,
      size,
      image_1,
      image_2,
      image_3,
      image_4,
      tag,
      color,
      sleeve,
      zip_structure,
      materials,
      print,
    };
    const res=await  axios.post(`https://mirsat-vercel-database.vercel.app/yooxData`,request)
    setData([...data,res])
    alert("Product Added Succesfully")
   // window.location.reload()
  }
  // console.log(data);
  return (
    <div >
      {/* <div>
        <AdminIndex />
      </div> */}
      <h2 className="prod-form-header">Add products</h2>
      <hr />
      <div className='product_details'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            1. For whom :
            <select name="for_whom" value={for_whom} onChange={handleChange}>
              <option value="men">MEN</option>
              <option value="women">WOMEN</option>
              <option value="kids">KIDS</option>
            </select>
          </label>

          <label htmlFor="">
            2. Shop by Category :
            <select name="category" value={category} onChange={handleChange}>
              <option value="accessories">ACCESSORIES</option>
              <option value="clothing">CLOTHING</option>
              <option value="shoes">SHOES</option>
            </select>
          </label>

          <label htmlFor="">
            3. Product Title :
            <input type="text" placeholder='Title' name='title' value={title} onChange={handleChange} />
          </label>

          <label htmlFor="">
            4. Product Type :
            <input type="text" placeholder='Type/category' name='type' value={type} onChange={handleChange} />
          </label>

          <label htmlFor="">
            5. Product Price :
            <input type="number" placeholder='Price' name='price' value={price} onChange={handleChange} />
          </label>

          <label htmlFor="">
            6. Offer Percentage :
            <input type="number" placeholder='Off %' name='offer' value={offer} onChange={handleChange} />
          </label>

          <label htmlFor="">
            7. Size :
            <input type="number" placeholder='Size' name='size' value={size} onChange={handleChange} />
          </label>

          <label htmlFor="">
            8. Product Image-1 :
            <input type="url" placeholder='image-1' name='image_1' value={image_1} onChange={handleChange} />
          </label>

          <label htmlFor="">
            9. Product Image-2 :
            <input type="url" placeholder='image-2' name='image_2' value={image_2} onChange={handleChange} />
          </label>

          <label htmlFor="">
            10. Product Image-3 :
            <input type="url" placeholder='image-3' name='image_3' value={image_3} onChange={handleChange} />
          </label>

          <label htmlFor="">
            11. Product Image-4 :
            <input type="url" placeholder='image-4' name='image_4' value={image_4} onChange={handleChange} />
          </label>

          <label htmlFor="">
            12. Product tag :
            <input type="url" placeholder='image tag' name='tag' value={tag} onChange={handleChange} />
          </label>

          <label htmlFor="">
            13. Product Color :
            <input type="text" placeholder='Color name' name='color' value={color} onChange={handleChange} />
          </label>

          <label htmlFor="">
            14. Sleeve Style :
            <select name="sleeve" value={sleeve} onChange={handleChange}>
              <option value="3/4_sleeve">3/4 sleeve</option>
              <option value="long_sleeve">Long sleeve</option>
              <option value="short_sleeve">Short sleeve</option>
              <option value="sleeveless">Sleeveless</option>
            </select>
          </label>

          <label htmlFor="">
            15. Zip Structure :
            <select name="zip_structure" value={zip_structure} onChange={handleChange}>
              <option value="no_zip">No zip</option>
              <option value="zip">Zip</option>
            </select>
          </label>

          <label htmlFor="">
            16. Materials :
            <select name="materials" value={materials} onChange={handleChange}>
              <option value="cashmere">Cashmere</option>
              <option value="cotton">Cotton</option>
              <option value="crystals">Crystals</option>
              <option value="gem">Gems</option>
              <option value="leather">Leather</option>
              <option value="linen">Linen</option>
              <option value="low_impact_materials">Low-Impact Meterials</option>
              <option value="metals">Metals</option>
              <option value="organic_materials">Organic Materials</option>
              <option value="plastic">Plastic</option>
              <option value="recycled_materials">Recycled Materials</option>
              <option value="silk">Silk</option>
              <option value="silver">Silver</option>
              <option value="wool">Wool</option>
            </select>
          </label>

          <label htmlFor="">
            17. Print :
            <select name="print" value={print} onChange={handleChange}>
              <option value="animal_print">Animal Print</option>
              <option value="camouflage">Camouflage</option>
              <option value="checks">Checks</option>
              <option value="floral">Floral</option>
              <option value="one_color">One Color</option>
              <option value="other_pattarns">Other Pattarns</option>
              <option value="pinstripe">Pinstripe</option>
              <option value="polka_dot">Polka Dot</option>
              <option value="stripes">Stripes</option>
            </select>
          </label>

          <input type="submit" />
        </form>
      </div>
      <hr />
    </div>
  )
}

export default ProductDetails;