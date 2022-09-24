import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import Dropdown from "./src/components/Dropdown";

const options = [
  { label: "India", value: 1 },

  { label: "Australia", value: 2 },

  { label: "America", value: 3 },

  { label: "China", value: 4 },

  { label: "Japan", value: 5 },

  { label: "Canada", value: 6 }
];

const languages = [
  { label: "Hindi", value: 1 },

  { label: "Marathi", value: 2 },

  { label: "Gujrati", value: 3 },

  { label: "Tamil", value: 4 },

  { label: "Urdu", value: 5 },

  { label: "English", value: 6 }
];

const App = (props) => {  
    return (
      <ScrollView>
        <Dropdown
          title="Countries" 
          label="Select Item" 
          options={options}
        />

        <Dropdown
          title="Languages" 
          label="Select Item" 
          options={languages}
        />
        </ScrollView>
    );
  }

export default App;
