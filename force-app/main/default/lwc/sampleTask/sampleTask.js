import { LightningElement } from 'lwc';

export default class SampleTask extends LightningElement {
    
    hide = true;
    rows = [];
    amount = '';
    date = '';
    rowId = 0;

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
                id: this.rowId++,
                amount: this.amount,
                date: this.date
            });
            this.amount ='';
            this.date = '';
            console.log(JSON.parse(JSON.stringify(this.rows)));
        }
    }

    deleteRow(event) {
        const rowId = parseInt(event.target.dataset.id);
        this.rows.splice(rowId, 1);  //removing the element from array
        this.rows = [...this.rows]; //updating the rows array to reflect in template
        console.log(JSON.parse(JSON.stringify(this.rows)));
    }
    
    

      

    handleSubmit(){
        this.rows.forEach(item => {
            console.log('id:', item.id, 'amount:', item.amount,'date:', item.date);
        });
    }
}