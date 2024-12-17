
import './media.css';
import ArrowIcon from '../../assets/Icon-right.svg';
import { useGetKivQuery } from '../../store/Api/kiv';
import Loading from '../Ui/Loading';
import { useState } from 'react';

function Media() {
    const { data, isLoading, isError } = useGetKivQuery();
    const [filter, setFilter] = useState('tədris'); // Başlangıçta `tedris` öğeleri gösterilecek.
    const baseUrl = import.meta.env.VITE__BASE_URL_IMAGE
    let content;

    if (isError) {
        content = "Xəta baş verdi";
    } else if (isLoading) {
        content = <Loading />;
    } else {
        // Yalnızca seçilen `kiv_status` değerine göre verileri filtrele
        const filteredData = data.blogs.data.filter((item) => item.kiv_status === filter);

        content = filteredData.map((item, index) => (
            <div className="media_card" key={index}>
                <div className="MediaCard" >
                    <img src={`${baseUrl}/${item.cover}`} alt="Media1" className="Media1" />
                    <h2>{item.name || "Ad mövcud deyil"}</h2>
                    <div className="Mediatext">
                        <button className="mediabtn">Məqalə</button>
                        <div>
                            <a href="#" className="mediactaa">
                                <span>Ətraflı oxu</span>
                                <img src={ArrowIcon} alt="ArrowIcon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    const handleFilterClick = (status) => {
        setFilter(status); // Seçilen `kiv_status` değerini günceller.
    };

    return (
        <div style={{ maxWidth: '1392px', margin: 'auto' }}>
            <div className="Media-Title">
                <h1 className="media-title">Media Mərkəzi</h1>
                <p className="media-text">
                    Nunc eu velit ut quam egestas sodales fermentum at urna. Donec congue volutpat lorem, non malesuada justo pellentesque id.
                </p>
            </div>

            <div style={{ textAlign: 'center' }}>
                <button className="mbtn" onClick={() => handleFilterClick('tədris')}>
                    Tədris materialları
                </button>
                <button className="mbtn" onClick={() => handleFilterClick('vebinar')}>
                    Vebinarlar
                </button>
                <button className="mbtn" onClick={() => handleFilterClick('kitab')}>
                    Kitablar
                </button>
            </div>

            <div id="Media" style={{ marginTop: '40px', marginLeft: '18px' }}>
                {content}
            </div>
        </div>
    );
}

export default Media;
