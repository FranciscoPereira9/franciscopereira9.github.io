---
title: "Predicting Flight Delays"
date: 2022-01-08
draft: false
img: /images/node_aml.jpeg
description: "This was the final project developed for the course Applied Machine Learning from the Data Science MSc degree at University of Amsterdam."
github: https://github.com/FranciscoPereira9/AML-Flight-Delays
featured: / 
---



## Project

This project was a Kaggle competition in which students were asked to come up with creative approaches to the different problems faced. 

## Node Algorithm for Tabular Data

Deep Learning has provided major breakthrough dealing with vision and text. For tabular data,  Gradient Boosted Decision Trees (GBDTs) are state-of-the-art and usually perform better than DNNs. 

Node [1] merges both techniques GBDTs and DNNs and claims to achieve state-of-the-art results.  How does it work? Traditional decision trees are not differentiable since they use binary splitting features. Differentiable models are necessary for gradient descent optimization and backpropagation. Node makes decisions trees differentiable and allows for end-to-end training via back-propagation like in "normal" DNNs.

[1] Sergei Popov, Stanislav Morozov, & Artem Babenko. (2019). Neural Oblivious Decision Ensembles for Deep Learning on Tabular Data.
