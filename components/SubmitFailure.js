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

            <h1 className='text-center wrong-head' >Somethingwent wrong!</h1>

            <p>sorry for inconvinence! please try again.</p>



            <button className="btn submit-another-btn" onClick={HandleSubmit}>Submit Another</button>



        </div>

    )

}

export default SubmitFailure;