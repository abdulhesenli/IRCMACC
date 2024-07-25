import '../../header.css'
import './registration.css'

function Registration (){
    return(
        <div>
            <div className='register'>
            <form className='registerForm'>
            <div className="form-group">
       
                <input type="text" name="name" id="name" placeholder="Ad, Soyad"/>
 
            </div>
            <div className="form-group">
            <input type="text" name="text" id="text" placeholder="Əlaqə nömrəniz"/>
           
            </div>
            <div className="form-group">
               
                <select id="message" name="message" placeholder="T'limi sec">
                    <option value="option1" disabled>Təlimi seç</option>
                    <option value="option2">Təlim 2</option>
                    <option value="option3">Təlim 3</option>
                </select>
            </div>
            <button type="submit" className='RegisterBtn'>Göndər</button>
        </form>

            </div>
        </div>
    )

}

export default Registration

