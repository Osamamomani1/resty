import React from 'react';
import './result.scss';
import JSONPretty from 'react-json-pretty';
function Results (props){
    return (
      <section>
        { props.data ?<JSONPretty data-testid="renderedData" data={props.data}></JSONPretty>  :  <h2>Loading..</h2>}
      </section>
    );
}

export default Results;