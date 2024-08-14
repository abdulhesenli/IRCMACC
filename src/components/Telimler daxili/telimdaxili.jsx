import './telimdaxili.css'



function TelimDaxili (){
    return(
        <div style={{maxWidth:'1392px', margin:'auto'}}>
            <div className='Telim-Title'>
                <h1 className='telim-title'>Laparoskopik urologiya və böyrək transplantasiyası</h1>
            </div>

            <div style={{textAlign:'center'}}>
                    <button className='Telimbtn'>“ Laparoskopik Nefrektomiya” təlimi</button>
                    <button className='Telimbtn'>“ Laparoskopik Parsial Nefrektomiya” təlimi</button>
               
            </div>

            <table id='table' style={{borderRadius:'10px'}}>
                <tr>
                    <td style={{width:'212px', backgroundColor:'#F0F6F9'}}>1-ci gün</td>
                    <td style={{width:'802px'}}>Xüsusi təlim qutularında laparoskopik cərrahi bacarıqların təlimi</td>
                    <td>1-ci gün</td>
                </tr>

                <tr>
                    <td style={{width:'212px', backgroundColor:'#F0F6F9'}}>2-ci gün</td>
                    <td>Xüsusi təlim qutularında laparoskopik tikiş və düyün texnikalarının öyrənilməsi</td>
                    <td>2-ci gün</td>
                </tr>

                <tr>
                    <td style={{width:'212px', backgroundColor:'#F0F6F9'}}>3-ci gün</td>
                    <td>Xüsusi təlim qutularında laparoskopik tikiş və düyün texnikalarıni boru modelinde öyrənilməsi
                    (laparoskoipik anastomoz texnikaları)</td>
                    <td>3-ci gün</td>
                </tr>

                <tr>
                    <td style={{width:'212px', backgroundColor:'#F0F6F9'}}>4-ci gün</td>
                    <td>Toxuma üzərində laparoskopik disseksiya və tikiş təlimi təlimi</td>
                    <td>4-ci gün</td>
                </tr>

                <tr>
                    <td style={{width:'212px', backgroundColor:'#F0F6F9'}}>5-ci gün</td>
                    <td>Canlı heyvan üzərində ( donuz vəya qoyun ) laparoskopik nefrektomiya əməliyyatının icrası</td>
                    <td>5-ci gün</td>
                </tr>
            </table>









        </div>      
    )
}

export default TelimDaxili