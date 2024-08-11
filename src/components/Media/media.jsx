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


             <div className="row" style={{marginTop:"40px", marginLeft:" 0px"}}>
            <div className="col-4">
            <div className="MediaCard">
                <img src={Media1} alt="Media1" className="Media1"/>
                    
                    <h2>Ümummilli lider və milli səhiyyəmizin inkişafı</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Məqalə</button>

                            <div style={{display:'flex', alignItems:'center'}}>
                            <a href="#" className="MediaContinue">Ətraflı</a>
                            <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px"}}/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-4">
            <div className="MediaCard">
                <img src={Media2} alt="Media2" className="Media2"/>
                    
                    <h2>Suspendisse consequat <br /> in tortor sit</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Video dərslik</button>

                            <div style={{display:'flex', alignItems:'center'}}>
                            <a href="#" className="MediaContinue">Ətraflı</a>
                            <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px"}}/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-4">
            <div className="MediaCard">
                <img src={Media3} alt="Media3" className="Media3"/>
                    
                    <h2>Vivamus non <br /> gravida massa</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Təqdimat</button>

                            <div style={{display:'flex', alignItems:'center'}}>
                            <a href="#" className="MediaContinue">Ətraflı</a>
                            <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px"}}/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-4">
            <div className="MediaCard">
                <img src={Media1} alt="Media1" className="Media1"/>
                    
                    <h2>Ümummilli lider və milli səhiyyəmizin inkişafı</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Məqalə</button>

                            <div style={{display:'flex', alignItems:'center'}}>
                            <a href="#" className="MediaContinue">Ətraflı</a>
                            <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px"}}/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-4">
            <div className="MediaCard">
                <img src={Media2} alt="Media2" className="Media2"/>
                    
                    <h2>Suspendisse consequat <br /> in tortor sit</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Video dərslik</button>

                            <div style={{display:'flex', alignItems:'center'}}>
                            <a href="#" className="MediaContinue">Ətraflı</a>
                            <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px"}}/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-4">
            <div className="MediaCard">
                <img src={Media3} alt="Media3" className="Media3"/>
                    
                     <h2>Vivamus non <br /> gravida massa</h2>
                    
                    <div className="Mediatext">
                        <button className='mediabtn'>Təqdimat</button>

                            <div style={{display:'flex', alignItems:'center'}}>
                            <a href="#" className="MediaContinue">Ətraflı</a>
                            <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px"}}/>
                            </div>
                        </div>
                </div>
            </div>

        


            </div>

            
            
            


        </div>
  
        
    )
}

export default Media