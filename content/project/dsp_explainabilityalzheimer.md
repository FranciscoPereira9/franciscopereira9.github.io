---
title: "Detecting Dementia"
date: 2022-04-18
draft: false
img: /images/dementia.jpg
description: "Prototype platform that detects dementia in brain scans and provides users with explainable predictions for black-box models."
github: /
featured: https://share.streamlit.io/rzepkka/dsp_project/main/app.py
---



## Motivation

Alzheimer's disease is the leading cause of dementia and one of the greatest medical challenges of our century. According to the World Alzheimer Report 2018, the illness impacted roughly 50 million individuals, with the number anticipated to quadruple by 2050. Alzheimer's symptoms are usually noticeable after 60 years of age. 



The leading techniques for diagnosis include medical imaging and blood plasma spectroscopy, which can identify the changes in the brain's structure and function. 

The transition from a healthy state to a demented one can take several years in Alzheimer's patients, thus, it is critical to diagnose Alzheimer's disease as soon as possible. The importance of early detection lies in the fact that it can assist physicians in making proper treatment decisions. Despite all the hard work that has gone into research, there are still no effective treatment options for the disease. 



Regarding medical image processing, Deep Learning has shown promising results when it comes to identifying slight anomalies in the brain structure that might indicate signs of dementia.  However, in order to properly translate machine learning models into the medical field, trust must be established. Explainability, or a machine learning model's ability to justify its findings and assist medical professionals in justifying the model prediction, has been determined as being crucial to building trust. Due to the black-box nature of Deep Learning algorithms, the integration of explainability into machine learning classification algorithms should be imperative, especially in high-risk situations where the algorithm's result must be convincing enough to avoid repercussions. 

We developed [this](https://share.streamlit.io/rzepkka/dsp_project/main/app.py) application that allows users to input brain scans and choose between different explainable methods to understand a Deep Learning model's prediction. Five different explainable methods, namely Saliency, Integrated Gradient, DeepLIFT, Grad-CAM and Occlusion, are used to explain the model's prediction. 

This project was done for the course Data Systems Project at University of Amsterdam. 
