import IntroductionRenderer from './Sections/Introduction';
import AboutRenderer from './Sections/About';
import Table from './Components/Table';
import InfoBox from './Components/InfoBox';

const renderer = [
  [
    {type: 'h1', value: 'Introduction', id: 'introduction1'},
    {type: 'paragraph', value: `Welcome to 6Sense, a leading ABM platform helping 
    B2B organizations achieve predictable revenue growth by putting the power of 
    AI, big data, and machine learning behind every member of the revenue team.`},
    {type: 'paragraph', value: `6sense uncovers anonymous buying behaviour, prioritizes 
    accounts for sales and marketing, and enables them to engage resistant buying 
    teams with personalized, multi-channel, multi-touch campaigns. 6sense helps 
    revenue teams know everything they need to know about their buyers so they 
    can easily do anything needed to generate more opportunities, increase deal 
    size, get into opportunities sooner, and compete and win more often.`},
    {
      type: 'code',
      values: {
        shell: `curl --location --request POST 'https://scribe.6sense.com/v1/scoring/people'
        --header 'Postman-Token: 57a18c9e-f8a8-40fd-93e2-248b4b67fc26'
        --header 'Content-Type: application/x-www-form-urlencoded'
        --header 'Cache-Control: no-cache'
        --header 'Authorization: Token {your_api_key}'
        --data-urlencode 'email=<user_name>@<domain>.com'
        --data-urlencode 'country=<country_value>'
        --data-urlencode 'company=<company_value>'
        --data-urlencode 'website=<website_value>'
        --data-urlencode 'title=<title_value>'
        --data-urlencode 'leadsource=<leadsource_value>'
        --data-urlencode 'firstname=<firstname_value>'
        --data-urlencode 'lastname=<lastname_value>'
        --data-urlencode 'role=<role_value>'
        --data-urlencode 'industry=<industry_value>'`,
        xhr: `var data = "email=<user_name>@<domain>.com &
        country = < country_value >
        &
        company = < company_value >
        &
        website = < website_value >
        &
        title = < title_value >
        &
        leadsource = < leadsource_value >
        &
        firstname = < firstname_value >
        &
        lastname = < lastname_value >
        &
        role = < role_value >
        &
        industry = < industry_value > ";
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    
    xhr.open("POST", "https://scribe.6sense.com/v1/scoring/people");
    xhr.setRequestHeader("Postman-Token", "57a18c9e-f8a8-40fd-93e2-248b4b67fc26");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Authorization", "Token {your_api_key}");
    
    xhr.send(data);`,
        node: `var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'https://scribe.6sense.com/v1/scoring/people',
            'headers': {
                'Postman-Token': '57a18c9e-f8a8-40fd-93e2-248b4b67fc26',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'Authorization': 'Token {your_api_key}'
            },
            form: {
                'email': '<user_name>@<domain>.com\n',
                'country': '<country_value>',
                'company': '<company_value>',
                'website': '<website_value>',
                'title': '<title_value>',
                'leadsource': '<leadsource_value>',
                'firstname': '<firstname_value>',
                'lastname': '<lastname_value>',
                'role': '<role_value>',
                'industry': '<industry_value>'
            }
        };
        request(options, function(error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });`,
        python: `import requests

        url = "https://scribe.6sense.com/v1/scoring/people"
        
        payload=’email=<user_name>@<domain>.com
          &country=<country_value>
          &company=<company_value>
          &website=<website_value>
          &title=<title_value>
          &leadsource=<leadsource_value>
          &firstname=<firstname_value>
          &lastname=<lastname_value>
          &role=<role_value>
          &industry=<industry_value>’
        
        headers = {
          'Postman-Token': '57a18c9e-f8a8-40fd-93e2-248b4b67fc26',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cache-Control': 'no-cache',
          'Authorization': 'Token {your_api_key}'
        }
        
        response = requests.request("POST", url, headers=headers, data=payload)
        
        print(response.text)`,
        json: `{
          "info": {
            "_postman_id": "cc445533-7ac3-436a-abfa-f7d2c23e78eb",
            "name": "sample_scribe",
            "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
          },
          "item": [
            {
              "name": "https://scribe.6sense.com/v1/scoring/people",
              "request": {
                "method": "POST",
                "header": [
                  {
                    "key": "Postman-Token",
                    "value": "57a18c9e-f8a8-40fd-93e2-248b4b67fc26",
                    "type": "text"
                  },
                  {
                    "key": "Content-Type",
                    "name": "Content-Type",
                    "value": "application/x-www-form-urlencoded",
                    "type": "text"
                  },
                  {
                    "key": "Cache-Control",
                    "value": "no-cache",
                    "type": "text"
                  },
                  {
                    "key": "Authorization",
                    "value": "Token {your_api_key}",
                    "type": "text"
                  },
                  {
                    "key": "X-Forwarded-For",
                    "value": "1.0.185.47",
                    "type": "text",
                    "disabled": true
                  }
                ],
                "body": {
                  "mode": "urlencoded",
                  "urlencoded": [
                    {
                      "key": "email",
                      "value": "<user_name>@<domain>.com",
                      "type": "text"
                    },
                    {
                      "key": "country",
                      "value": "<country_value>",
                      "type": "text"
                    },
                    {
                      "key": "company",
                      "value": "<company_value>",
                      "type": "text"
                    },
                    {
                      "key": "website",
                      "value": "<website_value>",
                      "type": "text"
                    },
                    {
                      "key": "title",
                      "value": "<title_value>",
                      "type": "text"
                    },
                    {
                      "key": "leadsource",
                      "value": "<leadsource_value>",
                      "type": "text"
                    },
                    {
                      "key": "firstname",
                      "value": "<firstname_value>",
                      "type": "text"
                    },
                    {
                      "key": "lastname",
                      "value": "<lastname_value>",
                      "type": "text"
                    },
                    {
                      "key": "role",
                      "value": "<role_value>",
                      "type": "text"
                    },
                    {
                      "key": "industry",
                      "value": "<industry_value>",
                      "type": "text"
                    }
                  ]
                },
                "url": {
                  "raw": "https://scribe.6sense.com/v1/scoring/people",
                  "protocol": "https",
                  "host": [
                    "scribe",
                    "6sense",
                    "com"
                  ],
                  "path": [
                    "v1",
                    "scoring",
                    "people"
                  ],
                  "query": [
                    {
                      "key": "country",
                      "value": "",
                      "disabled": true
                    }
                  ]
                }
              },
              "response": []
            }
          ]
        }`,
      },
    },
  ],
  [
    {type: 'h1', value: '6signal API', id: 'sixsignal-api'},
    {type: 'paragraph', value: 'Using 6signal API get company details from an IP of your user.'},
    {type: 'paragraph', value: <b>How 6signal can help you?</b>},    
    {type: 'paragraph', value: `Integrating with your Chat Bot can de-anonymize visitors in 
    real time. In short you will get company details from an IP of your user. Integrating 
    with your Customer Support system to more details about your customer. Any other use 
    cases where you need to get company information from an IP address.`},    
    {type: 'info', boxtype: InfoBox.TYPE.PRIMARY, value: `Please review the Version Information before using this API.`},
    {type: 'h2', value: 'HTTP Request', id: 'sixsignal-api-http-request'},
    {type: 'endpoint', boxtitle: 'Endpoint', boxcontent: 'GET https://epsilon.6sense.com/v3/company/details'},
    {type: 'h3', value: 'Headers', id: 'sixsignal-api-headers'},
    {type: 'table', headers: ['Header', 'Value'], rows: [
      ['Authorization', 'Token :api_auth_token'],
      ['X-Forwarded-For', '{valid_test_ip}'],
      ['EpsilonCookie(optional)', ''],
    ]},
    {type: 'h2', value: 'Error codes', id: 'sixsignal-error-codes'},
    {
      type: 'table',
      headers: ['Code','Definition'],
      rows: [
        ['200', (
          <span>
            <b>OK</b>
            <br/>
            Successfully returned response. The response message varies, depending on the request method/endpoint and the requested data.
          </span>
        )],
        ['404', (
          <span>
            <b>Not found</b>
            <br/>
            Invalid IP address. Please make sure you have sent a valid IPv4 IP address.
          </span>
        )],
        ['OTHERS', (
          <span>
            <b>Other common errors</b>
            <br/>
            Please see Error section to know more Error codes
          </span>
        )],
      ]
    },
    {type: 'h2', value: 'Input params', id: 'sixsignal-input-params'},
    {
      type: 'table',
      tabletype: Table.TYPE.TABBED,
      headers: ['Parameter', ['Description', 'Example']],
      rows: [
        ['X-FORWARDED-FOR', ['The IP address for which you are requesting details.', '123.123.123.123']],
        ['TOKEN', [<span>[mandatory]<br/>Token could be Aruba Auth token or secureworks Auth Token</span>, <>Token<br/>1234567890abcdefghij1</>]]
      ]
    },
    {
      type: 'code',
      values: {
        shell: `curl --location --request GET 'https://epsilon.6sense.com/v3/company/details'
        --header 'Authorization: Token {your_api_token}'
        --header 'X-Forwarded-For: {ip_address}'`,
        xhr: `var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        
        
        xhr.open("GET", "https://epsilon.6sense.com/v3/company/details");
        xhr.setRequestHeader("Authorization", "Token {your_api_token}");
        xhr.setRequestHeader("X-Forwarded-For", "{ip_address}");`,
        node: `var request = require('request');
        var options = {
            'method': 'GET',
            'url': 'https://epsilon.6sense.com/v3/company/details',
            'headers': {
                'Authorization': 'Token {your_api_token}',
                'X-Forwarded-For': '{ip_address}'
            }
        };
        request(options, function(error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });`,
        python: `import requests

        url = "https://epsilon.6sense.com/v3/company/details"
        
        payload = {}
        headers = {"Authorization": "Token {your_api_token}", "X-Forwarded-For": "{ip_address}"}
        
        response = requests.request("GET", url, headers=headers, data=payload)
        
        print(response.text)`,
        json: `{
          "info": {
            "_postman_id": "1ea6f717-09a1-4e0d-b167-ab7a27287651",
            "name": "6signal",
            "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
          },
          "item": [
            {
              "name": "https://epsilon.6sense.com/v3/company/details",
              "request": {
                "method": "GET",
                "header": [
                  {
                    "key": "Authorization",
                    "type": "text",
                    "value": "Token {your_api_token}"
                  },
                  {
                    "key": "Content-Type",
                    "name": "Content-Type",
                    "type": "text",
                    "value": "application/x-www-form-urlencoded",
                    "disabled": true
                  },
                  {
                    "key": "EpsilonCookie",
                    "type": "text",
                    "value": "{optional cookie value}",
                    "disabled": true
                  },
                  {
                    "key": "X-Forwarded-For",
                    "type": "text",
                    "value": "{ip_address}"
                  }
                ],
                "url": {
                  "raw": "https://epsilon.6sense.com/v3/company/details",
                  "protocol": "https",
                  "host": [
                    "epsilon",
                    "6sense",
                    "com"
                  ],
                  "path": [
                    "v3",
                    "company",
                    "details"
                  ]
                }
              },
              "response": []
            }
          ]
        }`
      }
    }
  ],
]

export default renderer;