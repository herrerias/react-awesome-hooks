import React, { useState, useEffect } from "react";

const SearchEntityForm = props => {
  const initialFormState = { 
    id: null, 
    clientCode: "", 
    name: "" ,
    surname: "" ,
    companyName: "" ,
    phone1: "" ,
    phone2: "" ,
    mobile: "" ,
    contact: "" ,
    mail: "" ,
    web: "" ,
    nif: "" ,
    address: "" ,
    fax: "" ,
    incidents: false ,
    currency: "" ,
  };

  const [entity, setEntity] = useState(initialFormState);
  
  // Data to fetch
  const [data, setData] = useState({ entities: [] });

  // Loading state while fetching data
  const [isLoading, setIsLoading] = useState(false);
  // Error handling to notify to the component
  const [isError, setIsError] = useState(false);

  //async - await when connecting to api
  const fetchData = () => {
      setIsError(false);
      setIsLoading(true);
      setTimeout(() => {setIsLoading(false)}, 100);

      try {
        const result = { entities: [{id:1},{id:2}] };
        setData(result);

      } catch( error ) {
        console.log(error);
        setIsError(true);
      }
  }

  const handleInputChange = event => {
    const { name, value } = event.target;

    setEntity({ ...entity, [name]: value });
  };

  const clearAllFields = () => {
    setEntity({...initialFormState});
  };

  // const fetchData = () => {
  //   setIsLoading(true);
  //   setTimeout(() => setIsLoading(false), 3000);
  // };

  return (
    <form onSubmit={event => event.preventDefault()}>
      <div className="flex-row">
        <div className="no-flex-grow">
          <label>Cod. Cliente</label>
          <input type="text" name="clientCode" value={entity.clientCode} onChange={handleInputChange}/>
        </div>
        <div className="no-flex-grow">
          <label>N.I.F.</label>
          <input type="text" name="nif" value={entity.nif} onChange={handleInputChange}/>
        </div>
      </div>
      
      <div className="flex-row">
        <div className="flex-grow">
          <label>Nombre</label>
          <input type="text" name="name" value={entity.name} onChange={handleInputChange}/>
        </div>
        <div className="flex-grow">
          <label>Apellidos</label>
          <input type="text" name="surname" value={entity.surname} onChange={handleInputChange}/>
        </div>
      </div>
      
      <div className="flex-row">
        <div className="flex-grow">
          <label>Nombre Fiscal</label>
          <input type="text" name="companyName" value={entity.companyName} onChange={handleInputChange}/>
        </div>
      </div>

      <div className="flex-row">
        <div className="no-flex-grow">
          <label>Teléfono (1)</label>
          <input type="text" name="phone1" value={entity.phone1} onChange={handleInputChange}/>
        </div>
        <div className="no-flex-grow">
          <label>Móvil</label>
          <input type="text" name="mobile" value={entity.mobile} onChange={handleInputChange}/>
        </div>
      </div>

      <div className="flex-row">
        <div className="no-flex-grow">
          <label>Teléfono (2)</label>
          <input type="text" name="phone2" value={entity.phone2} onChange={handleInputChange}/>
        </div>
        <div className="no-flex-grow">
          <label>Fax</label>
          <input type="text" name="fax" value={entity.fax} onChange={handleInputChange}/>
        </div>
      </div>

      <div className="flex-row">
        <div className="flex-grow">
          <label>Contacto</label>
          <input type="text" name="contact" value={entity.contact} onChange={handleInputChange}/>
        </div>
      </div>
      
      <div className="flex-row">
        <div className="checkbox no-flex-grow">
          <input type="checkbox" id="incidents" name="incidents" value={entity.incidents} onChange={handleInputChange}/>
          <label htmlFor="incidents">Incidencias</label>
        </div>
      </div>

      <div className="flex-row">
        <div className="no-flex-grow">
          <label>E-mail</label>
          <input type="text" name="mail" value={entity.mail} onChange={handleInputChange}/>
        </div>
        <div className="flex-grow">
            <label>Página Web</label>
            <input type="text" name="web" value={entity.web} onChange={handleInputChange}/>
        </div>
      </div>

      <div className="flex-row">
        <div className="no-flex-grow">
          <label>Facturar en</label>
          <select name="currency" value={entity.currency} onChange={handleInputChange}>
            <option>€</option>
            <option>$</option>
          </select>
        </div>
      </div> 

      <div className="flex-row">
        <div className="flex-grow">
          <label>Dirección</label>
          <input type="text" name="address" value={entity.address} onChange={handleInputChange}/>
        </div>
      </div>

      <div className="margin-top"></div>

      <button onClick={fetchData}>{isLoading ? 'Loading...' : 'Search'}</button>
      <button className="muted-button margin-left" onClick={clearAllFields}>Clean all fields</button>

      <pre>{JSON.stringify(data)}</pre>
      { data &&
        <ul>
           {data.entities.map(item => (
             <li key={item.objectID}>
               <span>{item.id}</span>
             </li>
           ))}
         </ul>
      }
    </form>
  );
};

export default SearchEntityForm;
