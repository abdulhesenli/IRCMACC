import './newspage.css'
import NewsArrowRight from '../../assets/arrow-narrow-right.svg'
import NewsArrowLeft from '../../assets/arrow-narrow-left.svg'
import NewsCard from '../NewsCard/Newscard'

function NewsPage (){
    return(
        <div>
                <h1 className='newspage-title'>Xəbərlər</h1>
                <p className='newspage-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <div className='Newspage'>
                    <ul className='newspagelist'>
                    <a href="#"><img src={NewsArrowLeft} alt="NewsArrowLeft" className='NewsArrowLeft' /></a>
                        <li>1</li>
                        <li>2</li>
                        <li id='active'>3</li>
                        <li>...</li>
                        <li>10</li>
                        <a href="#"><img src={NewsArrowRight} alt="NewsArrowRight" className='NewsArrowRight' /></a>
                    </ul>

                </div>
        </div>
    )
}

export default NewsPage