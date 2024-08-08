import './error.css'
import Error404 from '../../assets/Error-404.svg'
import ArrowError from '../../assets/arrow-error.svg'

function Error (){
    return(
        <div>
            <h1 className='error-title'>Səhifə tapılmadı</h1>
            <img src= {Error404} alt="Error404" className='Error404'/>
            <p className='errortext'>Səhifəni tapmaqda çətinlik çəkirik. <br />
            Daha sonra yenidən cəhd edin və ya şəbəkə bağlantınızı yoxlayın.
            </p>
            <button className='errorbtn'>Əsas səhifə <img src={ArrowError} alt="ArrowError" className='ArrowError' /> </button>

        </div>
    )
}

export default Error