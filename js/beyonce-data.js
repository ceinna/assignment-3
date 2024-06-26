// GEOJSON DATA

// data from https://en.wikipedia.org/wiki/Renaissance_World_Tour
// manually entered into Google Sheets then used https://csvjson.com/ to covert to JSON
// used https://labs.mapbox.com/location-helper/#3/40.78/-73.97 to manually find stadium coordinates for Latitude and Longitude

var beyonceData = [
    {
        "First Date": "May 10, 2024",
        "City": "Stockholm",
        "Country": "Sweden",
        "Venue": "Friends Arena",
        "Longitude": 18.00026,
        "Latitude": 59.37259,
        "Nights": 2,
        "Attendance": 90169,
        "Revenue": 9802155
    },
    {
        "First Date": "May 14, 2023",
        "City": "Brussels",
        "Country": "Belgium",
        "Venue": "King Baudouin Stadium",
        "Longitude": 4.33459,
        "Latitude": 50.89591,
        "Nights": 1,
        "Attendance": 53062,
        "Revenue": 6529627
    },
    {
        "First Date": "May 17, 2023",
        "City": "Cardiff",
        "Country": "Wales",
        "Venue": "Principality Stadium",
        "Longitude": -3.18245,
        "Latitude": 51.47833,
        "Nights": 1,
        "Attendance": 52756,
        "Revenue": 6967662
    },
    {
        "First Date": "May 20, 2023",
        "City": "Edinburgh",
        "Country": "Scotland",
        "Venue": "BT Murrayfield Stadium",
        "Longitude": -3.24056,
        "Latitude": 55.94203,
        "Nights": 1,
        "Attendance": 55834,
        "Revenue": 7872596
    },
    {
        "First Date": "May 23, 2023",
        "City": "Sunderland",
        "Country": "England",
        "Venue": "Stadium of Light",
        "Longitude": -1.38817,
        "Latitude": 54.91443,
        "Nights": 1,
        "Attendance": 44790,
        "Revenue": 6217446
    },
    {
        "First Date": "May 26, 2023",
        "City": "Saint-Denis",
        "Country": "France",
        "Venue": "Stade de France",
        "Longitude": 2.36012,
        "Latitude": 48.92446,
        "Nights": 1,
        "Attendance": 68624,
        "Revenue": 9402605
    },
    {
        "First Date": "May 29, 2023",
        "City": "London",
        "Country": "England",
        "Venue": "Tottenham Hotspur Stadium",
        "Longitude": -0.06685,
        "Latitude": 51.60415,
        "Nights": 5,
        "Attendance": 240330,
        "Revenue": 38986169
    },
    {
        "First Date": "June 8, 2023",
        "City": "Barcelona",
        "Country": "Spain",
        "Venue": "Olympic Stadium",
        "Longitude": 2.15747,
        "Latitude": 41.36471,
        "Nights": 1,
        "Attendance": 52889,
        "Revenue": 6694569
    },
    {
        "First Date": "June 11, 2023",
        "City": "Marseille",
        "Country": "France",
        "Venue": "Orange Vélodrome",
        "Longitude": 5.39586,
        "Latitude": 43.26978,
        "Nights": 1,
        "Attendance": 56352,
        "Revenue": 7070570
    },
    {
        "First Date": "June 15, 2023",
        "City": "Cologne",
        "Country": "Germany",
        "Venue": "RheinEnergieStadion",
        "Longitude": 6.87504,
        "Latitude": 50.93364,
        "Nights": 1,
        "Attendance": 41166,
        "Revenue": 5437729
    },
    {
        "First Date": "June 17, 2023",
        "City": "Amsterdam",
        "Country": "Netherlands",
        "Venue": "Johan Cruyff Arena",
        "Longitude": 4.94186,
        "Latitude": 52.31422,
        "Nights": 2,
        "Attendance": 97657,
        "Revenue": 12817577
    },
    {
        "First Date": "June 21, 2023",
        "City": "Hamburg",
        "Country": "Germany",
        "Venue": "Volksparkstadion",
        "Longitude": 9.8986,
        "Latitude": 53.58704,
        "Nights": 1,
        "Attendance": 43335,
        "Revenue": 5757020
    },
    {
        "First Date": "June 24, 2023",
        "City": "Frankfurt",
        "Country": "Germany",
        "Venue": "Deutsche Bank Park",
        "Longitude": 8.64536,
        "Latitude": 50.06863,
        "Nights": 1,
        "Attendance": 42280,
        "Revenue": 5852675
    },
    {
        "First Date": "June 27, 2023",
        "City": "Warsaw",
        "Country": "Poland",
        "Venue": "PGE Narodowy",
        "Longitude": 21.04568,
        "Latitude": 52.2394,
        "Nights": 2,
        "Attendance": 108141,
        "Revenue": 12378058
    },
    {
        "First Date": "July 8, 2023",
        "City": "Toronto",
        "Country": "Canada",
        "Venue": "Rogers Centre",
        "Longitude": -79.38838,
        "Latitude": 43.64156,
        "Nights": 2,
        "Attendance": 76577,
        "Revenue": 18340330
    },
    {
        "First Date": "July 12, 2023",
        "City": "Philedelphia",
        "Country": "United States",
        "Venue": "Lincoln Financial Field",
        "Longitude": -75.16751,
        "Latitude": 39.90091,
        "Nights": 1,
        "Attendance": 52181,
        "Revenue": 11976831
    },
    {
        "First Date": "July 15, 2023",
        "City": "Nashville",
        "Country": "United States",
        "Venue": "Nissan Stadium",
        "Longitude": -86.77132,
        "Latitude": 36.16661,
        "Nights": 1,
        "Attendance": 44742,
        "Revenue": 9412176
    },
    {
        "First Date": "July 17, 2023",
        "City": "Louisville",
        "Country": "United States",
        "Venue": "Cardinal Stadium",
        "Longitude": -85.64333,
        "Latitude": 38.11528,
        "Nights": 1,
        "Attendance": 41818,
        "Revenue": 6450896
    },
    {
        "First Date": "July 20, 2023",
        "City": "Minneapolis",
        "Country": "United States",
        "Venue": "Huntington Bank Stadium",
        "Longitude": -93.22496,
        "Latitude": 44.97617,
        "Nights": 1,
        "Attendance": 39415,
        "Revenue": 8217178
    },
    {
        "First Date": "July 22, 2023",
        "City": "Chicago",
        "Country": "United States",
        "Venue": "Soldier Field",
        "Longitude": -87.61671,
        "Latitude": 41.86257,
        "Nights": 2,
        "Attendance": 97686,
        "Revenue": 30115863
    },
    {
        "First Date": "July 26, 2023",
        "City": "Detroit",
        "Country": "United States",
        "Venue": "Ford Field",
        "Longitude": -83.04561,
        "Latitude": 42.33997,
        "Nights": 1,
        "Attendance": 44554,
        "Revenue": 9963756
    },
    {
        "First Date": "July 29, 2023",
        "City": "East Rutherford",
        "Country": "United States",
        "Venue": "MetLife Stadium",
        "Longitude": -74.0749,
        "Latitude": 40.81354,
        "Nights": 2,
        "Attendance": 106056,
        "Revenue": 33082997
    },
    {
        "First Date": "August 1, 2023",
        "City": "Foxborough",
        "Country": "United States",
        "Venue": "Gillette Stadium",
        "Longitude": -71.26442,
        "Latitude": 42.09114,
        "Nights": 1,
        "Attendance": 49740,
        "Revenue": 13801160
    },
    {
        "First Date": "August 5, 2023",
        "City": "Landover",
        "Country": "United States",
        "Venue": "FedEx Field",
        "Longitude": -76.86393,
        "Latitude": 38.90762,
        "Nights": 2,
        "Attendance": 97909,
        "Revenue": 29392299
    },
    {
        "First Date": "August 9, 2023",
        "City": "Charlotte",
        "Country": "United States",
        "Venue": "Bank of America Stadium",
        "Longitude": -80.85377,
        "Latitude": 35.22528,
        "Nights": 1,
        "Attendance": 53612,
        "Revenue": 12227012
    },
    {
        "First Date": "August 11, 2023",
        "City": "Atlanta",
        "Country": "United States",
        "Venue": "Mercedes-Benz Stadium",
        "Longitude": -84.40089,
        "Latitude": 33.75529,
        "Nights": 3,
        "Attendance": 156317,
        "Revenue": 39849890
    },
    {
        "First Date": "August 16, 2023",
        "City": "Tampa",
        "Country": "United States",
        "Venue": "Raymond James Stadium",
        "Longitude": -82.50334,
        "Latitude": 27.97583,
        "Nights": 1,
        "Attendance": 55408,
        "Revenue": 13158166
    },
    {
        "First Date": "August 18, 2023",
        "City": "Miami Gardens",
        "Country": "United States",
        "Venue": "Hard Rock Stadium",
        "Longitude": -80.23962,
        "Latitude": 25.95832,
        "Nights": 1,
        "Attendance": 47487,
        "Revenue": 14362704
    },
    {
        "First Date": "August 21, 2023",
        "City": "St. Louis",
        "Country": "United States",
        "Venue": "The Dome at America's Center",
        "Longitude": -90.18834,
        "Latitude": 38.63242,
        "Nights": 1,
        "Attendance": 45836,
        "Revenue": 7064451
    },
    {
        "First Date": "August 24, 2023",
        "City": "Glendale",
        "Country": "United States",
        "Venue": "State Farm Stadium",
        "Longitude": -112.26268,
        "Latitude": 33.52768,
        "Nights": 1,
        "Attendance": 54705,
        "Revenue": 8226165
    },
    {
        "First Date": "August 26, 2023",
        "City": "Paradise",
        "Country": "United States",
        "Venue": "Allegiant Stadium",
        "Longitude": -115.18338,
        "Latitude": 36.09139,
        "Nights": 2,
        "Attendance": 86465,
        "Revenue": 25784512
    },
    {
        "First Date": "August 30, 2023",
        "City": "Santa Clara",
        "Country": "United States",
        "Venue": "Levi's Stadium",
        "Longitude": -121.96989,
        "Latitude": 37.40328,
        "Nights": 1,
        "Attendance": 49613,
        "Revenue": 15402846
    },
    {
        "First Date": "September 1, 2023",
        "City": "Inglewood",
        "Country": "United States",
        "Venue": "SoFi Stadium",
        "Longitude": -118.33852,
        "Latitude": 33.95197,
        "Nights": 3,
        "Attendance": 155567,
        "Revenue": 45540402
    },
    {
        "First Date": "September 11, 2023",
        "City": "Vancouver",
        "Country": "Canada",
        "Venue": "BC Place",
        "Longitude": -123.11211,
        "Latitude": 49.27678,
        "Nights": 1,
        "Attendance": 38342,
        "Revenue": 7923348
    },
    {
        "First Date": "September 14, 2023",
        "City": "Seattle",
        "Country": "United States",
        "Venue": "Lumen Field",
        "Longitude": -122.33296,
        "Latitude": 47.59518,
        "Nights": 1,
        "Attendance": 56763,
        "Revenue": 12459518
    },
    {
        "First Date": "September 21, 2023",
        "City": "Arlington",
        "Country": "United States",
        "Venue": "AT&T Stadium",
        "Longitude": -97.09254,
        "Latitude": 32.74787,
        "Nights": 1,
        "Attendance": 52953,
        "Revenue": 13849491
    },
    {
        "First Date": "September 23, 2023",
        "City": "Houston",
        "Country": "United States",
        "Venue": "NRG Stadium",
        "Longitude": -95.40682,
        "Latitude": 29.68183,
        "Nights": 2,
        "Attendance": 123308,
        "Revenue": 31332332
    },
    {
        "First Date": "September 27, 2023",
        "City": "New Orleans",
        "Country": "United States",
        "Venue": "Caesars Superdome",
        "Longitude": -90.08151,
        "Latitude": 29.95065,
        "Nights": 1,
        "Attendance": 49265,
        "Revenue": 10802708
    },
    {
        "First Date": "October 1, 2023",
        "City": "Kansas City",
        "Country": "United States",
        "Venue": "Arrowhead Stadium",
        "Longitude": -94.48651,
        "Latitude": 39.04634,
        "Nights": 1,
        "Attendance": 53150,
        "Revenue": 9290057
    }

]