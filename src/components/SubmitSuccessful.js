import React from "react";

import { useHistory } from 'react-router-dom';


function SubmitSuccessful (){

    const history = useHistory()
    

    const HandleSubmit = () =>{

        
        history.push({

            pathname:'/'

        })
        window.location.reload(false);
 

    }

    return(

        <div className="text-center">

            <h1 className='text-center page-head' >Your Submission has been successfull!</h1>

            <p>Thanks! we have received your submission and we'll be in touch really soon.</p>



            <button className="btn submit-another-btn" onClick={HandleSubmit}>Submit Another</button>



        </div>

    )

}

export default SubmitSuccessful;