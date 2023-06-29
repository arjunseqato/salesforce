import { LightningElement } from 'lwc';

const columns = [
    { label: 'Amount', fieldName: 'amount', type: 'currency', editable: true },
    { label: 'Date', fieldName: 'date', type: 'date', editable: true },
    {
        label: 'Actions',
        type: 'button',
        typeAttributes: {
          iconName: 'utility:delete',
          label: 'Delete',
          name: 'delete',
          title: 'Delete',
          variant: 'destructive',
        }
      }
];

export default class SampleTask extends LightningElement {
    
    hide = true;
    rows = [];
    amount = '';
    date = '';
    rowId = 0;

    // data=[];
    columns = columns;
    rowOffset = 0;

    reportInputValidity(className) {
        let error = 0;
        let inputFields = this.template.querySelectorAll(className);
        inputFields.forEach(inputField => {
            if(!inputField.reportValidity()) {
                error++;
            }
        });
        return error === 0;
    }

    toggleHide() {
        this.hide = !this.hide;
        // console.log(this.hide)
    }

    handleChangeAmount(event) {
        this.amount = event.target.value;
        // console.log(this.date)
    }
    handleChangeDate(event) {
        this.date = event.target.value;
        // console.log(this.date)
    }

    addRow() {
        const valid = this.reportInputValidity('.input');
        if(valid) {
            this.rows.push({
                position: this.rowId++,
                amount: this.amount,
                date: this.date
            });
            this.amount ='';
            this.date = '';
            console.log(JSON.parse(JSON.stringify(this.rows)));
            this.rows = [...this.rows];
            // console.log(JSON.parse(JSON.stringify(this.data)));
        }
    }

    // deleteRow(event) {
    //     const rowId = parseInt(event.target.dataset.id);
    //     this.rows.splice(rowId, 1);  //removing the element from array
    //     this.rows = [...this.rows]; //updating the rows array to reflect in template
    //     console.log(JSON.parse(JSON.stringify(this.rows)));
    //     this.rows = [...this.rows];
    //     // console.log(JSON.parse(JSON.stringify(this.data)));

    // }
    
    // editAmount(event) {
    //     this.editAmount = event.target.value;
    //     const rowId = parseInt(event.target.dataset.id);
    //     this.rows[rowId].amount = this.editAmount;
    //     // console.log(JSON.parse(JSON.stringify(this.rows)));
    // }
    // editDate(event) {
    //     this.editDate = event.target.value;
    //     const rowId = parseInt(event.target.dataset.id);
    //     this.rows[rowId].date = this.editDate;
    // }

    
    //inline cell edit functions in datatable is written using  oncellchange event.

      handleCellChange(event) {
        this.rows = [...this.rows];
        const updatedValues = event.detail.draftValues;
        const editedRowId = parseInt(updatedValues[0].id.replace('row-', ''));
        if(updatedValues[0].amount) {
            this.rows[editedRowId].amount = updatedValues[0].amount;
            
        }
        if(updatedValues[0].date) {
            this.rows[editedRowId].date = updatedValues[0].date;
        }
        console.log(JSON.parse(JSON.stringify(this.rows)));
        this.rows = [...this.rows];
      }
      

    //button click function in datatable is written using  onrowaction event.
    handleRowAction(event) {
        // console.log('action', JSON.parse(JSON.stringify(event.detail.action)));
        // console.log('row', JSON.parse(JSON.stringify(event.detail.row)));
        const rowId = event.detail.row.position;
        const rowIndex = this.rows.findIndex(row => row.position === rowId);
        console.log(JSON.parse(JSON.stringify(rowId)));
        if (event.detail.action.name === 'delete' && rowIndex !== -1) {
            this.rows.splice(rowIndex, 1);  //removing the element from array
            this.rows = [...this.rows]; //updating the rows array to reflect in template
            console.log(JSON.parse(JSON.stringify(this.rows)));
        }
      } 

    handleSubmit(){
        this.rows.forEach(item => {
            console.log('id:', item.id, 'amount:', item.amount,'date:', item.date);
        });
    }
}