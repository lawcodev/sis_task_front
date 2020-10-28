import React from 'react'

export default function title({value, type}) {
  switch (type) {
    case 'h1':
      return(<h1>{value}</h1>);
    case 'h2':
      return(<h2>{value}</h2>);
    case 'h3':
      return(<h3>{value}</h3>);
    case 'h4':
      return(<h4>{value}</h4>);
    case 'h5':
      return(<h5>{value}</h5>);
    case 'h6':
      return(<h6>{value}</h6>);
    default:
      break;
  }
}