---
id: generating-fake-test-data
title: Generating Fake Test Data
sidebar_label: Generating Fake Test Data
keywords:
    - api-testing
    - how-to
    - fake-test-data
---

import useBaseUrl from '@docusaurus/useBaseUrl';


## *Introduced in API Fortress 17.1.0*

Does your API or test require random full names, valid/invalid ids, or various types of input data? Well now you can generate these random data points directly in API Fortress with the Fake Data Generator.

There are a couple of ways you can generate this data:

* You can directly reference the method within your variable, API call, or anywhere in the test where you can type in the following syntax: "${F.zipCode()}"
  For example:
  
  <img src={useBaseUrl('img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-11.33.10-AM.png')} alt="screenshot" />

  <img src={useBaseUrl('img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-11.57.30-AM.png')} alt="screenshot" />

* You can use the "Fake data generation" component to generate this data.

  <img src={useBaseUrl('img/api-fortress/2019/07/Screen-Shot-2019-07-16-at-3.06.57-PM.png')} alt="screenshot" />

There are a few different ways this component can be used. You can use it to generate a string, array, or an object. See below for examples.

### 1. Generate a String 

   <img src={useBaseUrl('img/api-fortress/2019/07/Screen-Shot-2019-07-16-at-3.12.14-PM.png')} alt="screenshot" />

   * _Var_ - name of variable in which data will be stored (for referencing in the test elsewhere) 
   * _Variable mode_ - String (single piece of data) 
   * _String_ - Here you will put the name of the type of data you want. See the list below for all options. Some examples are _firstName_, _lastName_, and _emailAddress_. 
   * _Count_ - How many examples of this data type would you like to generate.

   <img src={useBaseUrl('img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-12.04.03-PM.png')} alt="screenshot" />

### 2. Generate an Array

   <img src={useBaseUrl('img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-2.27.03-PM.png')} alt="screenshot" />
 
   * _Var_ - name of variable in which data will be stored (for referencing in the test elsewhere) 
   * _Variable mode_ - Array (multiple data points) 
   * _Array_ - Here you will put the name of the type of data you want. See the list below for all options. Some examples are _firstName_, _lastName_, and _emailAddress_. 
   * _Count_ - How many arrays of these data types would you like to generate. (Notice that the count field has been left blank, in that case the system will generate 1 iteration of the data)

   <img src={useBaseUrl('img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-2.27.50-PM.png')} alt="screenshot" />

### 3. Generate an Object

   <img src={useBaseUrl('img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-2.35.23-PM.png')} alt="screenshot" />

   * _Var_ - name of variable in which data will be stored (for referencing in the test elsewhere) 
   * _Variable mode_ - Object (a map of name:data point). This is often used to create JSON objects. 
   * _Array_ - Here you will put the name of the type of data you want. See the list below for all options. Some examples are _firstName_, _lastName_, and _emailAddress_. 
   * _Count_ - How many strings of this data type would you like to generate.

   <img src={useBaseUrl('img/api-fortress/2019/07/Screen-Shot-2019-07-19-at-2.45.35-PM.png')} alt="screenshot" />

## List of Methods

Please note that the method itself is listed below. When using the Fake data component only use the name of the method without the "()"
This library based on java faker provides several methods to generate fake data

### Addresses and Countries
  - **streetName**(): provides random street name
  - **streetAddressNumber**(): provides random address number 
  - **streetAddress**(`<boolean secondary>`): provides random street and address number. If secondary specifided provides apt number.
  - **secondaryAddress**(): provides random apt number
  - **zipCode**(`<String state>`): provides random zip code. If state provided provides proper zip code for the state **(valid only for US states) 
  - **streetSuffix**(): provides random street suffix
  - **streetPrefix**(): provides random street prefix
  - **citySuffix**(): provides random city suffix
  - **cityPrefix**(): provides random city prefix
  - **city**(): provides random city Name
  - **cityName**(): provides random city Name
  - **state**(): provides random state/province
  - **buildingNumber**(): provides random build number
  - **fullAddress**(): provides random full adress
  - **country**(): provides random country
  - **countryCode**(): provides random country code
  - **countryCodeSL**(): provides random country code in small letters
  - **countryCodeSL3d**(): provides random country code in small letters on 3 digits
  - **capital**(): provides random capital city    
  
### People and People identity
  - **fullName**(): provides random full name
  - **firstName**(): provides random first name
  - **lastName**(): provides random last name
  - **profession**(): provides random profession
  - **timeZone**(): provides random time zone
  - **validID**(): provides random valid ID
  - **invalidID**(): provides random invalid ID
  - **validSSN**(): provides random valid SSN
  - **invalidSSN**(): provides random invalid SSN  
  - **phone**(): provides random phone number 
  - **mobile**(): provides random mobile number
  
### Internet  
  - **emailAddress**(): provides random email address 
  - **domainName**(): provides random domain name
  - **domainWord**(): provides random word
  - **domainSuffix**(): provides random suffix
  - **url**(): provides random url
  - **password**(`<minimumLength,maximumLength,includeUppercase,includeSpecial,includeDigit>`): provides random password
  
### Credit Card  
  - **creditCardNumber**(): provides random credit card number
  - **creditCardExpiry**(): provides random credit card expire date
  - **creditCardType**(): provides random credit card type
  
### Products  
  - **productName**(): provides random product name
  - **material**(): provides random material
  - **price**(): provides random price
  - **promotionCode**(): provides random promotion code
  
### Companies
  - **companyName**(): provides random company name
  - **suffix**(): provides random company suffix
  - **industry**(): provides random industry

### Currency
  - **currency**(): provides random currency
  - **currencyCode**(): provides random currency code
  
### Random Numbers  
  - **integer**(`<min,max>`): provides random integer number
  - **decimal**(`<min,max,maxdecimals>`): provides random decimal number
  - **uuid**(): provides random unique identifier
  
### Boolean
  - **bool**(): provides random boolean value
  
### Collection/single Data  
  - **collection**(`<number_of_elements,"method">`): 
    - provides a list of elements generated by "method".
    - The single element is a simple string. 
    - The size of the list is equal to the number_of_elements
  - **collection**(`<number of elements,["method1","method2",...,"methodN2]>`): 
    - provides a list of elements generated by the list of methods provided. 
    - The single element is a list. 
    - The size of the list is equal to the number_of_elements
  - **collection**(`<number of elements,[method1: 'method1',method2:'method2',...,methodN:'methodN'>`): 
    - provides a list of elements generated by the list of methods provided. 
    - The single element is a map. 
    - The size of the list is equal to the number_of_elements
  - **single**(`<"method">`): 
    - provides an element generated by "method".
    - The element is a simple string.
  - **single**(`<["method1","method2",...,"methodN2]>`): 
    - provides an element generated by the list of methods provided. 
    - The element is a list.
  - **single**(`<[method1: 'method1',method2:'method2',...,methodN:'methodN'>`): 
    - provides an element generated by the list of methods provided. 
    - The single element is a map 

