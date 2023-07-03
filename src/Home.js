import React from 'react';
import LotusImage from "./assets/images/natamai_a_hyperreal_lotus_jewelery_with_diamonds_and_pearl_3d_c_461f284f-ff5f-4449-bb4c-815367914787.png";
const Home = () => {
    return (
        <div className="limiter">
            <div className="container-loginhome">
                <div className="wrap-loginhome">
                    <div className='form-index'>
                        <div class="container-loginhome-form-btn mb-3">
                            <a href='/login' class="loginhome-form-btn">
                                Login
                            </a>
                        </div>
                        <div class="container-loginhome-form-btn">
                            <a href='/register' class="loginhome-form-btn">
                                Register
                            </a>
                        </div>
                    </div>
                    <div className='loginhome-more' style={{ backgroundImage: `url(${LotusImage})` }}>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Home;