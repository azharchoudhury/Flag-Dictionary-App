import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let flagDictionary = {
    "🇦🇪": "United Arab Emirates",
    "🇦🇫": "Afghanistan",
    "🇦🇬": "Antigua & Barbuda",
    "🇦🇱": "Albania",
    "🇦🇲": "Armenia",
    "🇦🇶": "Antarctica",
    "🇦🇷": "Argentina",
    "🇦🇹": "Austria",
    "🇦🇺": "Australia",
    "🇦🇼": "Aruba",
    "🇦🇽": "Åland Islands",
    "🇦🇿": "Azerbaijan",
    "🇧🇦": "Bosnia & Herzegovina",
    "🇧🇧": "Barbados",
    "🇧🇩": "Bangladesh",
    "🇧🇪": "Belgium",
    "🇧🇬": "Bulgaria",
    "🇧🇭": "Bahrain",
    "🇧🇯": "Benin",
    "🇧🇲": "Bermuda",
    "🇧🇴": "Bolivia",
    "🇧🇶": "Caribbean Netherlands",
    "🇧🇷": "Brazil",
    "🇧🇸": "Bahamas",
    "🇧🇹": "Bhutan",
    "🇧🇾": "Belarus",
    "🇧🇿": "Belize",
    "🇨🇦": "Canada",
    "🇨🇫": "Central African Republic",
    "🇨🇬": "Congo - Brazzaville",
    "🇨🇭": "Switzerland",
    "🇨🇰": "Cook Islands",
    "🇨🇱": "Chile",
    "🇨🇲": "Cameroon",
    "🇨🇳": "China",
    "🇨🇴": "Colombia",
    "🇨🇷": "Costa Rica",
    "🇨🇺": "Cuba",
    "🇨🇻": "Cape Verde",
    "🇨🇼": "Curaçao",
    "🇨🇽": "Christmas Island",
    "🇨🇾": "Cyprus",
    "🇨🇿": "Czechia",
    "🇩🇪": "Germany",
    "🇩🇬": "Diego Garcia",
    "🇩🇯": "Djibouti",
    "🇩🇰": "Denmark",
    "🇩🇲": "Dominica",
    "🇩🇴": "Dominican Republic",
    "🇩🇿": "Algeria",
    "🇪🇨": "Ecuador",
    "🇪🇪": "Estonia",
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "England",
    "🇪🇬": "Egypt",
    "🇪🇭": "Western Sahara",
    "🇪🇸": "Spain",
    "🇪🇹": "Ethiopia",
    "🇪🇺": "European Union",
    "🇫🇮": "Finland",
    "🇫🇯": "Fiji",
    "🇫🇷": "France",
    "🇬🇦": "Gabon",
    "🇬🇧": "United Kingdom",
    "🇬🇪": "Georgia",
    "🇬🇫": "French Guiana",
    "🇬🇬": "Guernsey",
    "🇬🇭": "Ghana",
    "🇬🇮": "Gibraltar",
    "🇬🇱": "Greenland",
    "🇬🇲": "Gambia",
    "🇬🇳": "Guinea",
    "🇬🇶": "Equatorial Guinea",
    "🇬🇷": "Greece",
    "🇬🇼": "Guinea-Bissau",
    "🇬🇾": "Guyana",
    "🇭🇰": "Hong Kong SAR China",
    "🇭🇲": "Heard & McDonald Islands",
    "🇭🇷": "Croatia",
    "🇭🇹": "Haiti",
    "🇭🇺": "Hungary",
    "🇮🇨": "Canary Islands",
    "🇮🇩": "Indonesia",
    "🇮🇪": "Ireland",
    "🇮🇱": "Israel",
    "🇮🇲": "Isle of Man",
    "🇮🇳": "INDIA",
    "🇮🇴": "British Indian Ocean Territory",
    "🇮🇶": "Iraq",
    "🇮🇷": "Iran",
    "🇮🇸": "Iceland",
    "🇮🇹": "Italy",
    "🇯🇪": "Jersey",
    "🇯🇲": "Jamaica",
    "🇯🇴": "Jordan",
    "🇯🇵": "Japan",
    "🇰🇪": "Kenya",
    "🇰🇵": "North Korea",
    "🇰🇷": "South Korea",
    "🇰🇼": "Kuwait",
    "🇰🇿": "Kazakhstan",
    "🇱🇰": "Sri Lanka",
    "🇱🇷": "Liberia",
    "🇱🇹": "Lithuania",
    "🇱🇺": "Luxembourg",
    "🇱🇻": "Latvia",
    "🇱🇾": "Libya",
    "🇲🇦": "Morocco",
    "🇲🇨": "Monaco",
    "🇲🇩": "Moldova",
    "🇲🇪": "Montenegro",
    "🇲🇫": "St. Martin",
    "🇲🇬": "Madagascar",
    "🇲🇭": "Marshall Islands",
    "🇲🇰": "North Macedonia",
    "🇲🇱": "Mali",
    "🇲🇲": "Myanmar (Burma)",
    "🇲🇳": "Mongolia",
    "🇲🇵": "Northern Mariana Islands",
    "🇲🇷": "Mauritania",
    "🇲🇸": "Montserrat",
    "🇲🇹": "Malta",
    "🇲🇺": "Mauritius",
    "🇲🇻": "Maldives",
    "🇲🇼": "Malawi",
    "🇲🇽": "Mexico",
    "🇲🇾": "Malaysia",
    "🇳🇦": "Namibia",
    "🇳🇨": "New Caledonia",
    "🇳🇪": "Niger",
    "🇳🇬": "Nigeria",
    "🇳🇮": "Nicaragua",
    "🇳🇱": "Netherlands",
    "🇳🇴": "Norway",
    "🇳🇵": "Nepal",
    "🇳🇿": "New Zealand",
    "🇴🇲": "Oman",
    "🇵🇦": "Panama",
    "🇵🇪": "Peru",
    "🇵🇫": "French Polynesia",
    "🇵🇭": "Philippines",
    "🇵🇰": "Pakistan",
    "🇵🇱": "Poland",
    "🇵🇸": "Palestinian Territories",
    "🇵🇹": "Portugal",
    "🇵🇼": "Palau",
    "🇵🇾": "Paraguay",
    "🇶🇦": "Qatar",
    "🇷🇴": "Romania",
    "🇷🇸": "Serbia",
    "🇷🇺": "Russia",
    "🇷🇼": "Rwanda",
    "🇸🇦": "Saudi Arabia",
    "🇸🇧": "Solomon Islands",
    "🇸🇩": "Sudan",
    "🇸🇪": "Sweden",
    "🇸🇬": "Singapore",
    "🇸🇭": "St. Helena",
    "🇸🇮": "Slovenia",
    "🇸🇰": "Slovakia",
    "🇸🇱": "Sierra Leone",
    "🇸🇲": "San Marino",
    "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "Scotland",
    "🇸🇴": "Somalia",
    "🇸🇷": "Suriname",
    "🇿🇦": "South Africa",
    "🇸🇸": "South Sudan",
    "🇸🇾": "Syria",
    "🇸🇿": "Eswatini",
    "🇹🇩": "Chad",
    "🇹🇫": "French Southern Territories",
    "🇹🇬": "Togo",
    "🇹🇭": "Thailand",
    "🇹🇯": "Tajikistan",
    "🇹🇰": "Tokelau",
    "🇹🇱": "Timor-Leste",
    "🇹🇲": "Turkmenistan",
    "🇹🇳": "Tunisia",
    "🇹🇴": "Tonga",
    "🇹🇷": "Turkey",
    "🇹🇼": "Taiwan",
    "🇹🇿": "Tanzania",
    "🇺🇦": "Ukraine",
    "🇺🇬": "Uganda",
    "🇺🇲": "U.S. Outlying Islands",
    "🇺🇳": "United Nations",
    "🇺🇸": "United States",
    "🇺🇾": "Uruguay",
    "🇺🇿": "Uzbekistan",
    "🇻🇦": "Vatican City",
    "🇻🇨": "St. Vincent & Grenadines",
    "🇻🇪": "Venezuela",
    "🇻🇬": "British Virgin Islands",
    "🇻🇮": "U.S. Virgin Islands",
    "🇻🇳": "Vietnam",
    "🇻🇺": "Vanuatu",
    "🏴󠁧󠁢󠁷󠁬󠁳󠁿": "Wales",
    "🇼🇫": "Wallis & Futuna",
    "🇾🇪": "Yemen",
    "🇿🇲": "Zambia",
    "🇿🇼": "Zimbabwe"
  };

  var flagsWeHave = Object.keys(flagDictionary);

  var [meaning, setMeaning] = useState("");

  function flagInputHandler(event) {
    var userInput = event.target.value;
    var meaning = flagDictionary[userInput];
    setMeaning(meaning);
  }

  function flagClickHandler(emoticon) {
    var meaning = flagDictionary[emoticon];
    setMeaning(meaning);
  }

  if (meaning === undefined) {
    meaning = "Sorry! We don't have it in our database..";
  }

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "#bfdbfe",
          color: "#581c87",
          padding: "1rem",
          marginBottom: "1rem"
        }}
      >
        Flag Dictionary
      </h1>
      <p
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
          margin: "1rem"
        }}
      >
        Know which flag represents which country
      </p>

      <input
        placeholder="Enter the country flag emoticon here"
        onChange={flagInputHandler}
      ></input>

      <h3 style={{ marginTop: "3rem" }}>Output will be displayed here 👇</h3>
      <div
        style={{
          outline: "1.5px solid #22c55e",
          padding: "1rem",
          margin: "1rem auto",
          width: "300px",
          fontWeight: "bold",
          color: "#a21caf",
          position: "sticky",
          top: "2rem",
          backgroundColor: "white"
        }}
      >
        {meaning}
      </div>

      <h2 style={{ margin: "2rem 0" }}>Flags We Have</h2>

      <div>
        {flagsWeHave.map(function (flags) {
          return (
            <span
              key={flags}
              onClick={() => flagClickHandler(flags)}
              style={{
                fontSize: "3rem",
                padding: "1rem",
                cursor: "pointer",
                margin: "4rem"
              }}
            >
              {flags}
            </span>
          );
        })}
      </div>
    </div>
  );
}
