import React from 'react';

var SuperHost = ({info}) => (
  console.log(info, '*****'),
  <div>
    <div>{info.firstName} {info.lastName} is a Superhost</div >
    <div>Sudiverhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
  </div>
)

export default SuperHost;