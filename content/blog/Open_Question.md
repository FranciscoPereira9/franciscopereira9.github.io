---
title: "Action Recognition"
date: 2021-11-23T12:00:00
draft: false
github_link: "https://github.com/"
author: "Francisco Pereira"
tags:
  - Emoji support
bg_image: ""
description: ""
toc: 
---

## Open Question

We are given the machine learning task of classifying videos into actions using deep networks. This task is different from image classification using convolutional networks, as each example has an additional temporal dimension with information. For images, the input is $width * height * 3$, where 3 denotes the number of colour channels (red, green, blue). For videos, the input is $width*height*length*3$.

Describe a system for action classification in videos using deep networks. Describe:

1. How your system incorporates information from the temporal dimension;
2. How to deal with videos of different length;
3. For which actions your system might fail.

## Answer

To think about a system for action classification it is important to first think about the meaning of an action. An action can always be divided into sub-actions, and it depends not only in the temporal dimension but also on the spatial one. If we're recording the entrance of building with an automatic  we are probably going to see people walking in and out. 

- Entering the building: a person appears, the person walks, the door opens and the person disappears;
- Exiting the building: the door opens, a person appears, the person walks and the person disappears; 

Despite both actions being composed of pretty much the same sub-actions, the order in which they are performed from the perspective being considered is important. Spatiotemporal information is important. 

A video is a stack of frames. First, image classification or object recognition needs to be performed. This way some context is introduced and the initial state is defined. After performing this step for all the frames, we would have an output where for each frame a vector would have encoded the objects and their positions. The second step would be to perform a operation that would allow the model to be aware of the previous state and identify and associate the same objects between time stamps to account for movement. Lastly, objects and their movement need to be analysed from a backwards perspective. The network would essentially have two parts; one contextualizes and defines the scene, and the other learns how actions can be defined by the different relations between movement and time.

So, in the first part of the network we are applying a object recognition model to each frame where for an input of $width*height*length*3$, we would get something like $objects*(classes*5)*length$ - for each possible class in each object of an image a vector with the probability of the object belonging to that class and the coordinates. Video frames have a lot of redundant information, which means this output could be projected in a lower dimensional embedding of a fixed sized, while still retaining the most important information. Another CNN could again be used to capture the main features of this embedding and produce an output.

## Research

<a id="1">[1]</a>  ST-CNN: Spatial-Temporal Convolutional Neural Network for crowd counting in videos. Yunqi Miao, Jungong Han, Yongsheng Gao, Baochang Zhang; Pattern Recognition Letters, 2019, Volume 125, pp. 113-118.

- Networks in the setting of videos need access to the temporal evolution of frames.
- 

<a id="2">[2]</a> Large-scale Video Classification with Convolutional Neural Networks. Andrej Karpathy, George Toderici, Sanketh Shetty, Thomas Leung, Rahul Sukthankar, Li Fei-Fei; Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2014, pp. 1725-1732

<a id="3">[3]</a> https://blog.qure.ai/notes/deep-learning-for-videos-action-recognition-review

- Action classification in videos requires the ability to capture one extra dimension - the spatiotemporal one. 
- There's a need to capture the local and global context of the action. 
- Options of designing spatiotemporal architectures:
  - 1 network for capturing spatiotemporal information vs. 2 separate ones for each spatial and temporal
  - Fusing predictions across multiple clips
  - End-to-end training vs. feature extraction and classifying separately
- 

## References

<a id="1">[1]</a> Dijkstra, E. W. (1968). Go to statement considered harmful. Communications of the ACM, 11(3), 147-148.