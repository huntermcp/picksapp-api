'use strict';

const serverless = require('serverless-http');
const express = require('express')
const app = express()
const utils = require('./utils')
const gameMock = require('./models/sports/mocks/gameMock.js').gameResponse
const leaguesMock= require('./models/sports/mocks/leaguesMock.js').leaguesResponse


app.get('/', function (req, res) {
  res.send('Healthy!')
})

app.get('/matchups', async function (req, res) {
  let response = await utils.sendRes(200, [gameMock, gameMock, gameMock])
  return res.json(response)
})

app.get('/leagues', async function (req, res) {
  let response = await utils.sendRes(200, leaguesMock)
  return res.json(response)
})

app.post('/wager', async function (req, res) {
  let wager = req.body.data
  if (wager.name && bet.wager && bet.id) {
      return res.json({status: 200, message: "Wager placed!"})
  }
})

module.exports.handler = serverless(app);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });

