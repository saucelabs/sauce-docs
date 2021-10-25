---
id: expression-language-extensions
title: Expression Language Extensions
sidebar_label: Expression Language Extensions
keywords:
    - api
    - api-fortress
    - expression-language-extensions
---


## Preamble

The API Fortress expression language is mostly used to identify a path in a payload, or reference a variable. But there's more to it. A number of extensions are available to generate calculated data, determine the quality of a value and so on. These _extensions_ can be used in any field that can be evaluated, which means in all _expression_ fields, and all the fields where the value is wrapped in the _${...}_ brackets.

### `anyArrray.pick(n)`

Given any array, you can ask the system to create a random subset of it. One typical usage is when an iterator would turn out to be huge, and you prefer to cherry-pick a few items.

```groovy
payload.artists.pick(5)
```

The code above will return an array of 5 random elements off the _artists_ array.

A hands on example:

```xml
<each expression="payload.artists.pick(5)"> <assert-exists expression="_1.href" /> <assert-exists expression="_1.id" /> ... </each>
```

### `anyArrray.pick()`

Similar to the pick(n), this method will pick one random item off an array, and return it.

### WSUtil

This is the main extension. It supports many useful functions.

- **composeUrl(base : String, params : Map) : String :** creates a valid URL string based on these 2 params.
    
  ```groovy
  WSUtil.composeUrl('http://www.testurlwhatever.com/index',['page':1] )
  ```  
  
  Returns **http://www.testurlwhatever.com/index?page=1**
    
  ```groovy
  WSUtil.composeUrl('http://www.testurlwhatever.com/index?offset=5', ['page':1] )
  ```
  
  Returns:
  ```
  http://www.testurlwhatever.com/index?offset=5&page=1
  ```
  
- **exists(object : Object) : Boolean :** an XML and JSON existence state is different by definition. Use this in an "if statement" if a test should work both with JSON and XML
- **contains(substring : String, object : Object) : Boolean :** returns true whether the string version of "object" contains the "substring" sub-string.
    
  ```groovy
  WSUtil.contains('banana', payload.fruit.name)
  ```  
  
- **isInteger(string: String) , isFloat(string: String), isUrl(string: String), isEmail(string: String), isPhoneNumber(string: String), isBoolean(string: String), isArray(object: Object), isMap(object: Object), isCreditCard(string: String) : Boolean :** evaluate the nature of a data item

### `N`

Utility functions for numbers.

- **random(min: Int, max: Int) : Int** : generates a random integer number between min and max.
    
  ```groovy
  N.random(10,30)
  ```
    
- **random(min: Int, max: Int, quantity: Int) : List :** generates a list of random numbers
    
  ```groovy
  N.random(10,30,5)
  ```  

### `D`

Plays with dates.

- **nowMillis() : Int :** returns the current Unix epoch in milliseconds.
- **plusDays(millis: Int, days: Int): Int** : returns the provided milliseconds, plus the provided number of days
- **plusHours(millis: Int, hours: Int): Int** : returns the provided milliseconds, plus the provided number of hours
- **minusDays(millis: Int, days: Int) : Int** : returns the provided milliseconds, minus the provided number of days
- **minusHours(millis: Int, hours: Int): Int** : returns the provided milliseconds, minus the provided number of hours
- **format(millis: Int, format: String) : String** : creates a timestamp with the given format, using the current timezone
- **format(millis: Int, format: String, timezone: String) : String :** creates a timestamp with the given format, based on the provided timezone id
- **format(millis: Int, format: String, offset: Int) : String :** creates a timestamp with the given format, based on the provided timezone offset
- **parse(timestamp: String) : Int** : tries to parse the provided timestamp and convert it in milliseconds. It will use current timezone if not provided
- **parse(timestamp: String, timezone: String) : Int** : parses the provided timestamp and coverts it in milliseconds with the provided timezone id
- **parse(timestamp: String, offset: Int) : Int** : parses the provided timestamp and coverts it in milliseconds with the provided timezone offset.

Here's the conversion map for formats:

 Symbol  Meaning                      Presentation  Examples
 ------ ------- ------------ -------
 G       era                          text          AD
 C       century of era (>=0)         number        20
 Y       year of era (>=0)            year          1996

 x       weekyear                     year          1996
 w       week of weekyear             number        27
 e       day of week                  number        2
 E       day of week                  text          Tuesday; Tue

 y       year                         year          1996
 D       day of year                  number        189
 M       month of year                month         July; Jul; 07
 d       day of month                 number        10

 a       halfday of day               text          PM
 K       hour of halfday (0~11)       number        0
 h       clockhour of halfday (1~12)  number        12

 H       hour of day (0~23)           number        0
 k       clockhour of day (1~24)      number        24
 m       minute of hour               number        30
 s       second of minute             number        55
 S       fraction of second           millis        978

 z       time zone                    text          Pacific Standard Time; PST
 Z       time zone offset/id          zone          -0800; -08:00; America/Los\_Angeles

### `WSCrypto`

Encryption utilities.

- **md5(input : String) : String** : returns the md5 hash of the input string
- **hash(input : String) : String :** returns the SHA-1 hash of the input string, hex encoded
- **genKey() : String :** generates a a random key
- **base64(action: String, input: String)** : decodes from or encodes into a base64 string. Action can either be 'encode' or 'decode'
    
  ```groovy
  WSCrypto.base64('encode','whatever')
  ```
  
- **base64Encode(input : Array\[Byte\]) : String :** encodes a byte array in a base64 string.
- **sha256(input : String) : String** : creates an hash of input using the SHA-256 algorithm
- **sha256(input : String, secret : String) : String :** encrypts input with secret using the HMAC-SHA256 algorithm
- **hmacSha1(input : String, secret : String) : String** : encrypts input with secret using the HMAC-SHA1 algorithm
- **toHex(input : Array\[Byte\]) : String** : creates an hex version of a byte array
