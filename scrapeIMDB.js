const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const axios = require('axios');
const imdb = require('imdb-api');

axios
    .get('http://www.imdb.com/chart/boxoffice?ref_=nv_ch_cht_1')
    .then(response => {
        console.log('Status code: ' + response.status);
        var $ = cheerio.load(response.data);
        $('tbody tr').each(function(index) {
            var t = $(this).find('td.titleColumn a').text();
            imdb
                .get(t)
                .then(things => {
                    console.log(JSON.stringify(things));
                })
                .catch(console.log('error'));
        });
    })
    .catch(response => console.log('Error: ' + error));
