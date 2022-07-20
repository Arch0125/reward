import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Navbar = () => {
    return ( 
        <div className='flex flex-row-reverse w-screen h-fit p-2'>
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;