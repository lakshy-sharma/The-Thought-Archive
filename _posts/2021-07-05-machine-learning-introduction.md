---
layout: post
title: "Machine Learning: A Brief introduction."
date: 2021-07-05
author: "Lakshy Sharma"
---

Hello everyone in this article I shall talk about what is machine learning and what are basic techniques being used for applying machine learning in Artificial Intelligence.

Some basic questions that I seek to answer are : 
- What is Machine learning?
- What are the techniques used to implement Machine learning?
- Where is Machine Learning used in everyday life?
- What are the pros and cons of Machine Learning?
<!--display-->

# Machine learning - A method to teach machines how to think like humans.

Machine learning is a way of teaching a machine how to think like a human would and make decisions based on the past observations. 
The topics I will try to cover in this section are:
- How can machines think?
- What are the basic methods of machine learning? 
- What can Machine learning achieve?

But first a quick overview.

When we start trying to teach machines, we look at the only role models we have for intelligent thinking - humans. Thus, before trying to teach machines how to think and make decisions, we should first understand how humans think and make decisions.

We know how humans think :
- We evaluate current situations.
- We evaluate the past experiences stored in our memory.
- We then calculate our decisions to the current situations based on both parameters.

Let’s try to re-frame the above points.

Humans try to produce outputs (decisions) based on the inputs provided (current conditions) and the data collected in past (which is stored in their memory).

So, we can see that the human brain also functions like a computer when it comes to making decisions. The brain collects past experiences as memory and tries to produce outputs in present based on the current inputs and the data from memory.

Hence, if we have to teach a computer how to think like a human brain, we just need to follow these simple steps  

1. Provide computer with enough data. (Memory)
2. Ask it to learn from the data. (Training)
3. Give inputs and ask for outputs. (Decision making)

That’s it! 
And this is what I shall be talking about in this article from here on...

## What are the techniques used to implement Machine learning?

Now that we have a general overview of how machine learning works, let’s discuss the different methods to implement machine learning.

Below are different methods in which we may create a machine learning system and each method has its own pros and cons, I shall discuss each of these methods in brief.

1. Regression models.
    * Linear two and multi variable systems.
    * Non-linear systems
    * Logistic Regression
2. K means Clustering
3. Support Vector Machines
4. Decision Trees

Before we start here is an important point to remember.

**Machine learning is either based on supervised learning or on unsupervised learning.**

Supervised learning is a method used for training machines by providing them labeled data-set which means we have to tag each and every data point in a dataset.

Unsupervised learning is used for training models without using labeled data, such techniques rely on the models to find similarities between the data points by exploration and classify them into groups of similar data points.

Now that we have a broad overview of types of machine learning we must go ahead and discuss the types of algorithms we use to implement Machine learning.

## Different types of Regression models

### Linear regression – Two variable

This is the most simple and fastest machine learning model.

We know that y = a*x +c is the equation of a linear line in maths and the linear regression tries to use this equation in order to find the relationship between two different variables.

In two variable linear regression the user will provide data and then define an independent variable (x) and a dependent variable (y).

Once the dataset is defined the model will explore the data and try to find how does a change in x impacts the variable y. Thus,the machine will try to find the ‘a’ and ‘c’ co-efficient values by exploring the dataset.

This algorithm is widely used where we need fast outputs and low accuracy is allowed.

### Linear Regression – Multiple variable

Another commonly used algorithm is multiple variable linear regression where a variable (y) is dependent on several factors (u,v,w,x). In this method too the machine will find how variation in any of the above 4 independent variable affects the output (y).

Thus, the system will learn how deflections in several independent variables affects the output of a system. Such algorithms are useful when we are working with systems where many factors are affecting the state of output.

### Non-linear Regressions – nth order regression.

In the linear regression we use only equations of order 1 but in the situations where the relation between independent and dependent variable is non-linear we can use nth order equation regression models to better suit our needs.

### Logistic Regression

The Logistic regression technique is used to predict binary outcomes by analyzing a data-set.

The technique uses a set of independent variables to predict a dependent variable which is supposed to be binary, thus this method is used where many factors affect the state of a variable which is binary in nature, example- spam filters where a mail is either spam or not spam depends on its contents.

## K means Clustering – Unsupervised

Fundamental approach to K means clustering is to divide the data containing N data points into K labeled groups. Which means to analyze large data sets and classify each data point into a cluster which can later be understood.

