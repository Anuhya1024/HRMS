import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Selection, } from '@syncfusion/ej2-react-grids';
import { leavesData, contextMenuItems, leavesGrid } from '../data/dummy';
import { Header } from '../components';


const Leaves = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Leaves" />
      <GridComponent
        id="gridcomp"
        dataSource={leavesData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={{allowEditing: true, allowDeleting: true, allowAdding: true, mode: 'Dialog'}}
        toolbar= {['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
        
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {leavesGrid.map((item, index) => 
            <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Leaves