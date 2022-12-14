import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let flagDictionary = {
    "๐ฆ๐ช": "United Arab Emirates",
    "๐ฆ๐ซ": "Afghanistan",
    "๐ฆ๐ฌ": "Antigua & Barbuda",
    "๐ฆ๐ฑ": "Albania",
    "๐ฆ๐ฒ": "Armenia",
    "๐ฆ๐ถ": "Antarctica",
    "๐ฆ๐ท": "Argentina",
    "๐ฆ๐น": "Austria",
    "๐ฆ๐บ": "Australia",
    "๐ฆ๐ผ": "Aruba",
    "๐ฆ๐ฝ": "รland Islands",
    "๐ฆ๐ฟ": "Azerbaijan",
    "๐ง๐ฆ": "Bosnia & Herzegovina",
    "๐ง๐ง": "Barbados",
    "๐ง๐ฉ": "Bangladesh",
    "๐ง๐ช": "Belgium",
    "๐ง๐ฌ": "Bulgaria",
    "๐ง๐ญ": "Bahrain",
    "๐ง๐ฏ": "Benin",
    "๐ง๐ฒ": "Bermuda",
    "๐ง๐ด": "Bolivia",
    "๐ง๐ถ": "Caribbean Netherlands",
    "๐ง๐ท": "Brazil",
    "๐ง๐ธ": "Bahamas",
    "๐ง๐น": "Bhutan",
    "๐ง๐พ": "Belarus",
    "๐ง๐ฟ": "Belize",
    "๐จ๐ฆ": "Canada",
    "๐จ๐ซ": "Central African Republic",
    "๐จ๐ฌ": "Congo - Brazzaville",
    "๐จ๐ญ": "Switzerland",
    "๐จ๐ฐ": "Cook Islands",
    "๐จ๐ฑ": "Chile",
    "๐จ๐ฒ": "Cameroon",
    "๐จ๐ณ": "China",
    "๐จ๐ด": "Colombia",
    "๐จ๐ท": "Costa Rica",
    "๐จ๐บ": "Cuba",
    "๐จ๐ป": "Cape Verde",
    "๐จ๐ผ": "Curaรงao",
    "๐จ๐ฝ": "Christmas Island",
    "๐จ๐พ": "Cyprus",
    "๐จ๐ฟ": "Czechia",
    "๐ฉ๐ช": "Germany",
    "๐ฉ๐ฌ": "Diego Garcia",
    "๐ฉ๐ฏ": "Djibouti",
    "๐ฉ๐ฐ": "Denmark",
    "๐ฉ๐ฒ": "Dominica",
    "๐ฉ๐ด": "Dominican Republic",
    "๐ฉ๐ฟ": "Algeria",
    "๐ช๐จ": "Ecuador",
    "๐ช๐ช": "Estonia",
    "๐ด๓ ง๓ ข๓ ฅ๓ ฎ๓ ง๓ ฟ": "England",
    "๐ช๐ฌ": "Egypt",
    "๐ช๐ญ": "Western Sahara",
    "๐ช๐ธ": "Spain",
    "๐ช๐น": "Ethiopia",
    "๐ช๐บ": "European Union",
    "๐ซ๐ฎ": "Finland",
    "๐ซ๐ฏ": "Fiji",
    "๐ซ๐ท": "France",
    "๐ฌ๐ฆ": "Gabon",
    "๐ฌ๐ง": "United Kingdom",
    "๐ฌ๐ช": "Georgia",
    "๐ฌ๐ซ": "French Guiana",
    "๐ฌ๐ฌ": "Guernsey",
    "๐ฌ๐ญ": "Ghana",
    "๐ฌ๐ฎ": "Gibraltar",
    "๐ฌ๐ฑ": "Greenland",
    "๐ฌ๐ฒ": "Gambia",
    "๐ฌ๐ณ": "Guinea",
    "๐ฌ๐ถ": "Equatorial Guinea",
    "๐ฌ๐ท": "Greece",
    "๐ฌ๐ผ": "Guinea-Bissau",
    "๐ฌ๐พ": "Guyana",
    "๐ญ๐ฐ": "Hong Kong SAR China",
    "๐ญ๐ฒ": "Heard & McDonald Islands",
    "๐ญ๐ท": "Croatia",
    "๐ญ๐น": "Haiti",
    "๐ญ๐บ": "Hungary",
    "๐ฎ๐จ": "Canary Islands",
    "๐ฎ๐ฉ": "Indonesia",
    "๐ฎ๐ช": "Ireland",
    "๐ฎ๐ฑ": "Israel",
    "๐ฎ๐ฒ": "Isle of Man",
    "๐ฎ๐ณ": "INDIA",
    "๐ฎ๐ด": "British Indian Ocean Territory",
    "๐ฎ๐ถ": "Iraq",
    "๐ฎ๐ท": "Iran",
    "๐ฎ๐ธ": "Iceland",
    "๐ฎ๐น": "Italy",
    "๐ฏ๐ช": "Jersey",
    "๐ฏ๐ฒ": "Jamaica",
    "๐ฏ๐ด": "Jordan",
    "๐ฏ๐ต": "Japan",
    "๐ฐ๐ช": "Kenya",
    "๐ฐ๐ต": "North Korea",
    "๐ฐ๐ท": "South Korea",
    "๐ฐ๐ผ": "Kuwait",
    "๐ฐ๐ฟ": "Kazakhstan",
    "๐ฑ๐ฐ": "Sri Lanka",
    "๐ฑ๐ท": "Liberia",
    "๐ฑ๐น": "Lithuania",
    "๐ฑ๐บ": "Luxembourg",
    "๐ฑ๐ป": "Latvia",
    "๐ฑ๐พ": "Libya",
    "๐ฒ๐ฆ": "Morocco",
    "๐ฒ๐จ": "Monaco",
    "๐ฒ๐ฉ": "Moldova",
    "๐ฒ๐ช": "Montenegro",
    "๐ฒ๐ซ": "St. Martin",
    "๐ฒ๐ฌ": "Madagascar",
    "๐ฒ๐ญ": "Marshall Islands",
    "๐ฒ๐ฐ": "North Macedonia",
    "๐ฒ๐ฑ": "Mali",
    "๐ฒ๐ฒ": "Myanmar (Burma)",
    "๐ฒ๐ณ": "Mongolia",
    "๐ฒ๐ต": "Northern Mariana Islands",
    "๐ฒ๐ท": "Mauritania",
    "๐ฒ๐ธ": "Montserrat",
    "๐ฒ๐น": "Malta",
    "๐ฒ๐บ": "Mauritius",
    "๐ฒ๐ป": "Maldives",
    "๐ฒ๐ผ": "Malawi",
    "๐ฒ๐ฝ": "Mexico",
    "๐ฒ๐พ": "Malaysia",
    "๐ณ๐ฆ": "Namibia",
    "๐ณ๐จ": "New Caledonia",
    "๐ณ๐ช": "Niger",
    "๐ณ๐ฌ": "Nigeria",
    "๐ณ๐ฎ": "Nicaragua",
    "๐ณ๐ฑ": "Netherlands",
    "๐ณ๐ด": "Norway",
    "๐ณ๐ต": "Nepal",
    "๐ณ๐ฟ": "New Zealand",
    "๐ด๐ฒ": "Oman",
    "๐ต๐ฆ": "Panama",
    "๐ต๐ช": "Peru",
    "๐ต๐ซ": "French Polynesia",
    "๐ต๐ญ": "Philippines",
    "๐ต๐ฐ": "Pakistan",
    "๐ต๐ฑ": "Poland",
    "๐ต๐ธ": "Palestinian Territories",
    "๐ต๐น": "Portugal",
    "๐ต๐ผ": "Palau",
    "๐ต๐พ": "Paraguay",
    "๐ถ๐ฆ": "Qatar",
    "๐ท๐ด": "Romania",
    "๐ท๐ธ": "Serbia",
    "๐ท๐บ": "Russia",
    "๐ท๐ผ": "Rwanda",
    "๐ธ๐ฆ": "Saudi Arabia",
    "๐ธ๐ง": "Solomon Islands",
    "๐ธ๐ฉ": "Sudan",
    "๐ธ๐ช": "Sweden",
    "๐ธ๐ฌ": "Singapore",
    "๐ธ๐ญ": "St. Helena",
    "๐ธ๐ฎ": "Slovenia",
    "๐ธ๐ฐ": "Slovakia",
    "๐ธ๐ฑ": "Sierra Leone",
    "๐ธ๐ฒ": "San Marino",
    "๐ด๓ ง๓ ข๓ ณ๓ ฃ๓ ด๓ ฟ": "Scotland",
    "๐ธ๐ด": "Somalia",
    "๐ธ๐ท": "Suriname",
    "๐ฟ๐ฆ": "South Africa",
    "๐ธ๐ธ": "South Sudan",
    "๐ธ๐พ": "Syria",
    "๐ธ๐ฟ": "Eswatini",
    "๐น๐ฉ": "Chad",
    "๐น๐ซ": "French Southern Territories",
    "๐น๐ฌ": "Togo",
    "๐น๐ญ": "Thailand",
    "๐น๐ฏ": "Tajikistan",
    "๐น๐ฐ": "Tokelau",
    "๐น๐ฑ": "Timor-Leste",
    "๐น๐ฒ": "Turkmenistan",
    "๐น๐ณ": "Tunisia",
    "๐น๐ด": "Tonga",
    "๐น๐ท": "Turkey",
    "๐น๐ผ": "Taiwan",
    "๐น๐ฟ": "Tanzania",
    "๐บ๐ฆ": "Ukraine",
    "๐บ๐ฌ": "Uganda",
    "๐บ๐ฒ": "U.S. Outlying Islands",
    "๐บ๐ณ": "United Nations",
    "๐บ๐ธ": "United States",
    "๐บ๐พ": "Uruguay",
    "๐บ๐ฟ": "Uzbekistan",
    "๐ป๐ฆ": "Vatican City",
    "๐ป๐จ": "St. Vincent & Grenadines",
    "๐ป๐ช": "Venezuela",
    "๐ป๐ฌ": "British Virgin Islands",
    "๐ป๐ฎ": "U.S. Virgin Islands",
    "๐ป๐ณ": "Vietnam",
    "๐ป๐บ": "Vanuatu",
    "๐ด๓ ง๓ ข๓ ท๓ ฌ๓ ณ๓ ฟ": "Wales",
    "๐ผ๐ซ": "Wallis & Futuna",
    "๐พ๐ช": "Yemen",
    "๐ฟ๐ฒ": "Zambia",
    "๐ฟ๐ผ": "Zimbabwe"
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

      <h3 style={{ marginTop: "3rem" }}>Output will be displayed here ๐</h3>
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