This technique works by first placing data points in a m dimensional space. (Where m is the number of variables upon which your data is dependent.) Now the euclidean distance is calculated between those points and the data points that are closer to each other are clustered together in K number of groups.

Thus, large sets of seemingly unrelated data points can be interpreted as a part of one big cluster with similar properties.

This technique is unsupervised and it works by classifying many points into fewer groups to make the data easier to analyze and comprehend without any human influence on the outcomes.

## Support Vector Machines – Supervised

Support vector machines work by creating a geographical plane/line to divide (classify) the data points. This works by iteratively adjusting the hyperplane/line to the data that is being added to the model.

This method is similar to K means approach but different at it’s fundamental approach as this method is a supervised method while the K means method is unsupervised model.

This means that while K means algorithm takes raw unlabeled data as input and identifies the clusters of data points by using euclidean distance, the support vector machines will first train on a labeled dataset and then classify the inputs based on the model generated by training.

i.e in the SVM the user will have to define the output classes while training the model and then new inputs will be classified into the classes defined by user while training the model, while in K means clustering the clusters are generated purely based on the input data points provided and user does not influence the output classes.

## Decision trees

These techniques are used to predict sequences of events like in a game of chess, if a player has made a particular move then computer can evaluate future moves by using the decision tree approach.

A decision tree is a technique in which we create a flowchart structure by using nodes, here each node shows a test point where a condition is checked to make a decision.

Each branch represents the outcome of the test and the final nodes show the probable outcome if a specific set of conditions is found to be true.

These models are very hard to create and are used only for high level predictions where one decision can have a major impact on the outcome of the systems output.

# Implementations of Machine learning

Machine learning algorithms are being used everywhere around us, every like or comment you make on social media is being analysed as data by these machine learning algorithms to learn more about your behavior and provide you better services.

Some of the examples of how these machine learning models are being used to provide us better services are.

* Linear regression is being used for predicting predict how consumer markets will behave to a new product launch.
* nth order regression techniques are used to predict the patterns of a pandemic.
* Logistic Regression and Naive Bayes classification techniques are used to detect spam by your email services.
* K means clustering can be used for:
    - Customer data analysis and customer behavior analysis.
    - Customer segmentation by analyZing behaviors and targeting ads.
    - City planning by analyzing medical emergency data over the city to create hospitals in crucial zones.
    - Decision tree and Random forest techniques are being used to predict outcomes of a sequence of events and in places where future predictions are to be made based on current data.

Some real life examples:
* Tech companies are analyzing the traffic data to understand the flow of traffic and provide us services like better navigation systems.-
* Machine learning is being used to analyse the current virus threats and predict the next generation of computer viruses, this helps us to create robust computer antivirus systems.

Implementations of machine learning is a very diverse subject and still a dynamic area of research.

# Pros and Cons of Machine learning

Although machine learning seems like a very useful tool for data analysis and decision making, it has its own downsides too.

And we shall now discuss the benefits and downsides of any machine learning system.

|   Benefits    |   Downsides    |
|---------------|----------------|
|* Faster data analysis.|* We must have a very large and diverse dataset in order to get reliable results.|
|* Less human intervention and less chance of human errors.|* The data entered must not have any human bias as it can affect the outcomes.|
|* Automation of complex tasks.|* Results must be analysed by keeping context in mind or else the results can be worthless. This requires trained data experts.|
|* Can provide in depth analysis of a dataset which can prove to be crucial in understanding various scenarios.|* Predictions are purely statistical hence not accurate in real life scenarios.|
|* We can use many types of models in order to gain insight.|* Selecting the correct model is necessary to gain useful insight from any data-set.|

# Conclusion

Machine learning is a evolving field where researchers are still developing new models for analyzing data faster and more accurately and it is already getting better at predicting patterns of human behavior and beating humans at games like chess.

As the limitations of processing speeds are being overcome by technological advancements in the electronics, machine learning has emerged as a field with immense potential for a future where computers will make the most of crucial decisions and improve the human life in numerous ways.

But today, machine learning has a long way to go and it is still in its beginning phase, a lot of innovation is yet to come which I hope you will be eager to become a part of.

I would like to conclude with a quote.

“A breakthrough in machine learning would be worth ten Microsofts”

~ Bill Gates

## References

For writing this article I have taken knowledge from following sources and would like to acknowledge them.

* https://en.wikipedia.org/wiki/Machine_learning
* https://www.geeksforgeeks.org/machine-learning/
