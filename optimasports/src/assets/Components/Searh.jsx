import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import data from "../searchTemplate.json";

const Section = styled.section`
  position: relative;
  .search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
  }
  .input-search {
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    background-color: #22a6b3;
    padding-right: 40px;
    color: #fff;
  }
  .input-search::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }
  .btn-search {
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: #ffffff;
    background-color: transparent;
    pointer-events: painted;
  }
  .btn-search:focus ~ .input-search {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
  .input-search:focus {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;

const Searh = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Section>
      <div className="search-box">
        <button className="btn-search">
          <BiSearch />
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        <div className="search_container">
          {data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div className="searchTemplate" key={val.id}>
                  <img src={val.image} alt="" />
                  <h5>{val.title}</h5>
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default Searh;
