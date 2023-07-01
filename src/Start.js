import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Start = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('furioos-login') === null) {
            toast.error('Please Login to access this page!');
            navigate('/login')
        }
        const script = document.createElement('script');
        script.src = `${process.env.PUBLIC_URL}/indexBrowserified.js`;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className="main-container">
            <div id="furioos_container"></div>
            <button className="btn btn-primary m-2" id="button_start">Start session</button>
            <button className="btn btn-primary m-2" id="button_stop">Stop session</button>
            <button className="btn btn-primary m-2" id="button_restartStream">Restart stream</button>
            <button className="btn btn-primary m-2" id="button_sendSDKMessage">Send SDK message</button>
            <button className="btn btn-primary m-2" id="button_maximize">Maximize</button>
            <button className="btn btn-primary m-2" id="button_minimize">Minimize</button>
            <button className="btn btn-primary m-2" id="button_setUserActive">Set user active</button>
            <button className="btn btn-primary m-2" id="button_getServerAvailability">Get server availability</button>
            <button className="btn btn-primary m-2" id="button_getServerMetadata">Get server metadata</button>
            <button className="btn btn-primary m-2" id="button_setThumb">Set Thumbnail</button>
            <button className="btn btn-primary m-2" id="button_quality_auto">Quality Auto</button>
            <button className="btn btn-primary m-2" id="button_quality_low">Quality Low</button>
            <button className="btn btn-primary m-2" id="button_quality_medium">Quality Medium</button>
            <button className="btn btn-primary m-2" id="button_quality_high">Quality High</button>
            <div className="slidecontainer">
                <input type="range" min="0" max="100" defaultValue={100} className="slider" id="volume_range" />
            </div>

        </div >

    );
};

export default Start;
