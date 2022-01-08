---
title: "Predicting Flight Delays - Applied Machine Learning"
date: 2022-01-08
draft: false
img: /images/project.jpg
description: "This was the final project devolped for the course Applied Machine Learning from the Data Science degree at University of Amsterdam."
github: https://github.com/FranciscoPereira9/AML-Flight-Delays
featured: / 
---



## Project

This project was a Kaggle competition in which students were asked to come up with creative approaches to the different problems faced. 

## Node Algorithm for Tabular Data

Deep Learning has provided major breakthrough dealing with vision and text. For tabular data,  Gradient Boosted Decision Trees (GBDTs) are state-of-the-art and usually perform better than DNNs. 

Node [1] merges both techniques GBDTs and DNNs and claims to achieve state-of-the-art results.  How does it work? Traditional decision trees are not differentiable since they use binary splitting features. Differentiable models are necessary for gradient descent optimization and backpropagation. Node makes decisions trees differentiable and allows for end-to-end training via back-propagation like in "normal" DNNs.

![node_aml](C:\Users\kicop\Git_Repo\franciscopereira9.github.io\content\project\node_aml.jpeg)

[1] Sergei Popov, Stanislav Morozov, & Artem Babenko. (2019). Neural Oblivious Decision Ensembles for Deep Learning on Tabular Data.
