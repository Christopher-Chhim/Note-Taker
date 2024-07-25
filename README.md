# Note-Taker

## Description

My motivation in developing this project was to create a note-taking template so I can organize my thoughts. This is my first time using express.js so I wanted to implement its functionality to generate a note-taking app. This application will use Express.js for the back end and will save and retrieve note data from a JSON file. This is also my first time working with insomnia to create routes and endpoints to modify the middleware of an API. This note-taking app helps those that need help in organizing their apps while also helping them gain an understanding on how to work with the back end. 

## Installation

Download VSCode.
Download Node.js.
Download inquirer (npm install).
Download insomnia.

## Usage

Run 'node index.js' on the terminal. Use the 'POST' method on Insomnia and alter the title and text to your liking. Once you hit the 'Send' button, check to make sure that the returned text and title is correspondent to your input and that a random ID for the note has been generated. Copy the localhost's link on the browser to check the functionality of your website. Upon loading the website, a 'Get Started' button should appear and redirect the user to the '/notes' route. The website should already contain preexisting notes and you should be able to generate a new note on the left-hand column of the website once the user hits 'Save Note'. Additionally, if the user so chooses to delete their current note, the 'Clear Form' button should erase the user's current note.  


## License

MIT License

Copyright <2024> <Christopher Chhim>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![opensource](https://img.shields.io/badge/generator-open_source-blue)

## Tests

Type whatever you like and see if your note is being generated on the left-hand side. Make sure to check that the generated note corresponds to your input and if there are existing notes in that same column due to prior input. 