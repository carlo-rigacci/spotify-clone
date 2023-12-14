import './Footer.css'

export default function Footer (){
    return (
        <div>
            <footer>
                <div className='menu'>
                    <div className='submenu'>
                        <h1>Company</h1>
                        <p><a>About</a></p>
                        <p><a>Jobs</a></p>
                        <p><a>For the Record</a></p>
                    </div>
                    
                    <div className='submenu'>
                    <h1>Communities</h1> 
                        <p><a>For Artists</a></p>
                        <p><a>Advertsing</a></p>
                        <p><a>Investors</a></p>
                        <p><a>Vendors</a></p>                   
                    </div>

                    <div className='submenu'>
                        <h1>Useful links</h1>
                        <p><a>Support</a></p>
                        <p><a>Free Mobile App</a></p>
                        <p><a>Consumer rights</a></p>                                          
                    </div>
            
                </div>
                        
               
                    <div className='copyright'>© 2023 Copyright: Spotify-Clone</div>

            </footer>
        </div>
    );
}
   