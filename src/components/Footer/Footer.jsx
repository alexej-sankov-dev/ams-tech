import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Whatsapp from '../../assets/media/whatsapp-white1.svg'


const Footer = () => {

  let navigate = useNavigate();

  const handleClickServ = () => {
    navigate('/')
    document.getElementById('services').scrollIntoView()
  }

  const handleClickProj = () => {
      navigate('/')
      document.getElementById('projects').scrollIntoView()
  }

  const handleClickAbout = () => {
      navigate('/')
      document.getElementById('about').scrollIntoView()
  }


  return (
    <footer className='footer'>
      <div className='footer-main'>
        <div className='footer-main-logo'>
           <div className='footer-logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 750 750">
              <defs>
                <clipPath id="a">
                  <path d="M56 25.004h639V722H56Zm0 0"/>
                </clipPath>
              </defs>
              <g>
                  <path fill="#ffffff" 
                  d="M694.559 562.434a173.894 173.894 0 0 0-12.434-60.778c-3.852-10.066-7.332-18.148-15.164-35.547v-.996l-2.488-5.093a7954.732 7954.732 0 0 0-151.04-315.45l-4.722-9.32c-8.578-17.027-12.434-24.86-17.777-34.305-8.063-15.554-18.336-29.476-30.832-41.761a121.82 121.82 0 0 0-8.079-7.141 122.988 122.988 0 0 0-27.543-16.816 123.5 123.5 0 0 0-10.046-3.922 122.917 122.917 0 0 0-31.652-6.3l-12.434-.001c-3.727.183-7.442.535-11.137 1.058a122.424 122.424 0 0 0-21.758 5.122 121.87 121.87 0 0 0-10.437 4.023 122.67 122.67 0 0 0-36.848 24.973 165.079 165.079 0 0 0-29.59 40.52c-5.219 9.445-9.445 17.773-17.652 33.929l-.992 1.863-3.73 7.332a7791.813 7791.813 0 0 0-102.93 211.293c-24.864 52.453-41.77 90.11-58.43 127.77a216.5 216.5 0 0 0-18.645 59.41 157.555 157.555 0 0 0-1.523 27.031 157.872 157.872 0 0 0 3.117 26.89c.906 4.43 1.996 8.813 3.277 13.145a159.403 159.403 0 0 0 4.39 12.82 157.76 157.76 0 0 0 11.996 24.27 152.151 152.151 0 0 0 5.638 8.777 154.872 154.872 0 0 0 6.222 8.375 152.794 152.794 0 0 0 14.082 15.379 152.441 152.441 0 0 0 16.043 13.329 152.266 152.266 0 0 0 8.664 5.812 151.281 151.281 0 0 0 9.04 5.207 151.643 151.643 0 0 0 9.37 4.586c3.18 1.418 6.4 2.73 9.665 3.934 3.265 1.199 6.57 2.289 9.91 3.265a152.333 152.333 0 0 0 20.371 4.473c3.441.515 6.898.91 10.367 1.187 3.469.282 6.942.442 10.422.48 3.48.044 6.957-.034 10.43-.23a187.827 187.827 0 0 0 89.508-30.203h.62a16.868 16.868 0 0 0 2.97-2.41 16.856 16.856 0 0 0 4.445-8.352 17.16 17.16 0 0 0 .34-3.808 17.006 17.006 0 0 0-1.121-5.613 16.69 16.69 0 0 0-4.274-6.29 222.34 222.34 0 0 1-21.504-23.863 17.187 17.187 0 0 0-4.61-4.133 17.139 17.139 0 0 0-17.765-.093 126.514 126.514 0 0 1-37.297 15.535 86.234 86.234 0 0 1-15.023 2.191 86.788 86.788 0 0 1-15.176-.449 86.858 86.858 0 0 1-14.867-3.082 86.798 86.798 0 0 1-14.106-5.621 84.544 84.544 0 0 1-7.683-4.52 85.458 85.458 0 0 1-7.176-5.289 86.373 86.373 0 0 1-6.59-6.004 86.335 86.335 0 0 1-11.144-13.886 86.146 86.146 0 0 1-8.043-15.887 85.852 85.852 0 0 1-2.75-8.48 91.44 91.44 0 0 1-2.879-26.434 91.165 91.165 0 0 1 4.871-26.14 371.812 371.812 0 0 1 14.914-36.415l.625-1.492 3.355-7.582c46.825-103.988 96.551-207.562 149.176-310.723l3.977-7.957c9.324-18.52 13.675-26.968 19.144-37.285a86.967 86.967 0 0 1 21.754-28.215 53.41 53.41 0 0 1 24.695-10.617 52.967 52.967 0 0 1 4.5-.488 53.072 53.072 0 0 1 9.047.168c1.504.156 2.996.375 4.48.656a54.64 54.64 0 0 1 4.407 1.035c1.457.41 2.89.88 4.305 1.406a53.502 53.502 0 0 1 8.172 3.88 54.892 54.892 0 0 1 3.812 2.445c1.234.867 2.43 1.789 3.59 2.758a102.761 102.761 0 0 1 13.367 15.246 102.503 102.503 0 0 1 10.125 17.566c12.434 23.617 23.125 44.992 42.89 84.64l3.481 7.087v.746c44.172 89.074 86.399 178.48 126.676 268.215l1.988 4.601.746 1.738a239.7 239.7 0 0 1 13.301 34.555 90.724 90.724 0 0 1 3.332 24.36 90.479 90.479 0 0 1-3.332 24.359 85.232 85.232 0 0 1-2.453 7.41 85.374 85.374 0 0 1-3.125 7.152 84.112 84.112 0 0 1-3.766 6.832 85.15 85.15 0 0 1-9.332 12.492 85.538 85.538 0 0 1-5.488 5.551 84.206 84.206 0 0 1-5.973 5.02 82.923 82.923 0 0 1-6.406 4.453 84.84 84.84 0 0 1-28.871 11.445c-2.555.5-5.129.883-7.719 1.149a86.656 86.656 0 0 1-7.793.433 85.24 85.24 0 0 1-15.543-1.28 148.294 148.294 0 0 1-18.968-5.173 147.642 147.642 0 0 1-18.114-7.64 147.728 147.728 0 0 1-32.406-22.113 313.502 313.502 0 0 1-25.86-23.989 446.064 446.064 0 0 1-63.894-78.426l-1.246-1.742-.746-.992a358.106 358.106 0 0 1-30.703-55.934 171.351 171.351 0 0 1-14.047-47.226 75.86 75.86 0 0 1 3.105-35.672 48.774 48.774 0 0 1 3.243-7.07 48.814 48.814 0 0 1 4.332-6.461 48.066 48.066 0 0 1 5.304-5.688 48.371 48.371 0 0 1 6.141-4.77 61.05 61.05 0 0 1 12.938-6.261 60.991 60.991 0 0 1 4.597-1.387 60.088 60.088 0 0 1 4.692-1.023 61.37 61.37 0 0 1 9.547-.93 61.485 61.485 0 0 1 4.8.105c1.598.094 3.192.254 4.778.477a61.02 61.02 0 0 1 13.898 3.656 59.454 59.454 0 0 1 4.395 1.934 61.986 61.986 0 0 1 4.23 2.273 61.621 61.621 0 0 1 7.855 5.504 52.016 52.016 0 0 1 11.418 15.113 52.187 52.187 0 0 1 3.457 8.86 52.003 52.003 0 0 1 1.782 9.34c.718 9.582.32 19.12-1.192 28.61a122.886 122.886 0 0 1-7.757 27.565 190.634 190.634 0 0 1-4.352 10.692 38.018 38.018 0 0 0-3.137 19.55 37.623 37.623 0 0 0 2.332 9.712 37.974 37.974 0 0 0 2.102 4.543 37.476 37.476 0 0 0 2.683 4.226c6.297 8.285 12.266 15.867 17.899 22.746a16.81 16.81 0 0 0 1.406 1.485 16.511 16.511 0 0 0 3.293 2.406c.594.336 1.207.633 1.836.89.633.262 1.277.48 1.934.66.66.184 1.328.325 2 .426.675.098 1.355.16 2.035.176.683.02 1.363-.004 2.043-.066.68-.067 1.351-.168 2.02-.317a16.83 16.83 0 0 0 3.852-1.344c.612-.3 1.202-.636 1.776-1.007a17.15 17.15 0 0 0 3.125-2.625 16.878 16.878 0 0 0 2.402-3.293 277.96 277.96 0 0 0 7.211-13.922 238.339 238.339 0 0 0 18.614-47.102 237.014 237.014 0 0 0 5.449-24.765 237.214 237.214 0 0 0 2.789-25.203 135.62 135.62 0 0 0-7.293-50.762 135.968 135.968 0 0 0-6.629-15.856 121.483 121.483 0 0 0-5.672-9.832 121.594 121.594 0 0 0-6.57-9.253 122.124 122.124 0 0 0-7.406-8.598 122.423 122.423 0 0 0-8.18-7.867 120.956 120.956 0 0 0-38.93-22.867 133.014 133.014 0 0 0-20.21-5.461 132.17 132.17 0 0 0-20.82-2.215 132.681 132.681 0 0 0-41.388 5.437 122.706 122.706 0 0 0-51.336 29.563 122.43 122.43 0 0 0-13.183 14.933 126.031 126.031 0 0 0-9.336 14.868 125.948 125.948 0 0 0-7.172 16.023 125.691 125.691 0 0 0-7.36 34.238 203.021 203.021 0 0 0 2.907 47.797 202.345 202.345 0 0 0 5.648 23.309 203 203 0 0 0 8.352 22.484 455.974 455.974 0 0 0 62.156 104.402c9.695 12.43 27.223 32.192 45.871 51.582a351.439 351.439 0 0 0 60.54 52.325 193.666 193.666 0 0 0 20.593 12.523 193.448 193.448 0 0 0 68.79 21.035c4.405.469 8.827.746 13.257.832a153.687 153.687 0 0 0 39.516-4.398 153.59 153.59 0 0 0 37.05-14.41 152.09 152.09 0 0 0 11.367-6.883 156.623 156.623 0 0 0 22.512-18.531 158.297 158.297 0 0 0 12.934-14.54c2-2.554 3.922-5.167 5.765-7.84a159.2 159.2 0 0 0 5.266-8.183 155.68 155.68 0 0 0 4.754-8.496c1.492-2.879 2.898-5.8 4.215-8.77a159.454 159.454 0 0 0 3.664-9.015 156.548 156.548 0 0 0 7.547-28.164 157.08 157.08 0 0 0 2.078-19.344c.144-3.242.191-6.488.133-9.73Zm0 0"
                  />
              </g>
            </svg>
          </div>
          <div className='footer-slogan'>Making great things in Berlin.</div>
        </div>
        <div className='footer-main-contact'>
          <div className='footer-main-heading'>Kontakt</div>
          <div className='footer-contact'>
            <div className='footer-contact-email'><a href='mailto: ams.tech.contact@gmail.com'>ams.tech.contact@gmail.com</a></div>
            <div className='footer-contact-tel'><a href='https://wa.me/491791306809' target='_blank'>+49 179 130 6809</a></div>
          </div>
        </div>
        <div className='footer-main-sm'>
          <div className='footer-main-heading'>SOCIAL MEDIA</div>
          <div className='footer-sm-logos'>
            <a className='footer-sm-logo' href='https://wa.me/491791306809' target='_blank'>
              <svg height="25" viewBox="0 0 24 24" width="25" fill="#ffffff"><path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"/></svg>
            </a>
            <a className='footer-sm-logo' href='https://t.me/amstechcontact' target='_blank'>
              <svg height="25" viewBox="0 0 26 26" width="25"><path d="M23.602 2.034a1.8 1.8 0 0 0-.944.068S1.63 9.659.43 10.496c-.259.18-.346.284-.389.408-.208.595.439.858.439.858l5.42 1.766a.6.6 0 0 0 .274-.017l13.05-8.07c.101-.031.176 0 .16.075-.264.905-9.911 9.478-9.964 9.53a.2.2 0 0 0-.059.079c-.013.031-.018.064-.016.098l-.504 5.288s-.211 1.65 1.435 0c1.168-1.169 2.288-2.137 2.85-2.607 1.864 1.286 3.869 2.709 4.734 3.45a1.5 1.5 0 0 0 1.098.424c.825-.031 1.05-.934 1.05-.934s3.831-15.416 3.96-17.483c.012-.203.029-.332.031-.471.007-.161-.009-.322-.047-.478-.04-.179-.173-.324-.35-.378z" fill="#ffffff" fillRule="evenodd"></path></svg>
            </a>
            <a className='footer-sm-logo' href='https://instagram.com/amstech' target='_blank'>
              <svg height="25" viewBox="0 0 22 22" width="25"><path d="M13.76-.007H5.24A5.258 5.258 0 0 0-.01 5.24v8.52a5.258 5.258 0 0 0 5.25 5.247h8.52a5.258 5.258 0 0 0 5.25-5.247V5.24a5.258 5.258 0 0 0-5.25-5.247zM17 14a2.683 2.683 0 0 1-3 3H5a2.683 2.683 0 0 1-3-3V5a2.683 2.683 0 0 1 3-3h9a2.683 2.683 0 0 1 3 3v9zM9.5 4.6a4.9 4.9 0 1 0 4.9 4.9 4.906 4.906 0 0 0-4.9-4.9zm0 8.111a3.212 3.212 0 1 1 3.21-3.212 3.215 3.215 0 0 1-3.21 3.213zm5.1-9.542a1.233 1.233 0 1 0 .88.362 1.245 1.245 0 0 0-.88-.361z" fill="#ffffff" fillRule="evenodd"></path></svg>
            </a>
            <a className='footer-sm-logo' href='https://twiiter.com/amstech' target='_blank'>
              <svg fill="none" height="25" viewBox="0 0 24 24" width="25"><path d="m24 4.13092c-.8181.36139-1.6899.60093-2.5988.71723.9351-.56215 1.6487-1.44553 1.9842-2.5103-.8718.52338-1.8343.89307-2.86 1.09938-.8278-.88754-2.0075-1.43723-3.2945-1.43723-2.497 0-4.5073 2.04092-4.5073 4.54292 0 .36.0303.70616.1045 1.0357-3.7496-.18416-7.06747-1.99385-9.29635-4.75062-.38913.67985-.61737 1.458-.61737 2.29569 0 1.57293.80437 2.96723 2.00337 3.77446-.72462-.01384-1.4355-.22569-2.03775-.55938v.04985c0 2.20708 1.56337 4.04028 3.6135 4.46258-.36713.1011-.76725.1496-1.1825.1496-.28875 0-.58025-.0166-.85388-.0776.58438 1.7986 2.24263 3.121 4.21438 3.1639-1.5345 1.2087-3.48287 1.9371-5.59212 1.9371-.36988 0-.72463-.0167-1.07938-.0624 1.99787 1.2974 4.36562 2.0382 6.919 2.0382 8.2995 0 12.837-6.9231 12.837-12.924 0-.20077-.0069-.39461-.0165-.58708.8951-.63969 1.6472-1.43861 2.2605-2.358z" fill="#ffffff"></path></svg>
            </a>
          </div>
        </div>
        <div className='footer-main-links'>
          <div className='footer-main-heading'>Links</div>
          <div className='footer-links'>
            <a className='footer-link' href='#services' onClick={handleClickServ}>Services</a>
            <a className='footer-link' href='#projects' onClick={handleClickProj}>Projekte</a>
            <a className='footer-link' href='#about' onClick={handleClickAbout}>Über uns</a>
            <Link className='footer-link' to='/contact'>Kontakt</Link>
          </div>
          <div className='footer-address'>Johannes-Guthmann-Weg 20, 14089 Berlin, Deutschland</div>
        </div>
      </div>
      <div className='footer-cr'>
        <a className='footer-cr-link' href='/'>Privacy Policy</a>
        <span className='footer-cr-text'>© 2022, AMS TECH</span> 
      </div>
    </footer>
  )
}

export default Footer