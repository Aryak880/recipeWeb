import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {

    const style = { textAlign: "center", backgroundColor: 'rgba(154,59,236, 0.2)', padding: "20", borderRadius: "5"}

    return(
        <>        
            <footer className="page-footer font-small special-color-dark pt-4" style={style}>
                <div className="container">
                    <ul className="list-unstyled list-inline text-center">
                        
                            <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/aryaksingh.chauhan.5/">
                                <FacebookIcon />
                            </a>
                            {`  `}  
                            <a className="btn-floating btn-tw mx-1" href="https://www.instagram.com/aryaksinghchauhan/">
                                <InstagramIcon />
                            </a>
                            {`  `}
                            <a className="btn-floating btn-gplus mx-1" href="https://twitter.com/ChauhanAryak">
                                <TwitterIcon />
                            </a>
                            {`  `}
                        
                            <a className="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/aryak-singh-chauhan-663a74197/">
                            <LinkedInIcon />
                            </a>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">© developed by: Aryak singh chauhan
                    
                </div>
            </footer>
        </>
    )
}

export default Footer;