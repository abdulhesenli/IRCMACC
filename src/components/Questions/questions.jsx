import './questions.css'
// import Accordion from 'react-bootstrap/Accordion';
// import { useState } from 'react';
import Plus from '../../assets/plus-circle.svg'
import Minus from '../../assets/minus-circle.svg'

function Questions (){
 

 

    return(
 <div>
         
         <h1 className='ques-title'>Ən çox verilən suallar</h1>

         <div className="accordion">
         <div className="accordion-item">
         <div className="accordion-item-header">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit?
         <img src={Plus} alt="Plus" className='Plus'  />
         </div>
         
         </div>
     </div>
     <div className="accordion">
         <div className="accordion-item">
         <div className="accordion-item-header">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit?
         <img src={Plus} alt="Plus" className='Plus'  />
         </div>
         
         </div>
     </div>
     <div className="accordion">
         <div className="accordion-item">
         <div className="accordion-item-header">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit?
         <img src={Plus} alt="Plus" className='Plus'  />
         </div>
        
         
         </div>
     </div>
     <div className="accordion">
         <div className="accordion-item-active ">
         <div className="accordion-item-header">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit?
         <img src={Minus} alt="Plus" className='Plus'  />
         </div>
         <div>
            <p className='accordion-item-body'>Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. 
                Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus.</p>
         </div>
         
         </div>
     </div>
     <div className="accordion">
         <div className="accordion-item">
         <div className="accordion-item-header">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit?
         <img src={Plus} alt="Plus" className='Plus'  />
         </div>
         
         </div>
     </div>
     <div className="accordion">
         <div className="accordion-item">
         <div className="accordion-item-header">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit?
         <img src={Plus} alt="Plus" className='Plus'  />
         </div>
         
         </div>
     </div>
     <div className="accordion">
         <div className="accordion-item">
         <div className="accordion-item-header">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit?
         <img src={Plus} alt="Plus" className='Plus'  />
         </div>
         
         </div>
     </div>




     
 </div>
          

    )
}

export default Questions