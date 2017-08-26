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
var selectInfo = "";
var optionsInfo = "";
var textInfo = "";

for (let i = 0; i < formData.length; i++) {
  if (formData[i].type === 'textarea') {
    let textData = formData[i]
    renderText(textData);
  } else if (formData[i].type === 'select') {
    let selectData = formData[i]
    renderSelect(selectData);
      // for (let j = 0; j < formData[i].options.length; j++) {

      //   renderOptions(optionsInfo);
      // }
  } else {
    let inputData = formData[i]
    renderInput(inputData);
  }

  function renderInput() {
    let inputElement = document.createElement('input');
    fields.appendChild(inputElement);
    inputElement.setAttribute('type', inputData.type);
    inputElement.setAttribute('id', inputData.id);
    inputElement.setAttribute('label', inputData.label);
  }
  function renderSelect() {
    let selectElement = document.createElement('select');
    fields.appendChild(selectElement);
    selectInfo.setAttribute('placeholder', "English");
  }
  function renderOptions() {
    let optionsElement = document.createElement('option');
    let selectElement = document.querySelector('select')
    selectElement.appendChild(optionsElement);
    optionsInfo.setAttribute('label', formData[i].options[j].label);
    optionsInfo.setAttribute('name', formData[i].options[j].name);
  }
  function renderText(textData) {
    let textElement = document.createElement('textarea');
    fields.appendChild();
    textElemnt.setAttribute('placeholder', "Your comment...");
    return textElement
  }
   console.log(inputData);
}
