# CORONA-INFO
<img src="https://user-images.githubusercontent.com/40866831/178515383-afa9080f-4663-42cb-a89e-926605c33499.png" width="200" height="200" />
Native application project aimed at supporting the difficult global situation related to coronavirus.

In the application you will find reliable, official information on the current situation related to the coronavirus pandemic. 
You can learn how to take precautions and what to do in the event of suspected infection in yourself or your loved ones.

The project is a typical information application. It consists of many different tabs - FAQ on the pandemic situation, covid statistics in Poland and in the world, news articles and a "rapid response algorithm" providing informations depending on the pandemic situation of the user.


<b>The project is made for self-development purposes.</b>

## General informations

Date of project creating: 29.05.2020

Project language: Polish

Due to the inactivity of the data on which it was based on, the project is mostly inactive. But still works.

## Technologies used
* react-native
* vanilla javascript
* expo as compiling/preview service
* photoshop for creating grahpics

##  Internal specification
The program is implemented with a structural paradigm. User
interface is separated from the program's logic.

## Project construction specification
react-native version: 0.61.4

sdk project version: 37

supported expo mobile app for sdk v37: 2.18.3 (2020-12-09)
## Setup 

Install yarn via npm or your own system package manager.

If you acutally obtained it before, do not forget to upgrade it:

`$  yarn upgrade`

Using yarn, get all needed node_modules by comannd:

`$  yarn`


Install globaly expo-cli: 

`$  yarn global add expo-cli`

Build .apk application by:

`$  expo build`

Or run live-preview by:

`$  expo start`

And scan qr code shown in terminal/localhost by expo mobile application.
## Law-based informations
All graphics included in the project were created in collaboration with Wojciech Boduch directly for the purpose of being used in the project, all rights reserved.

The application's content and its articles were created directly for the purpose of being used in the project, all rights reserved.

Content in the application presents informations (valid at the time the application was created) based on data of Polish Ministry of Health or the Chief Sanitary Inspectorate, compiled on the basis of data from the European Center for Disease Prevention and Control (ECDC) and the World Health Organization (WHO).

## Detailed description of application tabs
### Country (Poland) statistics section
The project contains directly scraped government data (ministry of health) on the number of infections and covid hospitals.
The data is properly parsed and presented in a graphical system that is easy to view. The legal issue regarding the use of data and resources from the Ministry of Health was agreed with it directly.

<img src="https://user-images.githubusercontent.com/40866831/178501605-1b76b46f-c736-42e1-a6d4-5067627e5e1d.jpg" width="200" height="400" />
<hr>
<h3>Worldwide statistics section</h3>

The project also includes a separate tab for covid statistics in all countries in the world - the use of my components to visualize data based on the API https://github.com/disease-sh/API


<img src="https://user-images.githubusercontent.com/40866831/178506026-8e0067b4-a727-4b64-8db0-be4a1c85f17b.jpg" width="200" height="350" />

<hr>
<h3> Rapid response algorithm section </h3>
Based on the data obtained by WHO, a special "rapid response" system has also been created, allowing for that time to make appropriate decisions in connection with the pandemic situation in which the user is specifically located.

System - the form consists of a dozen or so different scenarios dressed in a grid of questions regarding the procedure in relation to a specific situation, which finally directs to the last tabs presenting:
* detailed information
* links to WHO or government websites
* direct phonecall functional buttons to the appropriate support numbers
* etc.

<img src="https://user-images.githubusercontent.com/40866831/178506603-594d4cdb-7681-4d7a-9a8e-65230d1e3f1e.jpg" width="200" height="350" />

<hr>
<h3> Detailed statistics graphs section </h3>
In collaboration with Marcin Mnich and Michał Rogalski, with their permission, I have added to the seperate tab, their covid report to my application using proper parsing and web-view component.

Report is based on data from the ministry of health and voivodship self-governments showing accurate and highly detailed math data and predictions for covid-19 status.

Direct links to their project:
* https://datastudio.google.com/embed/u/0/reporting/60290996-339f-4bb4-bd45-4ef2e2754417/page/wIVJB
* https://twitter.com/micalrg/status/1238508622591725568
<img src="https://user-images.githubusercontent.com/40866831/178514026-6382a76b-1a47-49fc-aebf-3af532160ad2.jpg" width="200" height="350" />
<hr>
<h3> Articles section </h3>

The project has its own section of (selfwritten) blog-type articles.
Section contains an article search field and a button to use filtering.
Articles also use tags (keywords) to facilitate their search in the future.

<img src="https://user-images.githubusercontent.com/40866831/178524881-93c93ef8-67af-48ef-aa41-a79ab9a547ef.jpg" width="200" height="400" />

Section contains created by me one of the first in the world DIY graphical tutorial for making your own face mask.

<img src="https://user-images.githubusercontent.com/40866831/178524931-1fce41db-1525-4607-99e9-ce2ad7be1913.jpg" width="200" height="400" />
<hr>
<h3> Contact section </h3>
Project includes a contact template powered by an external system "nativeforms"


<img src="https://user-images.githubusercontent.com/40866831/178526512-1212086d-6940-4dc8-8e35-0148c4bc5052.jpg" width="200" height="250" />

