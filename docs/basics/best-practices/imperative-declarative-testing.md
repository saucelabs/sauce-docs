---
id: imperative-declarative-testing
title: Imperative and Declarative Testing
sidebar_label: Imperative and Declarative Testing
---
Imperative versus declarative test scenarios is a concept that is often discussed in the context of [Cucumber](https://cucumber.io/) and [Behavior Driven Development (BDD)](https://en.wikipedia.org/wiki/Behavior-driven_development), but it is applicable to all languages and test runners. (For more information about Cucumber, see Aslak Hellesøy's "[The training wheels came off](https://aslakhellesoy.com/post/11055981222/the-training-wheels-came-off)")

Imperative testing or programming is essentially spelling out with as much detail as necessary how to accomplish something.
Declarative testing or programming is only specifying (or declaring) what needs to be accomplished.
This is seen acutely in BDD circles because the goal of BDD is to get all of the interested parties (Project, Dev, Test, Business, etc.) to collaborate on the requirements of a feature before anyone begins working on the implementation. Many testers have latched on to BDD tools as glorified test runners rather than a way to actually facilitate BDD practices. This results in features that include actual code and data structures. Less problematic, but still usually missing the point, is a heavy reliance on imperative scenarios. For example:

1. Given I open a browser
2. And I navigate to http://example.com/login
3. When I type in the username field bob97
4. And I type in the password field F1d0
5. And I click the Submit button
6. Then I should see the message Welcome Back Bob

This scenario is not focused solely on the business requirements, and actually needs to have knowledge-implementation-specific details in order to work. The fact that the user’s username is bob97 has nothing to do with the business requirements of the company. If BDD features are designed to represent the business logic, then they should only be changed if the business requirements change. If bob97 changed his password to 1<3MyD0g, the page location changes, or the success message changes, this test would fail, even though the business needs are exactly the same.

A declarative example of the same functionality looks like this:

1. Given I am on the Login page
2. When I sign in with correct credentials
3. Then I should see a welcome message

This is all information that the business cares about, is easier to read, and leaves it to the implementation to specify how a successful login is accomplished.

This principle can be applied to any language or test runner. Tests should largely focus on what needs to be accomplished, not the details of how it is done. They should mostly be understandable when read by non-developers. This approach goes very well with using the page object methodology (See [PageObject](https://martinfowler.com/bliki/PageObject.html) for more information.). Keep the business logic in the test, and put all of the information about the drivers, the element locators, the timing, etc., in the page object.
