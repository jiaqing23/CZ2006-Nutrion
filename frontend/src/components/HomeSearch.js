import React from 'react';
import first from "../assets/images/slider/1.jpg";
import sec from "../assets/images/slider/2.jpg";
import '../styles/HomeSearch.css';
import { FaSearch } from 'react-icons/fa';

const HomeSearch = () => {
  return (
      <div className="search-container">
          <img className="searchImg" src={first} alt={sec}/>
          <div class="searchBanner row">
              <div class=" col-sm-3 col-md-3"></div>
              <div class="col-12 col-sm-9 col-md-6">
                <div className="d-flex flex-wrap justify-content-center search-title">
                    Healthy&Easy
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                <form id="search-form" class="form-inline searchInput" method="post" action="//www.google.com/search">
                    <div class="input-group">
                    <input
                        key="random1"
                        placeholder={"Search Recipes or Meal Plan"}
                        class="form-control search-form"
                    />
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-primary search-btn" data-target="#search-form" name="q">
                        <FaSearch />
                        </button>
                    </span>
                    </div>
                </form>
                    </div>
              </div>
          </div>
      </div>
  );
}

export default HomeSearch;