import './questions.css'
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




  </div>
          

  )
}

export default Questions