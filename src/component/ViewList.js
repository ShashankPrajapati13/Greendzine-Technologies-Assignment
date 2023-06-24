import React, { useEffect, useState } from "react";
import { ViewListAsync, filterViewList } from "./Redux/Feature/ViewListSlice";
import { useDispatch, useSelector } from "react-redux";
import css from "../component/stylesheet/ViewList.module.css";
import { TextField } from "@mui/material";
import noresult from "../photo/153-1533013_sorry-no-results-found-removebg-preview.png"

const ViewList = () => {
  

  const { ViewList } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  let asyncFetch = async () => {
    dispatch(ViewListAsync());
    
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  
  let changeHandler = (e) => {
   if (e.target.value.trim().length === 0) dispatch(ViewListAsync());
   else dispatch(filterViewList(e.target.value))
  };

  let showCards = <h1>No ViewList Yet!</h1>;
  if (ViewList?.length) {
    console.log(ViewList.data);
    showCards = ViewList.map((e) => (
      <div
        id={css.card}
        key={e.id}
        className="card mt-5"
        style={{ width: "22rem", marginLeft: "1.5%" }}
      >
        <div id={css.avatarBox}>
          <img
            id={css.avtar}
            src={e.avatar}
            alt="Card image cap"
            style={{ height: 200 }}
          />
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-around">
            <h4 className="card-text">{e.first_name}</h4>
          </div>
          <div className={css.ID}>
            <h6 className="card-text">{e.id}</h6>
          </div>
        </div>
      </div>
    ));
  }
  else{
    showCards=<img src={noresult} style={{margin:"auto auto",height:"fit-content"}}/>
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <TextField
          id="outlined-basic"
          label="Search Employee"
          size="small"
          variant="outlined"
          margin="none"
          sx={{ marginRight: 5 }}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <div className="d-flex flex-wrap justfy-content-between align-item-center" style={{minHeight:"80vh",width:"100%"}}>{showCards}</div>
    </>
  );
};

export default ViewList;
