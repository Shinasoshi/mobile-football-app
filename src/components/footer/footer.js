import React from 'react';
import style from './footer.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {CURRENT_YEAR} from "../../config";

const Footer = (props) => (

        <div className={style.footer}>
            <Link to="/" className={style.logo} >
                <img src="/images/fifa-logo.png" alt=""/>
            </Link>
            <div className={style.right}>
                @FIFA {CURRENT_YEAR} All rights reserved.
            </div>
        </div>

)

export default Footer;