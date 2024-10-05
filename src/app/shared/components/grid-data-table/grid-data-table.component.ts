import { Component, OnInit } from '@angular/core';
import { IgirdData } from '../../model/gird.interface';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid-data-table',
  templateUrl: './grid-data-table.component.html',
  styleUrls: ['./grid-data-table.component.scss'],
  // imports: [AgGridAngular], // Add Angular Data Grid Component
})
export class GridDataTableComponent implements OnInit {

  constructor() { }

  rowData : IgirdData[] = [
    {
        "id": 997,
        "ruleName": "2DS - Trace Changes",
        "active": "Y",
        "type": "Match",
        "subType": "2DS - Trace Changes",
        "domain": "",
        "impacted": 0,
        "favourite": "N",
        "scheduled": "Y",
        "lastScheduledDate": "01-May-2024 01:15 PM",
        "alert": "Y"
    },
    {
        "id": 996,
        "ruleName": "Trace Changes",
        "active": "Y",
        "type": "Match",
        "subType": "2DS - Trace Changes",
        "domain": "",
        "impacted": 0,
        "favourite": "N",
        "scheduled": "N",
        "lastScheduledDate": "01-May-2024 01:15 PM",
        "alert": "N"
    },
    {
        "id": 986,
        "ruleName": "File Monitor",
        "active": "Y",
        "type": "Match",
        "subType": "1DS - File Monitor",
        "domain": "",
        "impacted": 57994,
        "favourite": "N",
        "scheduled": "Y",
        "lastScheduledDate": "01-May-2024 01:15 PM",
        "alert": "Y"
    },
    {
        "id": 985,
        "ruleName": "testreve1",
        "active": "Y",
        "type": "Match",
        "subType": "1DS - File Monitor",
        "domain": "",
        "impacted": 13773,
        "favourite": "N",
        "scheduled": "N",
        "lastScheduledDate": "01-May-2024 01:15 PM",
        "alert": "N"
    }
]


 colDefs : ColDef[] = [
  { headerName: 'ID', field: 'id', sortable: true, filter: true },
  { headerName: 'Rule Name', field: 'ruleName', sortable: true, filter: true },
  { headerName: 'Active', field: 'active', sortable: true, filter: true },
  { headerName: 'Type', field: 'type', sortable: true, filter: true },
  { headerName: 'Sub Type', field: 'subType', sortable: true, filter: true },
  { headerName: 'Impacted', field: 'impacted', sortable: true, filter: true },
  { headerName: 'Scheduled', field: 'scheduled', sortable: true, filter: true },
  { headerName: 'Last Scheduled Date', field: 'lastScheduledDate', sortable: true, filter: true },
  { headerName: 'Alert', field: 'alert', sortable: true, filter: true }
];

  ngOnInit(): void {
  }

  selectedRows : any[] = []

  formData = {
    ruleName: '',
    active: '',
    type: '',
    subType: '',
    impacted: 0,
    scheduled: '',
    lastScheduledDate: '',
    alert: ''
  };

  onRowSelected(eve : any){
    this.selectedRows = eve.api.getSelectedRows();
    // console.log(this.selectedRows);
  }

  onSave() {
      console.log("Saved Data:", this.formData);
  }

  onUpdate() {
    console.log("Updated Data:", this.formData);
  }

}
