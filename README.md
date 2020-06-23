# IoT_ETL

Extract, Transform, Load, Analyze simulation for IoT data

Accompanying article on The Startup: https://medium.com/swlh/processing-iot-data-with-node-js-typescript-a392be124084

# Running the Project

1. Clone repo to local directory (make sure Node.js v. 8 or later is installed)
2. Run `npm install` to install node dependencies
3. Run `npm start` to simulate the data flow

# Program Functionality

This simulator uses an asynchronous generator to act as an emitter of data for various IoT devices.

The program asynchronously iterates through this generator until it reaches the specified iteration count. As it iterates, the data is held in an array until iteration is finished. This array data is then stringified and sent to a temp JSON file.

Once a device's data is completely loaded in temp, the analysis module will read from the appropriate JSON file, perform analaysis, and log results to the console.

All temp files are cleared before the program exits.
