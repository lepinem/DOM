// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
// ( function(){
//   // Select the first element from the array
//   let first = formData[ 0 ];
//   // Log the first object
//   console.log( first );
//   // Log the string "First Name"
//   console.log( first.label );
// } )();

// -------- Your Code Goes Below this Line --------

const inputs = [];
const selects = [];
const textareas = [];
const formFields = document.getElementById('#fields');
var inputInfo = "";
var selectInfo = "";
var optionsInfo = "";
var textInfo = "";

for (let i = 0; i < formData.length; i++) {
  if (formData[i].type === 'textarea') {
    renderText(textInfo);
  } else if (formData[i].type === 'select') {
    renderSelect(selectInfo);
      for (let j = 0; j < formData[i].options.length; j++) {
        renderOptions(optionsInfo);
      }
  } else {
    renderInput(inputInfo);
  }

  function renderInput() {
    let inputInfo = document.createElement('input');
    fields.appendChild(inputInfo);
    inputInfo.setAttribute('type', formData[i].type);
    inputInfo.setAttribute('id', formData[i].id);
    inputInfo.setAttribute('label', formData[i].label);
    return inputInfo
  }
  function renderSelect() {
    let selectInfo = document.createElement('select');
    fields.appendChild(selectInfo);
    selectInfo.setAttribute('placeholder', "English");
    return selectInfo
  }
  function renderOptions() {
    let optionsInfo = document.createElement('option');
    selectInfo.appendChild(optionsInfo);
    optionsInfo.setAttribute('label', formDat[i].options[j].label);
    optionsInfo.setAttribute('name', formData[i].options[j].name);
    return optionsInfo
  }
  function renderText() {
    let textInfo = document.createElement('textarea');
    fields.appendChild(textInfo);
    textInfo.setAttribute('placeholder', "Your comment...");
    return textInfo
  }
   console.log(inputInfo);
}
