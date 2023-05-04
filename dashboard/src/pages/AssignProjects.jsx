import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar,  } from '@syncfusion/ej2-react-grids';

import { projectsData, projectsGrid } from '../data/dummy';
import { Header } from '../components';

const AssignProjects = () => {
  
  let editing = {};
  let toolbaroptions = [];
  if (localStorage.getItem('currentScope') === 'admin' || localStorage.getItem('currentScope') === 'exec') {
    toolbaroptions = ['Search', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    editing = { allowEditing: true, allowDeleting: true, allowAdding: true, mode: 'Normal' };
  } else {
    toolbaroptions = ['Search'];
    editing = { allowDeleting: false, allowEditing: false };
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Projects" />
      <GridComponent
        dataSource={projectsData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbaroptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {projectsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />

      </GridComponent>
    </div>
  );
};
export default AssignProjects;