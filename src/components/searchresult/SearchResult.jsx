import './searchresult.css'
// import SearchRightIcon from '../../assets/registright.svg'


function Searchresult() {
    return (
        <div style={{ maxWidth:"1392px",margin:"auto"}}>
            <div id='result' style={{marginTop:"100px"}}>

                <div className='result'>
                    
                </div>
                <h1 className='resulttext'>  <span>“təlim”</span> axtarşınız üzrə <br /> 54 nəticə tapıldı
                    </h1>
            </div>

            <div>
                <div className='searchresult'> <a href=""><h1 className='searchresultText' >Mauris tempus quis mi non iaculis. </h1> </a></div>
                <div className='searchresult'> <a href=""><h1 className='searchresultText' >Donec at vehicula elit. Ut ultrices, nisl at facilisis varius, metus odio efficitur massa. </h1> </a></div>
                <div className='searchresult'> <a href=""><h1 className='searchresultText' >Nulla eget justo risus. </h1> </a></div>
                <div className='searchresult'> <a href=""><h1 className='searchresultText' >Fusce sit amet dolor eleifend, porttitor nisl eget. </h1> </a></div>
                <div className='searchresult'> <a href=""><h1 className='searchresultText' >Donec imperdiet, tortor sed posuere hendrerit, nisl ex vehicula libero. </h1> </a></div>

            </div>
        </div>


    )

}

export default Searchresult

