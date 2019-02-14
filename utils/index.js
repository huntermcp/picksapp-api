


const sendRes = (status, body) => {
    var response = {
      statusCode: status,
      headers: {
        "Content-Type": "text/html"
      },
      body: body
    };
    return response;
  }

module.exports = {
  "sendRes": sendRes
}
