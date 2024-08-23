import './media.css'
import Media1 from '../../assets/media1.svg'
import Media2 from '../../assets/media2.svg'
import Media3 from '../../assets/media3.svg'
import ArrowIcon from '../../assets/Icon-right.svg'


function Media (){
    return(
        <div style={{maxWidth:'1392px', margin:'auto'}}>
            <div className='Media-Title'>
                <h1 className='media-title'>Media Mərkəzi</h1>
                <p className='media-text'>Nunc eu velit ut quam egestas sodales fermentum at urna. Donec congue volutpat lorem, non malesuada justo pellentesque id.</p>
            </div>

            <div style={{textAlign:'center'}}>
                    <button className='mbtn'>Tədris materialları</button>
                    <button className='mbtn'>Vebinarlar</button>
                    <button className='mbtn'>Kitablar</button>
            </div>


             <div id='Media' style={{marginTop:"40px", marginLeft:" 18px"}}>
            <div>
            <div className="MediaCard">
                <img src={Media1} alt="Media1" className="Media1"/>
                    
                    <h2>Ümummilli lider və milli səhiyyəmizin inkişafı</h2>
                    
                        <div className="Mediatext">
                          <button className='mediabtn'>Məqalə</button>

                            <div>
                            <a href="#" className="circle-button">
                             <span className="text">Ətrafli</span>
                              <span className="arrow"><img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" />
                              </span>
                            </a>

                            </div>
                        </div>
                </div>
            </div>
            <div>
            <div className="MediaCard">
                <img src={Media2} alt="Media2" className="Media2"/>
                    
                    <h2>Suspendisse consequat <br /> in tortor sit</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Video dərslik</button>
                     
                        <div>
                            <a href="#" className="circle-button">
                             <span className="text">Ətrafli</span>
                              <span className="arrow"><img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" />
                              </span>
                            </a>

                            </div>
                        </div>
                </div>
            </div>
            <div>
            <div className="MediaCard">
                <img src={Media3} alt="Media3" className="Media3"/>
                    
                    <h2>Vivamus non <br /> gravida massa</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Təqdimat</button>
                     
                        <div>
                            <a href="#" className="circle-button">
                             <span className="text">Ətrafli</span>
                              <span className="arrow"><img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" />
                              </span>
                            </a>

                            </div>
                        </div>
                </div>
            </div>
            <div>
            <div className="MediaCard">
                <img src={Media1} alt="Media1" className="Media1"/>
                    
                    <h2>Ümummilli lider və milli səhiyyəmizin inkişafı</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Məqalə</button>

                     
                        <div>
                            <a href="#" className="circle-button">
                             <span className="text">Ətrafli</span>
                              <span className="arrow"><img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" />
                              </span>
                            </a>

                            </div>
                        </div>
                </div>
            </div>
            <div>
            <div className="MediaCard">
                <img src={Media2} alt="Media2" className="Media2"/>
                    
                    <h2>Suspendisse consequat <br /> in tortor sit</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Video dərslik</button>

                    
                        <div>
                            <a href="#" className="circle-button">
                             <span className="text">Ətrafli</span>
                              <span className="arrow"><img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" />
                              </span>
                            </a>

                            </div>
                        </div>
                </div>
            </div>
            <div>
            <div className="MediaCard">
                <img src={Media3} alt="Media3" className="Media3"/>
                    
                     <h2>Vivamus non <br /> gravida massa</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Təqdimat</button>

                        <div>
                            <a href="#" className="circle-button">
                             <span className="text">Ətrafli</span>
                              <span className="arrow"><img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" />
                              </span>
                            </a>

                            </div>
                        </div>
                </div>
            </div>

        


            </div>

            
            
            


        </div>
  
        
    )
}

export default Media