import React from "react";
import Activitate from "./activitate";

const Program = (props) => {
    const {activitati, sterge} = props;
    const lista = activitati.map((item) => <Activitate ora={item.ora} descriere={item.descriere} title={item.titlu} loc={item.loc} id={item.id} sterge={sterge} key={item.id}/>);
    const stil = {
        h2: { textAlign: "center" }
      };
    return(
        <>
      <h2 className="mt-4" style={stil.h2}>
        Agenda
      </h2>
      <hr />
      <div>{lista}</div>
    </>
  );
}

export default Program;