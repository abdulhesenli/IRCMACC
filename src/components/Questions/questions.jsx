import './questions.css'
// import Accordion from 'react-bootstrap/Accordion';
// import { useState } from 'react';
// import Plus from '../../assets/plus-circle.svg'
// import Minus from '../../assets/minus-circle.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Questions (){
 

 

    return(
//  <div>
         
//          <h1 className='ques-title'>Ən çox verilən suallar</h1>

//          <div className="accordion">
//          <div className="accordion-item">
//          <div className="accordion-item-header">
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
//          <img src={Plus} alt="Plus" className='Plus'  />
//          </div>
         
//          </div>
//          </div>
//      <div className="accordion">
//          <div className="accordion-item">
//          <div className="accordion-item-header">
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
//          <img src={Plus} alt="Plus" className='Plus'  />
//          </div>
         
//          </div>
//      </div>
//      <div className="accordion">
//          <div className="accordion-item">
//          <div className="accordion-item-header">
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
//          <img src={Plus} alt="Plus" className='Plus'  />
//          </div>
        
         
//          </div>
//      </div>
//      <div className="accordion">
//          <div className="accordion-item-active ">
//          <div className="accordion-item-header">
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
//          <img src={Minus} alt="Plus" className='Plus'  />
//          </div>
//          <div>
//             <p className='accordion-item-body'>Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. 
//                 Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus.</p>
//          </div>
         
//          </div>
//      </div>
//      <div className="accordion">
//          <div className="accordion-item">
//          <div className="accordion-item-header">
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
//          <img src={Plus} alt="Plus" className='Plus'  />
//          </div>
         
//          </div>
//      </div>
//      <div className="accordion">
//          <div className="accordion-item">
//          <div className="accordion-item-header">
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
//          <img src={Plus} alt="Plus" className='Plus'  />
//          </div>
         
//          </div>
//      </div>
//      <div className="accordion">
//          <div className="accordion-item">
//          <div className="accordion-item-header">
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
//          <img src={Plus} alt="Plus" className='Plus'  />
//          </div>
         
//          </div>
//      </div>




     
//  </div>

<div className="accordion accordion-flush" id="accordionFlushExample">
<h1 className='ques-title'>Ən çox verilən suallar</h1>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus</div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus</div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus</div>
    </div>
  </div>

  <div className="accordion-item">
  <h2 className="accordion-header" id="flush-headingFour">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
    </button>
  </h2>
  <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus</div>
  </div>
</div>


<div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus</div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus</div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </button>
    </h2>
    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus</div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </button>
    </h2>
    <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus</div>
    </div>
  </div>





  
</div>
          

    )
}

export default Questions