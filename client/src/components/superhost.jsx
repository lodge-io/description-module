import React from 'react';

var SuperHost = ({info}) => (
  console.log(info, '*****'),
  <div>
    <div><b className="highlights"><p><i id="supericon" class="fas fa-award"></i> {info.firstName} {info.lastName} is a Superhost</p></b></div >
    <div className="house">Superhost are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
  </div>
)

export default SuperHost;