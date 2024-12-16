
import './telimcidaxili.css';
import { useParams } from 'react-router-dom';
import { useGetMentorSingleQuery } from '../../store/Api/mentor';
import Loading from "../Ui/Loading.jsx";

function TelimciDaxili() {
    const { id } = useParams();
    const { data, isError, isLoading } = useGetMentorSingleQuery(id);
    const baseUrl = import.meta.env.VITE__BASE_URL_IMAGE

    const stripHtml = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    };

    let content;

    if (isError) {
        content = "Xəta baş verdi";
    } else if (isLoading) {
        content = <Loading />;
    } else {
        content = (
            <div style={{ maxWidth: '1392px', margin: 'auto' }}>
                <div id='TelimciDaxili'>
                    <div className='Telimciimg'>
                        <img src={`${baseUrl}/${data.trainers.file}`} alt="TelimciImg" className='TelimciImg' />
                    </div>

                    <div className='Intelimci-Title'>
                        <h1 className='intelimci-title'>
                            {`${data.trainers.name1} ${data.trainers.name2}`}
                        </h1>
                        <p className='intelimci-text'>
                            {stripHtml(data.trainers.description)}
                        </p>
                    </div>
                </div>

                <div className='Intelimci-Text'>
                    <p className='intelimci-text'>
                        {stripHtml(data.trainers.description)}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '1392px', margin: 'auto' }}>
            {content}
        </div>
    );
}

export default TelimciDaxili;
