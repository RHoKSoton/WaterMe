#WaterMe

Aim: To extract and visualise NDWI data processed from raw Modis Data

WaterMe is in two modules, the Web module which is in the repository you're looking at and the DataWorker/Feeder Located at [https://github.com/RHoKSoton/WaterMeFeeder](https://github.com/RHoKSoton/WaterMeFeeder).

For an insight into what this project does go to the RHoK (Random Hacks of Kindness) Entry at [http://www.rhok.org/problems/development-operational-water-stress-product-satellite-imagery](http://www.rhok.org/problems/development-operational-water-stress-product-satellite-imagery)

##SetUp and Run

####Requirements:

* [MySQL Database](http://dev.mysql.com/downloads/mysql/) with data from the [Feeder](https://github.com/RHoKSoton/WaterMeFeeder)
* [NodeJS](http://nodejs.org/)
* [NPM (Node Package Manager)](http://npmjs.org/)

####Set Up

You Shall need to install the node libraries/dependancies by running the following when in the root of the directory.

	npm install .
	
####Running

Run the command:

	node server.js
	
Then open your web browser and goto [http://localhost:3000/](http://localhost:3000)