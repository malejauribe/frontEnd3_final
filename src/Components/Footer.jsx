import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="franja-roja container-block">
      <p className="texto">Odonto House</p>
    </div>

    <div className="icono-central container-block">
      <p>Powered by</p>
      <img src="/images/DH.png" alt='DH-logo' />
    </div>

    <div className='iconos-redes-sociales'>
        <img src="/images/ico-facebook.png" alt="Facebook" />
        <img src="/images/ico-instagram.png" alt="Instagram" />
        <img src="/images/ico-whatsapp.png" alt="Whatsapp" />
        <img src="/images/ico-tiktok.png" alt="TikTok" />
      </div>
    </footer>
  )
}

export default Footer
