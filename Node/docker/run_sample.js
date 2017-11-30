'use strict';

const fs         = require('fs')
const path       = require('path')
const child_proc = require('child_process')
const process    = require('process')

const samples = fs.readdirSync(__dirname)
                  .filter(function(v, i, a) {return fs.existsSync(path.resolve(v, 'app.js'))})

if (process.argv.length < 3 || !samples.includes(process.argv[2])) {
    console.log('Please provide the name of a sample to run from the following list:\n' + samples.join('\n'))
    process.exit(1)
}

console.log('Starting sample: ' + process.argv[2])

const cp = child_proc.spawn('node', [path.resolve(__dirname, process.argv[2], 'app.js')])
cp.stdout.on('data', (data) => {process.stdout.write(`${data}`)})
cp.stderr.on('data', (data) => {process.stderr.write(`${data}`)})
