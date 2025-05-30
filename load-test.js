const http = require('http');

const options = {
  hostname: '34.27.2.159', 
  port: 80,
  path: '/api/tasks',
  method: 'GET'
};

function makeRequest(i) {
  const req = http.request(options, (res) => {
    console.log(`Request ${i}: Status ${res.statusCode}`);
  });

  req.on('error', (e) => {
    console.error(`Request ${i}: Error - ${e.message}`);
  });

  req.end();
}

// Make 100 requests
for (let i = 0; i < 100; i++) {
  setTimeout(() => makeRequest(i + 1), i * 100);
}
