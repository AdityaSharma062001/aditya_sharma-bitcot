import { useRef, useState } from "react"
import sample from "../sample.json"
export default function Addcontact(props)
{
var names =useRef()
var mail =useRef()
var num =useRef()
var address =useRef()
var id=sample.length+1

function submit(event){
  event.preventDefault()
 

 
        props.getdata({name:names.current.value,email:mail.current.value,mobile:num.current.value,address:address.current.value,id }) 
  
  
 // setdata({name:names.current.value,email:mail.current.value,mobile:num.current.value,address:address.current.value})
 

}

//console.log(data)
    return <div id="addModel" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">All Contact</h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modall-body">

          <form onSubmit={submit}>
<div className="div-addcom">
            <div style={{paddingLeft:"23px", marginBottom:"23px"}}>
                <label>Name</label><br></br>
                <input type="text" placeholder="enter your number" ref={names}></input>
            </div>
            <div style={{paddingLeft:"23px", marginBottom:"23px"}}>
                <label>Emial</label><br></br>
                <input type="Email" placeholder="enter your number" ref={mail}></input>
            </div>
            </div>
            <div>
            <div style={{paddingLeft:"23px", marginBottom:"23px"}}>
                <label>Phone</label><br></br>
                <input type="number" placeholder="enter your number" ref={num} ></input>
            </div>
            <div style={{paddingLeft:"23px", marginBottom:"23px"}}>
                <label>Addres</label><br></br>
                <input type="text" placeholder="enter your number" ref={address}></input>
            </div>
            </div>
            <button className="btn-1-add">Sumbit</button>
            <button type="reset" className="btn-rest">reset</button>
            
            </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
}