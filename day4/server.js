/*
    Sample HTTP Server with simple routing, for CoderFactory Day 5
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// CREATE A HTTP SERVER
const server = http.createServer((req, res) => {
  // Get some details from the User's Request
  let url = req.url;                // Full URL
  let qs = url.split("?");          // Query String
  let routes = qs[0].split("/");    // Routes
  routes.splice(0, 1);              // Cleanup Route

  // Default Route Object
  let defaultObj = {
    type: "default object",
    url: req.url,
    qs: qs[1],
    routes: routes,
    method: req.method
  };

  // Cart Route Object
  let cartObj = {
    type: "cart object",
    url: req.url
  };

  // Product Route Object
  let productObj = {
    type: "product object",
    url: req.url
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  let jsonResponse = {};

  // Make some rudimentary routing decisions
  switch( routes[0] ) {
    case "cart":
        jsonResponse = cartObj;
      break;
    case "product":
        jsonResponse = productObj;
      break;
    default:
        jsonResponse = defaultObj;
      break;
  }

  // Send the stringified JSON response to the User :)
  res.end( JSON.stringify(jsonResponse)  );
});

// Listen to HOSTNAME on PORT
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
