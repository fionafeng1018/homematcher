import React from 'react';
import './SearchForm.sass';
import PriceSlider from '../PriceSlider/PriceSlider';



class SearchForm extends React.Component{

    render(){
        return (
            <div className="container">
                <p>Filters</p>
                <form className="search-form">
                    <div className = "form-group" >
                        <PriceSlider />
                    </div>
                    <div className= "form-group" >
                        <label for="cities">Areas</label>
                        <select className="form-control" id="cities" name="cities">
                            <option value="all">All</option>
                            <option value = "toronto" > Downtown Toronto </option>
                            <option value="north york">North York</option>
                            <option value="scarborough">Scarborough</option>
                            <option value="missisaga">Missisaga</option>
                        </select>
                    </div>
                    <div className = "form-group" >
                        <label for="postcode">Zip/Postal Code</label>
                        <input className="form-control" id="zipcode" type="text"></input>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SearchForm;