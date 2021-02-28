import React from 'react';

const Country = (props) => {
    const {name, population, region, area, flag} = props.country;
    const countryStyle = {border:'1px solid goldenrod', margin:'10px', padding:'10px'}
    const handleAddCountry = (props.handleAddCountry)
    return (
        <div style={countryStyle}>
            <h2>This is {name}</h2>
            <img style={{width:'80px', height:'50px', border: '1px solid lightgrey'}} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>
            <button onClick={()=>handleAddCountry(props.country)}>Add Button</button>
        </div>
    );
};

export default Country;