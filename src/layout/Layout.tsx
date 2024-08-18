import React from 'react';
import Navbar from './Navbar';
import { HeatMap } from '../components/heatmap';

const Layout: React.FC = () => {
    return (
        <div className='d-flex px-1 flex-column fill'>
           <div className='d-flex flex-row'>
                <Navbar />
           </div>
           <div className='d-flex flex-grow'>
                <HeatMap />
           </div>
        </div>
    );
};

export default Layout;