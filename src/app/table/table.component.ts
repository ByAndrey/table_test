import { Component, OnInit } from '@angular/core';
import { TableModel,TableHeaderItem,TableItem } from 'carbon-components-angular';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: any[] =[];
  
  constructor() { }
  public model = new TableModel();
  ngOnInit(): void {
    this.model.header = [
      new TableHeaderItem({data: "Event_id"}),
      new TableHeaderItem({data: "Timestamp"}), 
      new TableHeaderItem({data: "Status" }),
      new TableHeaderItem({data: "Object" }),
      new TableHeaderItem({data: "Fixed" }),
      new TableHeaderItem({data: "Description" })
      ];
      let data_table =[];
      
      if (this.data){
      this.data.forEach(element => {
        data_table.push([
          new TableItem({data: element[0]}),
          new TableItem({data: element[1]}),
          new TableItem({data: element[2]}),
          new TableItem({data: element[3]}),
          new TableItem({data: element[4]}),
          new TableItem({data: element[5]})
            ]);        
      });
   
        }
      this.model.data= data_table;
  }

}
