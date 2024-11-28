// import '../../header.css'
import './registration.css'
import '../../res.css'
import RightIcon from '../../assets/registright.svg'


function Registration() {
    return (
        <div style={{marginTop:'170px'}}>
            <div className='register'>
                <div id='register'  >
                    

                    <div className='registerdiv' style={{marginLeft: "110px", paddingTop: "50px" }}>
                        <h1 className='registerTitle'>Müraciət et</h1>
                        <p className='registerText'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Duis massa nisl, porta ac erat quis, semper sollicitudin mi
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Duis massa nisl, porta ac erat
                            quis, semper sollicitudin mi.
                        </p>
                    </div>

                    <form className='registerForm'>
                        <div className="Register-form-group">

                            <input type="text" name="name" id="registername" className='inputtext' placeholder="Ad, Soyad" />

                        </div>
                        <div className="Register-form-group">
                            <input type="text" name="text" id="registertext" className='inputtext' placeholder="Əlaqə nömrəniz" />

                        </div>


                        <div className="custom-select-wrapper">
                            <select id="message" className="custom-select" placeholder="Təlimi seç">
                                <option  value="option1" >Təlimi seç</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        {/* <button type="submit" className='RegisterBtn'>Göndər</button> */}
                    </form>
                    

                </div>
                <button type="submit" className='RegisterBtn'>Göndər
                    <img src={RightIcon} alt="right"  style={{marginLeft:'20px'}}/>
                </button>
            </div>
        </div>


    )

}

export default Registration

