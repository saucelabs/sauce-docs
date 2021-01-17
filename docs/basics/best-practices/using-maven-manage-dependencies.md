---
id: using-maven-manage-dependencies
title: Using Maven to Manage Dependencies
sidebar_label: Using Maven to Manage Dependencies
---
If you use use Maven as the dependency manager for your projects, this will give you some insight into how it works, along with some useful commands. You will find these especially helpful if you are using a private repository as the main repo to source the dependencies for your project. By using the dependency list generation methods described here, you can greatly reduce the workload needed to make dependencies available in your private repository, or locally if you intend to run your project offline.

## How Maven Manages Dependencies

You add dependencies for your project to your Maven configuration file (also known as the pom.xml file, for Project Object Model). As you build your project using Maven, it resolves these dependencies and downloads the dependencies to your local repository folder. This folder is usually located in your user’s home folder and is named .m2. Each dependency downloaded from the repository is a project itself, and has its own dependencies. Maven recursively resolves all of these dependencies for you, and then merges shared dependencies and downloads them. At the ed of the process you end up with a list of dependencies that are needed to run your project on your local machine. For full details about how this process works, see the [Maven documentation](http://maven.apache.org/guides/index.html).

## Finding the Dependencies for Your Project

It's critical that you know exactly what dependencies are required for a project, or if you don’t have Internet access or are trying to run your project offline, how to ensure you have all the dependencies you need available locally. Maven includes several commands to ensure you have all the dependencies and repositories set up so that your project will build and run with no errors.

1. Check for version updates to your dependencies, and then update the outdated dependencies in your pom.xml file as necessary.
```js
$ mvn versions:display-dependency-updates
```
2. Get a list of your repositories, and make sure they’re pointing to all the correct dependencies.
```js
$ mvn dependency:list-repositories
```
3. Get a list of your plugin and project dependencies, and make sure they’re all available in your private or local repository.
```js
$ mvn dependency:go-offline
```

If you want to automate the process, or just get a cleaner output of your dependencies, you can use this bash command:

```js
$ mvn -o dependency:go-offline|grep ":*.jar"|awk '{split($0,a,":");print a[2]}'
```
