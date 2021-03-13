import React from 'react';
import first from "./assets/images/slider/1.jpg";
import sec from "./assets/images/slider/2.jpg";
import './styles/HomeSearch.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

const HomeSearch = () => {
  return (
      <div>
            <form class="searchInput">
                <input
                    key="random1"
                    placeholder={"Search Recipes or Meal Plan"}
                />
                <span>
                    <button type="submit" class="search-btn" data-target="#search-form" name="q">
                       <FontAwesomeIcon icon={faSearch}/> 
					</button>
                </span>
            </form>
            <img className="searchImg" src={first} alt={sec}/>
      </div>
  );
}

export default HomeSearch;