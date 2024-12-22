import './newspage.css';
import NewsArrowRight from '../../assets/arrow-narrow-right.svg';
import NewsArrowLeft from '../../assets/arrow-narrow-left.svg';
import NewsCard from '../NewsCard/Newscard.jsx';
import { useState } from 'react';
import { useGetNewsQuery } from "../../store/Api/news";
import Loading from "../Ui/Loading";

function Newspage() {
    // const location=useLocation()
    const {data, isLoading, isError} = useGetNewsQuery();
    // const baseUrl = import.meta.env.VITE__BASE_URL_IMAGE
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; 

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const renderPageNumbers = () => {
        let pages = [];

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

        if (currentPage < totalPages - 2) {
            pages.push(
                <li key="dots-right" className="dots">
                    ...
                </li>
            );
        }
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



        let content;

     if(isError){
        content = "Xeta bas verdi";
     }else if(isLoading){
         content = <Loading/>
     }else {
        content = data.blogs.data.map((item,index)=> (
            <> 
            <h1 className="newspage-title" key={index}>{item.page_head}</h1><p className="newspage-text">
                {item.page_desc}
            </p>
            </>
        ))
     }

    return (
        <div>
            {content}
            {/* <h1 className="newspage-title">Xəbərlər</h1>
            <p className="newspage-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
            <NewsCard /> 

            <div className="Newspage">
                <a href="#" onClick={handlePreviousClick}>
                    <img
                        src={NewsArrowLeft}
                        alt="NewsArrowLeft"
                        className="NewsArrowLeft"
                    />
                </a>

                <ul className="newspagelist">{renderPageNumbers()}</ul>
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
