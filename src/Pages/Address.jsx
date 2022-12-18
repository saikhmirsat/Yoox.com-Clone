import React from 'react'
import "./Address.css"

const Address = () => {
    return (
        <div style={{ alignItems: "center", margin: "auto" }}>
            <div style={{ fontSize: "20px" }}>Address</div>
            <div className='address'>
                <form action="">
                    <label htmlFor="">
                        Name : <input type="text" placeholder='Name' required />
                    </label>
                    <label htmlFor="">
                        Mobile No : <input type="number" placeholder='Mobile' required />
                    </label>
                    <label htmlFor="">
                        Address : <textarea name="" id="" cols="30" rows="5" placeholder='Enter your address ...' required></textarea>
                    </label>
                    <label htmlFor="">
                        Payment Through Cash on Delevery : <input type="checkbox" required />
                    </label>

                    <input type="submit" value="Place Order" onClick={() => alert("Congratulations! Odrer Successfull !")} />
                </form>
            </div>
        </div>

    )
}

export default Address