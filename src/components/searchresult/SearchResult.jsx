import './searchresult.css'
import {Link, useSearchParams} from "react-router-dom";
import {useGetSearchQuery} from "../../store/Api/search.js";
import {useEffect, useState} from "react";

// import SearchRightIcon from '../../assets/registright.svg'


function Searchresult() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [kivs, setKivs] = useState([]);
    const {data, isError, isLoading, isSuccess} = useGetSearchQuery(searchParams.get('q'));

    useEffect(() => {
       if(data?.kivs){
           setKivs(data.kivs);
       }
    }, [data, isSuccess])
    return (
        <div style={{maxWidth: "1392px", margin: "auto"}}>
            <div id='result' style={{marginTop: "100px"}}>

                <div className='result'>

                </div>
                <h1 className='resulttext'><span>“{searchParams.get('q')}”</span> axtarşınız üzrə <br/> 54 nəticə
                    tapıldı
                </h1>
            </div>

            <div>

                {kivs.length > 0 &&
                    kivs.map(item => (
                        <div key={item.id} className='searchresult'><Link to={`/Media/${item.id}`}><h1 className='searchresultText'>
                            {item.name}
                        </h1></Link></div>
                    ))
                }

                <div className='searchresult'><a href=""><h1 className='searchresultText'>Donec at vehicula elit. Ut
                    ultrices, nisl at facilisis varius, metus odio efficitur massa. </h1></a></div>
                <div className='searchresult'><a href=""><h1 className='searchresultText'>Nulla eget justo risus. </h1>
                </a></div>
                <div className='searchresult'><a href=""><h1 className='searchresultText'>Fusce sit amet dolor eleifend,
                    porttitor nisl eget. </h1></a></div>
                <div className='searchresult'><a href=""><h1 className='searchresultText'>Donec imperdiet, tortor sed
                    posuere hendrerit, nisl ex vehicula libero. </h1></a></div>

            </div>
        </div>


    )

}

export default Searchresult

