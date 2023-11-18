import React from 'react'

function Footer() {
    const footerYear=new Date().getFullYear()
    // alert(footerYear)
  return (
    <footer className='footer footer-center bg-gray-700 p-8 text-primary-content'>
        <p>Copyright &copy; {footerYear} All right reserved</p>
    </footer>
  )
}

export default Footer
