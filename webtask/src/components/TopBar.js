import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import '../styles/TopBar.css';


export default () => {

    return (
        <div className={'topbar-container'}>
            <div style={{ margin: '24px 24px 16px' }}>
                <MaterialIcon icon={'search'} color={'white'} />
            </div>
            <div id="paralelograma">
                <div className={'topbar-icon'}>
                    <MaterialIcon icon={'where_to_vote'} color={'white'} />
                </div>
            </div>
            <div id="paralelograma">
                <div className={'topbar-icon'}>
                    <MaterialIcon icon={'call'} color={'white'} />
                </div>
            </div>
            <div id="paralelograma">
                <div className={'topbar-icon'}>
                    <MaterialIcon icon={'access_time'} color={'white'} />
                </div>
            </div>
        </div>
    );

}