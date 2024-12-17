import './newspage.css';
import NewsArrowRight from '../../assets/arrow-narrow-right.svg';
import NewsArrowLeft from '../../assets/arrow-narrow-left.svg';
import NewsCard from '../NewsCard/Newscard.jsx';
import { useState } from 'react';

function Newspage() {
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

        // İlk sayfa her zaman gösterilir
        pages.push(
            <li
                key={1}
                className={currentPage === 1 ? 'active' : ''}
                onClick={() => handlePageClick(1)}
            >
                1
            </li>
        );

        // Eğer mevcut sayfa 3'ten büyükse '...' ekle
        if (currentPage > 3) {
            pages.push(
                <li key="dots-left" className="dots">
                    ...
                </li>
            );
        }

        // Ortadaki sayfa numaraları (aktif ve çevresi)
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(
                <li
                    key={i}
                    className={i === currentPage ? 'active' : ''}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </li>
            );
        }

        // Eğer mevcut sayfa toplam sayfa sayısından 2'den küçükse '...' ekle
        if (currentPage < totalPages - 2) {
            pages.push(
                <li key="dots-right" className="dots">
                    ...
                </li>
            );
        }

        // Son sayfa her zaman gösterilir
        pages.push(
            <li
                key={totalPages}
                className={currentPage === totalPages ? 'active' : ''}
                onClick={() => handlePageClick(totalPages)}
            >
                {totalPages}
            </li>
        );

        return pages;
    };

    return (
        <div>
            <h1 className="newspage-title">Xəbərlər</h1>
            <p className="newspage-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <NewsCard /> {/* Haber kartları */}

            <div className="Newspage">
                {/* Sol ok butonu */}
                <a href="#" onClick={handlePreviousClick}>
                    <img
                        src={NewsArrowLeft}
                        alt="NewsArrowLeft"
                        className="NewsArrowLeft"
                    />
                </a>

                {/* Sayfa numaraları */}
                <ul className="newspagelist">{renderPageNumbers()}</ul>

                {/* Sağ ok butonu */}
                <a href="#" onClick={handleNextClick}>
                    <img
                        src={NewsArrowRight}
                        alt="NewsArrowRight"
                        className="NewsArrowRight"
                    />
                </a>
            </div>
        </div>
    );
}

export default Newspage;
