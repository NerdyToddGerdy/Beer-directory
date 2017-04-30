var app = angular.module('BreweryApp', []);

app.controller('MainController', ['$http', function($http){
   this.getBreweries = function(brew){
      console.log(brew);
      $http({
         method:"GET",
         url:"http://api.brewerydb.com/v2/locations?key=cbf87c44338b3c02f584632bf9a5cf01&postalCode=" + brew //error not Access-Control-Allow-Origin
      }).then(function(response){
         console.log(response);
      }),function(error){
         console.log(error);
      };
   };
}]);

app.controller('BreweryDBController', ['$http', function($http) {
  var controller = this;
  this.results = {
   "currentPage":1,
   "numberOfPages":1,
   "totalResults":6,
   "data":[
      {
         "id":"bbaCvg",
         "name":"Collindale",
         "streetAddress":"1441 East Horsetooth Road |",
         "locality":"Fort Collins",
         "region":"Colorado",
         "postalCode":"80525",
         "phone":"970-226-0148",
         "website":"http:\/\/www.cbpotts.com\/colorado\/collindale.html",
         "hoursOfOperation":"Sunday - Wednesday | 8am to 10pm\r\nThursday - Saturday | 8am to 12am",
         "latitude":40.5375425,
         "longitude":-105.0509252,
         "isPrimary":"N",
         "inPlanning":"N",
         "isClosed":"N",
         "openToPublic":"Y",
         "locationType":"brewpub",
         "locationTypeDisplay":"Brewpub",
         "countryIsoCode":"US",
         "status":"verified",
         "statusDisplay":"Verified",
         "createDate":"2013-11-08 23:48:21",
         "updateDate":"2014-07-23 19:11:34",
         "breweryId":"Thbhby",
         "brewery":{
            "id":"Thbhby",
            "name":"C.B. & Potts",
            "nameShortDisplay":"C.B. & Potts",
            "description":"The Ram is a private, independent, family-owned and operated restaurant business. We were born on February 26, 1971 when our founders took their entrepreneurial spirit and experiences they received making pizza and serving beer at Shakey\u2019s Pizza Parlor to open their own restaurant. That first restaurant was called the Ram Pub, which was a \u201cDeluxe Tavern\u201d that served hot food, including cook-your-own burgers and steaks, along with beer and wine.\r\n\r\nSince 1971, the Ram\u2019s primary commitment has been to always provide our guests with superior quality food and gracious hospitality. Although Big Horn Brewing Company is now one of the largest brewpub companies in the country, the goal of our brewers continues to be to produce the freshest, most \u201cdrinkable\u201d beer of the highest quality.",
            "website":"http:\/\/www.cbpotts.com\/",
            "established":"1971",
            "isOrganic":"N",
            "images":{
               "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/Thbhby\/upload_rsWfXK-icon.png",
               "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/Thbhby\/upload_rsWfXK-medium.png",
               "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/Thbhby\/upload_rsWfXK-large.png",
               "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/Thbhby\/upload_rsWfXK-squareMedium.png",
               "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/Thbhby\/upload_rsWfXK-squareLarge.png"
            },
            "status":"verified",
            "statusDisplay":"Verified",
            "createDate":"2012-01-03 02:41:49",
            "updateDate":"2015-12-22 14:42:26"
         },
         "country":{
            "isoCode":"US",
            "name":"UNITED STATES",
            "displayName":"United States",
            "isoThree":"USA",
            "numberCode":840,
            "createDate":"2012-01-03 02:41:33"
         }
      },
      {
         "id":"2wiTvo",
         "name":"Jessup Farm Barrel House",
         "streetAddress":"1921 Jessup Drive",
         "locality":"Fort Collins",
         "region":"Colorado",
         "postalCode":"80525",
         "phone":"970-568-8345",
         "website":"http:\/\/www.jessupfarmbarrelhouse.com",
         "hoursOfOperation":"Sun:  11:00am - 10:00pm\nFri:  11:00am - 11:00pm\nSat:  11:00am - 11:00pm\n\n",
         "latitude":40.5620332,
         "longitude":-105.0379971,
         "isPrimary":"Y",
         "inPlanning":"N",
         "isClosed":"N",
         "openToPublic":"Y",
         "locationType":"tasting",
         "locationTypeDisplay":"Tasting Room",
         "countryIsoCode":"US",
         "yearOpened":"2015",
         "status":"verified",
         "statusDisplay":"Verified",
         "createDate":"2016-06-21 17:21:25",
         "updateDate":"2016-06-23 18:24:31",
         "breweryId":"wLbPuX",
         "brewery":{
            "id":"wLbPuX",
            "name":"Jessup Farm Barrel House",
            "nameShortDisplay":"Jessup Farm Barrel House",
            "description":"Jessup Farm Barrel House is founded on having fun and letting our creativity explore the myriad of possibilities blending beer has to offer. By blending beers with different fermentation variations we are able to create unique and original flavors. Our goal is to take the robust characteristics from the barrels, and blend to bring out the complexities and delicacy of the flavors.\r\n\r\nThe Barrel House has a 16-tap selection of various blends. Beer is served in pints, flights and growlers. Growlers are filled with a counter pressure growler filler, to ensure proper carbonation and extend the longevity of the beer.",
            "website":"http:\/\/www.jessupfarmbarrelhouse.com\/",
            "established":"2015",
            "isOrganic":"N",
            "images":{
               "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/wLbPuX\/upload_Swr982-icon.png",
               "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/wLbPuX\/upload_Swr982-medium.png",
               "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/wLbPuX\/upload_Swr982-large.png",
               "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/wLbPuX\/upload_Swr982-squareMedium.png",
               "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/wLbPuX\/upload_Swr982-squareLarge.png"
            },
            "status":"verified",
            "statusDisplay":"Verified",
            "createDate":"2016-06-21 16:24:20",
            "updateDate":"2016-06-23 18:26:26"
         },
         "country":{
            "isoCode":"US",
            "name":"UNITED STATES",
            "displayName":"United States",
            "isoThree":"USA",
            "numberCode":840,
            "createDate":"2012-01-03 02:41:33"
         }
      },
      {
         "id":"n8zipR",
         "name":"Main Brewery",
         "streetAddress":"4025 S. Mason St.",
         "locality":"Fort Collins",
         "region":"Colorado",
         "postalCode":"80525",
         "phone":"(970) 377-4107",
         "website":"http:\/\/1933Brewing.com",
         "latitude":40.5311387,
         "longitude":-105.0801963,
         "isPrimary":"Y",
         "inPlanning":"N",
         "isClosed":"N",
         "openToPublic":"Y",
         "locationType":"micro",
         "locationTypeDisplay":"Micro Brewery",
         "countryIsoCode":"US",
         "status":"verified",
         "statusDisplay":"Verified",
         "createDate":"2014-07-25 13:33:25",
         "updateDate":"2015-12-03 19:04:02",
         "breweryId":"HQNyhH",
         "brewery":{
            "id":"HQNyhH",
            "name":"1933 Brewing Company",
            "nameShortDisplay":"1933",
            "website":"http:\/\/1933brewing.com\/",
            "established":"2014",
            "isOrganic":"N",
            "images":{
               "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/HQNyhH\/upload_vGG1j1-icon.png",
               "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/HQNyhH\/upload_vGG1j1-medium.png",
               "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/HQNyhH\/upload_vGG1j1-large.png",
               "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/HQNyhH\/upload_vGG1j1-squareMedium.png",
               "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/HQNyhH\/upload_vGG1j1-squareLarge.png"
            },
            "status":"verified",
            "statusDisplay":"Verified",
            "createDate":"2014-07-25 13:31:51",
            "updateDate":"2015-12-22 15:56:21"
         },
         "country":{
            "isoCode":"US",
            "name":"UNITED STATES",
            "displayName":"United States",
            "isoThree":"USA",
            "numberCode":840,
            "createDate":"2012-01-03 02:41:33"
         }
      },
      {
         "id":"bXlCac",
         "name":"Main Brewery",
         "streetAddress":"2724 McClelland Dr #190",
         "locality":"Fort Collins",
         "region":"Colorado",
         "postalCode":"80525",
         "phone":"(970) 286-2855",
         "hoursOfOperation":"Mon:  2:00pm - 9:00pm\nTue:  2:00pm - 9:00pm\nWed:  2:00pm - 9:00pm\nThu:  2:00pm - 9:00pm\nFri:  12:00pm - 10:00pm\nSat:  11:00am - 10:00pm\nSun:  11:00am - 7:00pm\n\n",
         "latitude":40.5506948,
         "longitude":-105.0798285,
         "isPrimary":"Y",
         "inPlanning":"N",
         "isClosed":"N",
         "openToPublic":"Y",
         "locationType":"micro",
         "locationTypeDisplay":"Micro Brewery",
         "countryIsoCode":"US",
         "yearOpened":"2016",
         "status":"verified",
         "statusDisplay":"Verified",
         "createDate":"2016-09-28 20:22:20",
         "updateDate":"2016-09-28 20:22:20",
         "breweryId":"1fktxb",
         "brewery":{
            "id":"1fktxb",
            "name":"Maxline Brewing",
            "nameShortDisplay":"Maxline",
            "description":"Maxline Brewing\u2019s commitment to quality malts, hops, water, and yeast matches our passion for brewing enticing beer. Our Tap Room is your new living room!",
            "website":"http:\/\/www.maxlinebrewing.com\/",
            "established":"2016",
            "isOrganic":"N",
            "images":{
               "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/1fktxb\/upload_YKtQ4Z-icon.png",
               "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/1fktxb\/upload_YKtQ4Z-medium.png",
               "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/1fktxb\/upload_YKtQ4Z-large.png",
               "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/1fktxb\/upload_YKtQ4Z-squareMedium.png",
               "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/1fktxb\/upload_YKtQ4Z-squareLarge.png"
            },
            "status":"verified",
            "statusDisplay":"Verified",
            "createDate":"2016-09-16 22:38:48",
            "updateDate":"2016-09-28 20:23:10"
         },
         "country":{
            "isoCode":"US",
            "name":"UNITED STATES",
            "displayName":"United States",
            "isoThree":"USA",
            "numberCode":840,
            "createDate":"2012-01-03 02:41:33"
         }
      },
      {
         "id":"KgfzOV",
         "name":"Main Brewery",
         "streetAddress":"4612 S Mason St",
         "extendedAddress":"Suite 120",
         "locality":"Fort Collins",
         "region":"Colorado",
         "postalCode":"80525",
         "phone":"1-970-223-2482",
         "hoursOfOperation":"Mon:  11:00am - 9:00pm\r\nTue:  11:00am - 9:00pm\r\nWed:  11:00am - 9:00pm\r\nThu:  11:00am - 9:00pm\r\nFri:  11:00am - 9:00pm\r\nSat:  11:00am - 9:00pm\r\nSun:  11:00am - 9:00pm",
         "latitude":40.5227531,
         "longitude":-105.07836,
         "isPrimary":"Y",
         "inPlanning":"N",
         "isClosed":"N",
         "openToPublic":"Y",
         "locationType":"micro",
         "locationTypeDisplay":"Micro Brewery",
         "countryIsoCode":"US",
         "status":"verified",
         "statusDisplay":"Verified",
         "createDate":"2014-07-25 14:18:28",
         "updateDate":"2016-02-03 17:47:13",
         "breweryId":"oy4FGL",
         "brewery":{
            "id":"oy4FGL",
            "name":"Zwei Brewing Co",
            "nameShortDisplay":"Zwei",
            "description":"Zwei Brewing Co. was started by two brothers who are passionate about beer and talented at making it too. Offering German Classics you\u2019ll love and specialty craft beers that will surprise.",
            "website":"http:\/\/zweibrewing.com\/",
            "established":"2014",
            "mailingListUrl":"info@zweibruderbrewing.com",
            "isOrganic":"N",
            "images":{
               "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/oy4FGL\/upload_kZ1imh-icon.png",
               "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/oy4FGL\/upload_kZ1imh-medium.png",
               "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/oy4FGL\/upload_kZ1imh-large.png",
               "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/oy4FGL\/upload_kZ1imh-squareMedium.png",
               "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/oy4FGL\/upload_kZ1imh-squareLarge.png"
            },
            "status":"verified",
            "statusDisplay":"Verified",
            "createDate":"2014-07-25 14:17:01",
            "updateDate":"2015-12-22 15:56:45"
         },
         "country":{
            "isoCode":"US",
            "name":"UNITED STATES",
            "displayName":"United States",
            "isoThree":"USA",
            "numberCode":840,
            "createDate":"2012-01-03 02:41:33"
         }
      },
      {
         "id":"CvlZKR",
         "name":"Main Brewpub",
         "streetAddress":"1611 South College Ave. Ste 1609",
         "locality":"Fort Collins",
         "region":"Colorado",
         "postalCode":"80525",
         "phone":"970-493-BEER",
         "website":"http:\/\/www.blackbottlebrewery.com\/",
         "latitude":40.566267,
         "longitude":-105.078351,
         "isPrimary":"Y",
         "inPlanning":"N",
         "isClosed":"N",
         "openToPublic":"Y",
         "locationType":"brewpub",
         "locationTypeDisplay":"Brewpub",
         "countryIsoCode":"US",
         "status":"verified",
         "statusDisplay":"Verified",
         "createDate":"2012-01-03 02:41:46",
         "updateDate":"2014-07-23 19:11:34",
         "breweryId":"6mYnLr",
         "brewery":{
            "id":"6mYnLr",
            "name":"Black Bottle Brewery",
            "nameShortDisplay":"Black Bottle",
            "description":"Black Bottle Brewery is a fancy Beer Bar that brews beer on site and has guest taps. The delicious beers are complimented with great small plates\/Tapas.\r\n\r\nThe mission at Black Bottle Brewery is to create world-class and unique handcrafted ales and lagers. Going against the grain of the traditional craft brewing industry, BBB prides itself on the use of radical ingredients, brewing styles, and techniques.\r\n\r\nBBB is devoted to providing a unique and innovative drinking environment, enhanced by great food. We are committed to sourcing food and ingredients locally, thus giving back to our community. BBB's staff will focus on customer education and great service, and the Company will employ only those who share our passion for high-quality beer and food",
            "website":"http:\/\/www.blackbottlebrewery.com\/",
            "established":"2012",
            "isOrganic":"N",
            "images":{
               "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/6mYnLr\/upload_MgGKc2-icon.png",
               "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/6mYnLr\/upload_MgGKc2-medium.png",
               "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/6mYnLr\/upload_MgGKc2-large.png",
               "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/6mYnLr\/upload_MgGKc2-squareMedium.png",
               "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/6mYnLr\/upload_MgGKc2-squareLarge.png"
            },
            "status":"verified",
            "statusDisplay":"Verified",
            "createDate":"2012-01-03 02:41:46",
            "updateDate":"2015-12-22 15:17:33"
         },
         "country":{
            "isoCode":"US",
            "name":"UNITED STATES",
            "displayName":"United States",
            "isoThree":"USA",
            "numberCode":840,
            "createDate":"2012-01-03 02:41:33"
         }
      }
   ],
   "status":"success"
};

  this.breweries = this.results.data;
}])
