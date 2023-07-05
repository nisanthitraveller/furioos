import React from 'react';
import LotusImage from "./assets/images/natamai_a_hyperreal_lotus_jewelery_with_diamonds_and_pearl_3d_c_461f284f-ff5f-4449-bb4c-815367914787.png";
const Home = () => {
    return (
        <div className="limiter">
            <div className="container-loginhome">
                <div className="wrap-loginhome">
                  
                    <div className='loginhome-more' style={{ backgroundImage: `url(${LotusImage})` }}>
                    <div className='form-index'>
                        <h1><strong>GRTV</strong>erse</h1>
                        <p>Indulge in the epitome of opulence and sophistication with our immersive virtual shopping experience, where every click unveils a world of exquisite craftsmanship and dazzling beauty.</p>
                        <div class="container-loginhome-form-btn mb-3">
                            <a href='/login' class="loginhome-form-btn">
                                Login
                            </a>
                            <a href='/register' class="loginhome-form-btn">
                                Register
                            </a>
                        </div>
                       
                    </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Home;