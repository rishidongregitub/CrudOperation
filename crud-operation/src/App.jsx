import React, { useEffect, useState } from "react";
import { EmployeeData } from "./EmployeeData";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row" >{item.employee_id}</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
