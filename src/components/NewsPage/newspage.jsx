// import './newspage.css'
// import NewsArrowRight from '../../assets/arrow-narrow-right.svg'
// import NewsArrowLeft from '../../assets/arrow-narrow-left.svg'
// import NewsCard from '../NewsCard/Newscard'

// function NewsPage (){
//     return(
//         <div>
//                 <h1 className='newspage-title'>Xəbərlər</h1>
//                 <p className='newspage-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 <NewsCard/>


//                 <div className='Newspage'>
//                     <ul className='newspagelist'>
//                     <a href="#"><img src={NewsArrowLeft} alt="NewsArrowLeft" className='NewsArrowLeft' /></a>
//                         <li>1</li>
//                         <li>2</li>
//                         <li id='active'>3</li>
//                         <li>...</li>
//                         <li>10</li>
//                         <a href="#"><img src={NewsArrowRight} alt="NewsArrowRight" className='NewsArrowRight' /></a>
//                     </ul>

//                 </div>
//         </div>
//     )
// }

// export default NewsPage


import './newspage.css';
import NewsArrowRight from '../../assets/arrow-narrow-right.svg'
import NewsArrowLeft from '../../assets/arrow-narrow-left.svg'
// import NewsCard from '../NewsCard/NewsCard';
import NewsCard from '../NewsCard/Newscard';
import { useState } from 'react';

function NewsPage() {
    const [currentPage, setCurrentPage] = useState(1); // Aktif sayfa
    const totalPages = 10; // Toplam sayfa sayısı

    // Sayfa numarasına tıklama
    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    // Sol ok butonuna tıklama
    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    // Sağ ok butonuna tıklama
    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    // Dinamik sayfa numaralarını oluştur
    const renderPageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 || // İlk sayfa
                i === totalPages || // Son sayfa
                (i >= currentPage - 1 && i <= currentPage + 1) // Aktif ve çevresi
            ) {
                pages.push(
                    <li
                        key={i}
                        className={i === currentPage ? 'active' : ''}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </li>
                );
            } else if (
                (i === currentPage - 2 && i !== 1) ||
                (i === currentPage + 2 && i !== totalPages)
            ) {
                pages.push(
                    <li key={`dots-${i}`} className="dots">
                        ...
                    </li>
                );
            }
        }
        return pages;
    };

    return (
        <div>
            <h1 className="newspage-title">Xəbərlər</h1>
            <p className="newspage-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <NewsCard /> {/* Haber kartları */}
            {/* <NewsCard /> */}
            {/* <NewsCard /> */}

            <div className="Newspage">
                <ul className="newspagelist">
                    <a href="#" onClick={handlePreviousClick}>
                        <img
                            src={NewsArrowLeft}
                            alt="NewsArrowLeft"
                            className="NewsArrowLeft"
                        />
                    </a>
                    {renderPageNumbers()}
                    <a href="#" onClick={handleNextClick}>
                        <img
                            src={NewsArrowRight}
                            alt="NewsArrowRight"
                            className="NewsArrowRight"
                        />
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default NewsPage;
