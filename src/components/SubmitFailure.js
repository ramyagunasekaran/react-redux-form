import React from "react";

import { useHistory } from 'react-router-dom';


function SubmitFailure (){

    const history = useHistory()
    

    const HandleSubmit = () =>{

        
        history.push({

            pathname:'/'

        })
        window.location.reload(false);
 

    }

    return(

        <div className="text-center">

            <h1 className='text-center wrong-head' >Something went wrong!</h1>

            <p className="label-b">sorry for inconvinence! </p>



            <button className="btn submit-another-btn" onClick={HandleSubmit}>Try Again</button>



        </div>

    )

}

export default SubmitFailure;