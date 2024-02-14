import { useState } from "react";
import sample from "../sample.json";
import ViewComp from "./viewComp";
import Addcontact from "./Addcontact";
import Edit from "./edit";

export default function Main() {
  var ob2 = undefined;
  const [selRec, setSelRec] = useState(undefined);
  const [secdata, setsecdata] = useState(undefined);
  var [data, setdata] = useState(sample);
  var [obj, setobj] = useState([]);
  const [search, setSearch] = useState('');
  // var[alldata ,setalldata] =useState({name,})

  function getdata(data1) {
    const arr = [...data, data1];
    console.log(arr);
    setdata(arr);

    window.loadAddModel(false);
  }

  function showdetails(ob) {
    setSelRec(ob);
    window.loadViewModel();
  }

  function newdata(newdata) {
    // var idname = event.target.id;
    // console.log(idname)
    var a=(newdata.id);
    var b=(newdata.name)

  console.log(data)
  for(let i=0;i<data.length;i++){
    if(a==data[i].id){
      if(b!=data[i].name){
      data.splice([i],1)
      setdata([...data])
      setdata([...data,newdata])
    }
      
      
    }
    
  }

    
    
    
    
    
  }

  function addcontact() {
    window.loadAddModel(true);
  }

  function deltitem(event) {
    var idname = event.target.id;

    data.splice(idname, 1);
    console.log(data);
    setdata([...data]);
  }

  function update(ob) {
    setSelRec(ob);
    window.loadeditModel();
  }

  return (
    <>
      <h1>om Nam Shivay</h1>
      <div className="div-1-main">
        <div className="div-2-main">
          <button className="btn-1-main" onClick={() => addcontact()}>
            All Contact
          </button>
          <i class="fa-solid fa-plus icon-1"></i>
        </div>
      </div>

      <div className="div-3-main">
        <div>
          <input type="text" placeholder="Search Contact"  onChange={(e) => setSearch(e.target.value)}
            ></input>
        </div>
      </div>
      <div className="div-4-main">
        <table className="table-1-main">
          <tbody>
          {data
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
            .map((ob, obb) => (
              <tr className="tr-main">
                <td>{obb + 1}</td>

                <td className="td-main">
                  <i class="fa-solid fa-user"></i>
                </td>
                <td className="td-main-1">
                  {ob.name} <br></br>
                  {ob.mobile}
                </td>
                <td>
                  <div>
                    <i
                      class="fa-solid fa-eye"
                      onClick={() => showdetails(ob)}
                      id={ob.id}
                    ></i>
                  </div>
                </td>
                <td>
                  <div>
                    <i
                      class="fa-solid fa-trash"
                      id={obb}
                      onClick={deltitem}
                    ></i>
                  </div>
                </td>
                <td>
                  <div>
                    <i
                      class="fa-solid fa-pen"
                      id={obb}
                      onClick={() => update(ob)}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ViewComp rec={selRec} />
      <Addcontact getdata={getdata}></Addcontact>
      <Edit rec={selRec} newdata={newdata}></Edit>
    </>
  );
}
