import React ,{useRef,useEffect} from "react";
const {tableau} = window;

function TableMap(){
    const ref = useRef(null);
    console.log(ref)
    const url = "https://prod-apsoutheast-a.online.tableau.com/t/a2/views/Superstore/Overview/c59132b8-fbab-4a4d-98eb-d061f88243f6/ab85d20d-b479-48f3-8df0-946ceaaf371a";
    
    function initViz(){
        new tableau.Viz(ref.current,url)
    }
    
    useEffect(() =>{
        initViz();
    },[])

    
    return(
        <div>
            <p>Comp90024</p>
        </div> 
    );
}

export default TableMap;