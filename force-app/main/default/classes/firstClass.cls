public with sharing class firstClass {
    public firstClass() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [Select Id, Name, Email From Contact Limit 20];
    }

    @AuraEnabled
    public static List<Account> getAccountList(){
        return [Select Id, Name From Account Limit 2];
    }
}