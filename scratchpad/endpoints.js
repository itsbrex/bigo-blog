/*Create an API endpoint for the spreadsheet "https://docs.google.com/spreadsheets/d/1XWSivQjHFaIQyFD9p9GOZMK2T0EqQg6V2RsZHpWJ9s8" that I can send POST to in the sheet "Form Responses 1" that has the headers `Timestamp	Email Address	Please enter your BIGO ID	Please select the topics you would like to subscribe to for updates.	Please enter your WhatsApp #`*/
function sheetAPI() {
  var ss = SpreadsheetApp.openById('1XWSivQjHFaIQyFD9p9GOZMK2T0EqQg6V2RsZHpWJ9s8')
  var sheet = ss.getSheetByName('Form Responses 1')
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
  var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues()
  var jsonData = []
  for (var i = 0; i < data.length; i++) {
    var row = data[i]
    var record = {}
    for (var j = 0; j < headers.length; j++) {
      record[headers[j]] = row[j]
    }
    jsonData.push(record)
  }
  return ContentService.createTextOutput(JSON.stringify(jsonData)).setMimeType(
    ContentService.MimeType.JSON
  )
}

/* Send a poost request with dummy data to the deployed webapp at "https://script.google.com/macros/s/AKfycbwUBcShoR1nIOWtj8b7gqSqiPQ6EfGhMTyK1jmoPcGIuHMmDrwZS6JnVFtsF66StRjG/exec" */
function subscribe() {
  var url =
    'https://script.google.com/macros/s/AKfycbwUBcShoR1nIOWtj8b7gqSqiPQ6EfGhMTyK1jmoPcGIuHMmDrwZS6JnVFtsF66StRjG/exec'
  var options = {
    method: 'post',
    contentType: 'application/json',
    // Convert the JavaScript object to a JSON string.
    payload: JSON.stringify({
      Timestamp: new Date(),
      'Email Address': 'abc@gmail.com',
      'Please enter your BIGO ID': 12345,
      'Please select the topics you would like to subscribe to for updates.': [
        'Cricket',
        'Football',
      ],
      'Please enter your WhatsApp #': 9876543210,
    }),
  }

  UrlFetchApp.fetch(url, options)
}

/* to send an async request to subscribe() for use in a Next.js app*/
const subscribe = async ({ email }) => {
  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbwUBcShoR1nIOWtj8b7gqSqiPQ6EfGhMTyK1jmoPcGIuHMmDrwZS6JnVFtsF66StRjG/exec',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  )

  return await response.json() // parses JSON response into native JavaScript objects
}

/* To make sure we are sending POST to the sheet named "Form Responses 1" */
function doGet(e) {
  var ss = SpreadsheetApp.openById('1XWSivQjHFaIQyFD9p9GOZMK2T0EqQg6V2RsZHpWJ9s8')
  var sheet = ss.getSheetByName('Form Responses 1')
  if (typeof e !== 'undefined') {
    // this is a form post, not a GET request from the script editor or an install trigger
    var rowData = []

    for (var param in e.parameters) {
      // loop through all parameters passed to the POST request and add them to the spreadsheet as rows, with each parameter name as the column header and its value as the row value in that column
      Logger.log('Incoming parameter: %s', param) // see what parameter names were passed

      if (
        param === 'Timestamp' ||
        param === 'Email Address' ||
        param === 'Please enter your BIGO ID' ||
        param === 'Please select the topics you would like to subscribe to for updates.' ||
        param === 'Please enter your WhatsApp #'
      ) {
        // ignore parameters that aren't column headers in the spreadsheet, otherwise we'll get a "duplicate header" error when trying to write them as rows

        rowData.push(e.parameter[param]) // add the parameter value to our array of data for this row

        Logger.log('Row data: %s', rowData) // see what data was added to our array for this row

        sheet.appendRow(rowData) // append the new row of values from our form post request into the spreadsheet!
      } else {
        continue
      }
    }
  } else {
    // if no POST request came through, return an empty JSON file so we can
    // check that the webapp URL is working

    return ContentService.createTextOutput(JSON.stringify({})).setMimeType(
      ContentService.MimeType.JSON
    )
  }
}
