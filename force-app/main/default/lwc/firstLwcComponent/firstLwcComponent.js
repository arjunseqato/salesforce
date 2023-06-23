import { LightningElement, api, wire } from 'lwc';
import getContactList from '@salesforce/apex/firstClass.getContactList';
import getAccountList from '@salesforce/apex/firstClass.getAccountList';

export default class FirstLwcComponent extends LightningElement {
    company = 'Seqato';
    inputText = '';
    @api message = 'This is an api message';

    // @wire(getContactList)
    // wiredData({ error, data }) {
    //   if (data) {
    //     console.log('Data', data);
    //     this.result = data;
    //     this.error = undefined;
    //   } else if (error) {
    //     console.error('Error:', error);
    //     this.result = undefined;
    //     this.error = error;
    //   }
    // }


    handleChange(event) {
        this.inputText = event.target.value;
        window.console.log('event target', event.target);
    }

    handleSubmit(){
        alert('Button Clicked')
        getAccountList()
          .then(result => {
            console.log('Result', result);
            this.result = result;
            this.error = undefined;
          })
          .catch(error => {
            console.error('Error:', error);
            this.error = error;
            this.result = undefined;
        });
    }
}