import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='auteur'>
                   <h1>Developpeur</h1>
                   <p><i class="fa-solid fa-laptop"></i> Salif Moctar Konate</p>
                   <p><i class="fa-solid fa-phone"></i> : +223 78 30 32 08</p>
                   <p><i class="fa-solid fa-envelope"></i> Email: salifmoctarkonate@gmail.com<br/>salifmoctarkonate@yahoo.com</p>
                </div>
              <div className='sociaux'>
                  <h1>Blogs</h1>
                  <p><i class="fa-brands fa-instagram"></i> Instagram</p>
                  <p><i class="fa-brands fa-facebook-f"></i> Facebook</p>
                  <p><i class="fa-brands fa-tiktok"></i> Tiktok</p>
                  <p><i class="fa-brands fa-youtube"></i> Youtube</p>
              </div>
              <div className='service'>
                <h1>Services</h1>
                <p><i class="fa-solid fa-mug-hot"></i> Reception</p>
                <p><i class="fa-solid fa-truck"></i> Livraison</p>
            
              </div>
            </div>
        </>
    );
};

export default Footer;
