import React from 'react';

export default function About(props) {
    // const [mystyle,setmyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    // const [btntext,setBtnText]=useState("Enable light mode ")
    // const togglestyle=()=>{
    //     if(mystyle.color === 'white'){
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable dark mode")

    //     }
    //     else{
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'2px solid white'
    //         })
    //         setBtnText("Enable light mode")
    //     }


    // }
    
    
    
    // const darkmode=(style)=>{
    //     color:'black',
    //     backgroundcolor:'white'
        
    // };
return (
<div className='container'   >
    <h1 className='my-2' style={{color:(props.mode==='light'?'black':'grey')}}>About us</h1>
    <div class="accordion" id="accordionExample" >
    <div class="card"  >
    <div class="card-header" id="headingOne">
    <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button"   data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyse your text
        </button>
    </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"   data-parent="#accordionExample">
    <div className="card-body"  >
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
    </div>
    </div>
    <div class="card"  >
    <div class="card-header" id="headingTwo">
    <h2 class="mb-0">
        <button className="btn btn-link btn-block text-left collapsed"   type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        Free to use
        </button>
    </h2>
    </div>
    <div id="collapseTwo" className="collapse show"   aria-labelledby="headingTwo" data-parent="#accordionExample">
    <div class="card-body"  >
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
    </div>
    </div>
    <div class="card">
    <div class="card-header"   id="headingThree">
    <h2 class="mb-0"  >
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Browser Compatible
        </button>
    </h2>
    </div>
    <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
    <div class="card-body"  >
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
    </div>
    </div>
    </div>
    
</div>
)
}
