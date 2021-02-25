---
id: github-for-datasets
title: "GitHub – How to Use Files as Datasource (Large or Small Datasets)"
sidebar_label: "GitHub – Use Files as Datasource"
keywords:
    - api-testing
    - how-to
    - github
---


Github is a valuable platform to use when you want to pull files and use them as a datasource. Some examples are CSVs and JSON files. Below is a walk through on how to make them work.

## Set up GitHub

- Create a new access token associated to your GitHub profile by accessing  [https://github.com/settings/tokens](https://github.com/settings/tokens)

- [![1](https://apifortress.com/doc/wp-content/uploads/2018/04/1.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/1.png)When creating the token make sure you're selecting the **public\_repo** subcategory or the **repo** category based on which type of repository that will host your input data.[![2](https://apifortress.com/doc/wp-content/uploads/2018/04/2.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/2.png) Keep in mind that GitHub will show you the token only once, so make sure you’re copying and pasting it somewhere safe and accessible.

- Create a repository that will host your input data if one doesn't exist already.

- Commit and push a data source file. It can be a CSV, JSON or XML file. We will use a CSV file for the purposes of this example.[![3](https://apifortress.com/doc/wp-content/uploads/2018/04/3.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/3.png)
    
## Create a simple test
    
- Create a test

- Introduce the GitHub component and configure it accordingly[![4](https://apifortress.com/doc/wp-content/uploads/2018/04/4.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/4.png)
- **Account** is your GitHub username
- **Repository** is the name of the repository that your data file is pushed to.
- **Branch** is the repository branch that the desired version of the data file is in.
- **Token** is the token described above, generated in the GitHub platform.
- **Variable** is the variable that the payload will be stored under.
- **Path** is the name of the file in the repository.
- **Mode** is the filetype of the file in the repository.

- The system will retrieve the document, parse it as a CSV file and assign it to the **inputData** variable

- (optional) Verify that everything is set up correctly by adding a comment printing the parsed data as in:[![5](https://apifortress.com/doc/wp-content/uploads/2018/04/5.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/5.png)
- (Optional) Run the test:[![6](https://apifortress.com/doc/wp-content/uploads/2018/04/6.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/6.png) **NOTE:** API Fortress will parse a CSV file as an array (rows) of arrays (columns), so access to the data is positional. 

- Now, let’s iterate over a subset of this input set. Introduce a selection strategy if necessary: [![7](https://apifortress.com/doc/wp-content/uploads/2018/04/7.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/7.png)This will iterate over a subset of 5 randomly selected items. Other strategies are described in Appendix A

- (Optional) Within each iteration, we suggest that you introduce a comment that will help you identify which item you’re looking at for debugging purposes.[![8](https://apifortress.com/doc/wp-content/uploads/2018/04/8.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/8.png) [![9](https://apifortress.com/doc/wp-content/uploads/2018/04/9.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/9.png)
- Use the data to perform your HTTP call:[![10](https://apifortress.com/doc/wp-content/uploads/2018/04/10.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/10.png)
- Introduce some assertions for testing purposes[![11](https://apifortress.com/doc/wp-content/uploads/2018/04/11.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/11.png)
- And run it[![12](https://apifortress.com/doc/wp-content/uploads/2018/04/12.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/12.png)

## Appendix A: Selection Strategies for Large Datasets

### Simple selectors

- **None.** If the number of iterations is greater than 100, the system will randomly select 100 elements, unless you override the maximum iterator size.

- **Pick(n).** Ask the system to randomly select a _n_\-sized sample of elements. Example: **inputData.pick(5)**

- ****Slice.** If you’re interested in using a specific slice of data from the **inputData**, you can slice it according to your needs. Example: **inputData\[10..20\]** (will select items from index 10 to index 20)**

### Advanced Slicing

Assume you have a 1000 lines CSV file and you need to use them all. While this is technically possible (by overriding the maximum number of iterations) the usefulness of the test may vary on:

1. How long the HTTP request takes
2. How complex the test is going to be
3. The number of errors the test may trigger

Moreover, the readability of the resulting document may degrade when trying to debug an issue.

Here’s a slicing technique we suggest to ease these points.

- Introduce the following 2 variables in the global parameters: [![13](https://apifortress.com/doc/wp-content/uploads/2018/04/13.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/13.png)
- Use the following expression in your each statement: 
  
  ```js
  inputData[offset.toInteger().offset.toInteger()+limit.toInteger()]
  ```
  
  Which reads: _slice inputData from the offset index to the offset+limit index_ 
  
  > **NOTE:** the `toInteger()` command is required as variables are always strings and we need to work with numbers. 
  
  By doing so we are setting a baseline: as a default test input data from index 0 to index 99.

- Introduce as many environments as the slices count, overriding the offset variable
  
  [![15](https://apifortress.com/doc/wp-content/uploads/2018/04/15.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/15.png)
  
  Now you can run the test on specific 100 elements slices, by selecting the environment.
  
  [![16](https://apifortress.com/doc/wp-content/uploads/2018/04/16.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/16.png) 
  
  [![17](https://apifortress.com/doc/wp-content/uploads/2018/04/17.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/17.png) 
  
  [![18](https://apifortress.com/doc/wp-content/uploads/2018/04/18.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/18.png)

- Finally, you can schedule your slices accordingly:
  
  [![19](https://apifortress.com/doc/wp-content/uploads/2018/04/19.png)](https://apifortress.com/doc/wp-content/uploads/2018/04/19.png)
