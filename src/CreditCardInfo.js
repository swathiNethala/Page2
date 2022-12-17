import React, {useState, useEffect} from "react";

const  CreditCard= () => {
    const [data, setData] = useState([]);
    const CreditCard = () =>{
    fetch(
      "https://fakerapi.it/api/v1/credit_cards?_quantity=1"  )
      .then(response => response.json())
      .then((res) => {setData(res.data)
    console.log(data)
  });
}
  useEffect(()=>{
    CreditCard();
  },[])
  return (
    <div>
      <center>
        <h3>3.CreditCard Information of the User</h3>
      <table className="Table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Number</th>
            <th>Expiration</th>
            <th>Owner</th>
        </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.type}</td>
                <td>{item.number}</td>
                <td>{item.expiration}</td>
                <td>{item.owner}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </center>
    </div>
  )
    }
 export default CreditCard;