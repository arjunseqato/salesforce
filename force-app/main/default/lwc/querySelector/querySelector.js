import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    
    fName ='';
    mName ='';
    lName = '';

    handleClick(event) {
        const fields = this.template.querySelectorAll('lightning-input');
        // console.log(fields); 
        fields.array.forEach(item => {
            if(item.name == 'fName') {
                this.fName = item.value;
            } else if (item.name == 'lName') {
                this.mName = item.value;
            } else if (item.name =='lName') {
                this.lName = item.value;
            }
        }, this);
    }
}