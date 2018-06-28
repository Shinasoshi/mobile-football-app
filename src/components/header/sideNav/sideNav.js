import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNavItems'

const SideNavigation = (props) => (
    <div>
        <SideNav
            navStyle={{
                background: '#242424',
                maxWidth: '220px',
            }}
            showNav={props.showNav}
            onHideNav={props.onHideNav}

        >
            <SideNavItems>

            </SideNavItems>
        </SideNav>
    </div>
)

export default SideNavigation;