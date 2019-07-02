import React from 'react';
import data from '../data.json';

class projectsTable extends React.Component{
render(){
  var i=1;
  var projects=new Array();
  return(
    <div class="container">
    <div class="col-lg-12"><h3 className="tableHeader">Проекты</h3></div>
    <div class="col-lg-12">
    <table className="table table-striped table-bordered">
    <thead>
    <th>№</th>
    <th>ID проекта</th>
    <th>Название проекта</th>
    </thead>
    <tbody>
    {
      data.map((data) => {
      if(projects.indexOf(data.transaction.project.id)==-1){
        projects.push(data.transaction.project.id);
        return( <tr>
        <td>{i++}</td>
        <td>{data.transaction.project.id}</td>
        <td>{data.transaction.project.name}</td>
        </tr>);
      }
      }
)
  }
    </tbody>
    </table>
    </div>
    </div>
  );
}
}

export default projectsTable;
