

const game_schema = {
    "Game": {
      "properties": {
        "GameID": {
          "type": "integer"
        },
        "Season": {
          "type": "integer"
        },
        "SeasonType": {
          "type": "integer"
        },
        "Status": {
          "type": "string"
        },
        "Day": {
          "type": "string"
        },
        "DateTime": {
          "type": "string"
        },
        "AwayTeam": {
          "type": "string"
        },
        "HomeTeam": {
          "type": "string"
        },
        "AwayTeamID": {
          "type": "integer"
        },
        "HomeTeamID": {
          "type": "integer"
        },
        "StadiumID": {
          "type": "integer"
        },
        "Channel": {
          "type": "string"
        },
        "Attendance": {
          "type": "integer"
        },
        "AwayTeamScore": {
          "type": "integer"
        },
        "HomeTeamScore": {
          "type": "integer"
        },
        "Updated": {
          "type": "string"
        },
        "Quarter": {
          "type": "string"
        },
        "TimeRemainingMinutes": {
          "type": "integer"
        },
        "TimeRemainingSeconds": {
          "type": "integer"
        },
        "PointSpread": {
          "type": "number"
        },
        "OverUnder": {
          "type": "number"
        },
        "AwayTeamMoneyLine": {
          "type": "integer"
        },
        "HomeTeamMoneyLine": {
          "type": "integer"
        },
        "GlobalGameID": {
          "type": "integer"
        },
        "GlobalAwayTeamID": {
          "type": "integer"
        },
        "GlobalHomeTeamID": {
          "type": "integer"
        },
        "PointSpreadAwayTeamMoneyLine": {
          "type": "integer"
        },
        "PointSpreadHomeTeamMoneyLine": {
          "type": "integer"
        },
        "LastPlay": {
          "type": "string"
        },
        "IsClosed": {
          "type": "boolean"
        },
        "Quarters": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Quarter"
          }
        },
        "GameEndDateTime": {
          "type": "string"
        }
      }
    }
  }