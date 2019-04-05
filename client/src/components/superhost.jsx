import React from 'react';

const SuperHost = ({info}) => (
  <div>
    <div><b className="highlights"><p><i id="supericon" className="fas fa-award"></i> {info.firstName} {info.lastName} is a Superhost </p></b></div >
    <div className="housedescription">Superhost are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
  </div>
);

export default SuperHost;
