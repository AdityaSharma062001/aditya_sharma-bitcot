import { useEffect, useRef, useState } from "react"

export default function Edit({rec,newdata})
{
  const [obj,setObj] = useState(null)
  
  useEffect(()=>setObj(rec),[rec])

  var change = (evt,prop)=>
  {
    const newOb = {...obj}
    const val = evt.target.value;
    newOb[prop] = val
    console.log(newOb)
    setObj(newOb)
  }

  function changedata(event){

    event.preventDefault()
    newdata(obj)
    console.log(rec)
    
    

    
  }

    return <div id="editModel" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Record Details</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          
          
         <div>
          
         <form onSubmit={newdata}>
           <div className="div-addcom">
            <div style={{paddingLeft:"23px", marginBottom:"23px"}}>
                <label>Name</label><br></br>
                <input type="text" placeholder="enter your number"  value={obj?.name} 
                onChange={e=>change(e,'name')} ></input>
            </div>
            <div style={{paddingLeft:"23px", marginBottom:"23px"}}>
                <label>Emial</label><br></br>
                <input type="Email" placeholder="enter your number" value={obj?.email} onChange={e=>change(e,'email')}></input>
            </div>
            </div>
            <div>
            <div style={{paddingLeft:"23px", marginBottom:"23px"}}>
                <label>Phone</label><br></br>
                <input type="number" placeholder="enter your number"   value={obj?.mobile} onChange={e=>change(e,'mobile')}></input>
            </div>
            <div style={{paddingLeft:"23px", marginBottom:"23px"}}>
                <label>Addres</label><br></br>
                <input type="text" placeholder="enter your number" value={obj?.address} onChange={e=>change(e,'address')}></input>
            </div>
            </div>
            <button onClick={changedata}>Sumbit</button>
            
            
            </form>

         </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
}