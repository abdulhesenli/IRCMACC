import './questions.css'
// import Accordion from 'react-bootstrap/Accordion';
// import { useState } from 'react';
// import Plus from '../../assets/plus-circle.svg'
// import Minus from '../../assets/minus-circle.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useGetFaqQuery } from '../../store/Api/faq';
import Loading from '../Ui/Loading';

function Questions (){
 
  const {data, isLoading, isError} = useGetFaqQuery();
  
  let content;

  if (isError) {
    content = "Xeta bas verdi";
  } else if (isLoading) {
    content = <Loading />;
  } else {
    content = data.faqs.map((item, index) => {
      const headingId = `flush-heading-${index}`;
      const collapseId = `flush-collapse-${index}`;
  
      return (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={headingId}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${collapseId}`}
              aria-expanded="false"
              aria-controls={collapseId}
            >
              {item.sual}
            </button>
          </h2>
          <div
            id={collapseId}
            className="accordion-collapse collapse"
            aria-labelledby={headingId}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{item.cavab}</div>
          </div>
        </div>
      );
    });
  }
   

 

    return(

   <div className="accordion accordion-flush" id="accordionFlushExample">
       <h1 className='ques-title'>Ən çox verilən suallar</h1>
       {content}

       {/* <div className="accordion-item">
  <h2 className="accordion-header" id="flush-headingOne">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapseOne"
      aria-expanded="false"
      aria-controls="flush-collapseOne"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
    </button>
  </h2>
  <div
    id="flush-collapseOne"
    className="accordion-collapse collapse"
    aria-labelledby="flush-headingOne"
    data-bs-parent="#accordionFlushExample"
  >
    <div className="accordion-body">
      Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus.
    </div>
  </div>
       </div> */}

{/* <div className="accordion-item">
  <h2 className="accordion-header" id="flush-headingTwo">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapseTwo"
      aria-expanded="false"
      aria-controls="flush-collapseTwo"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
    </button>
  </h2>
  <div
    id="flush-collapseTwo"
    className="accordion-collapse collapse"
    aria-labelledby="flush-headingTwo"
    data-bs-parent="#accordionFlushExample"
  >
    <div className="accordion-body">
      Morbi semper ornare nisi sed accumsan. Cras ligula felis, ultrices eu turpis at, placerat faucibus felis. Quisque sed sagittis turpis, vitae suscipit turpis. Donec nec metus diam. Donec dictum ante vitae dui lobortis vestibulum. Phasellus convallis feugiat mi at vestibulum. Ut eu sagittis metus. Sed volutpat, arcu eu pellentesque tincidunt, risus purus pellentesque metus, id dignissim metus dolor ac lectus. Donec non dui convallis orci maximus feugiat. Aliquam molestie enim orci, quis fringilla elit elementum non. Proin a purus dictum, ullamcorper lacus in, iaculis eros. Praesent eget lectus lectus.
    </div>
  </div>
</div> */}


  </div>
          

  )
}

export default Questions