import React from 'react'
import "./Register.css"

export default function
    div() {
    return (
        <div>
            <div className='doted-line'></div>
            <div className='register-1st-con'>
                <h2 className='myoox'>MYOOX</h2>
                <p className='register-text'>REGISTRATION</p>
                <p style={{ fontSize: "14px" }}>Take advantage of a faster checkout and enjoy promotions for registered customers only</p>
                <p style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>Discover all the benefits</p>
            </div>
            <div className='register-2nd-container'>
                <p style={{ marginTop: '50px' }}>REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</p>
                <div className='register-fb-gl'>
                    <button style={{ backgroundColor: '#3d5a98', border: 'none' }}> <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19751.png" alt="" /></button>
                    <button style={{ backgroundColor: 'white', border: '2px solid rgb(224, 221, 221)' }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" /></button>
                </div>
                <div >
                    <p>OR WITH YOUR EMAIL</p>
                    <input type="text" placeholder='FIRST NAME*' />
                    <input type="text" placeholder='LAST NAME*' />
                    <input type="text" placeholder='EMAIL*' />
                    <input type="password" placeholder='PASSWORD*' />
                    <p className='reg-mini-para'>Personalize your shopping experience.</p>

                    <div style={{ display: 'flex', gap: '100px', fontSize: '18px' }}>
                        <div>
                            <input type="checkbox" /><span>Female</span>
                        </div>
                        <div>
                            <input type="checkbox" /><span>Male</span>
                        </div>
                    </div>
                    <p className='reg-mini-para'>If you are over 18 years old, celebrate your birthday with us: We have a surprise for you.</p>
                    <input type="number" placeholder='DATE OF BIRTH' />
                    <p style={{ textAlign: 'left', fontSize: '15px' }}>CELL PHONE</p>
                    <input type="number" placeholder='MOBILE NUMBER' />
                    <p className='reg-mini-para'>By entering your phone number, you agree to be contacted by SMS for marketing and promotional purposes.</p>
                    <p className='reg-mini-para' style={{ backgroundColor: '#f6f6f6', marginTop: '50px' }}>I declare that I have read and accept the MYOOX Terms and Conditions of Use</p>
                    <div style={{ display: 'flex', gap: '20px', backgroundColor: '#f6f6f6' }}>
                        <input type="checkbox" />
                        <p className='reg-mini-para'>I agree to the use of my personal data in order to be updated on new arrivals, informed about exclusive items and contacted as part of targeted marketing initiatives related to services offered by YOOX.
                            By analyzing my personal data, order history and browsing habits, YOOX can improve my shopping experience with suggestions that correspond to my interests.
                            For further information, please consult the Privacy Policy.</p>
                    </div>
                </div>
                <button className='register-button'>REGISTER</button>
            </div>
            <div className='doted-line' style={{ marginTop: '80px' }}></div>
            <div className='register-footer'>
                <p>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/I/526</p>
                <span style={{ color: 'grey' }}>LEGAL AREA   </span><span>/</span><span style={{ color: 'grey' }}> PRIVACY POLICY</span>
            </div>
        </div>
    )
}
