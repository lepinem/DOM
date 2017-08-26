
let formData = [
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

//////////////////////////////

let fields = document.getElementById('fields');

for (let i = 0; i < formData.length; i++) {

  let select = document.createElement('select');
  let textarea = document.createElement('textarea');
  let input = document.createElement('input');
  // let selectIdx = document.getElementById('user-language').selectedIndex = '-1';

  if (formData[i].type === 'textarea') {
    fields.appendChild(textarea);
    textarea.setAttribute('placeholder', "Your comment...");
  } else if (formData[i].type === 'select') {
    fields.appendChild(select);
    select.setAttribute('label', formData[i].label);
    select.setAttribute('id', formData[i].id);
    select.selectedIndex = '-1';
      for (let j = 0; j<formData[i].options.length; j++) {
        let option = document.createElement('option');
        option.setAttribute("label", formData[i].options[j].label);
        option.setAttribute("value", formData[i].options[j].value);
        select.appendChild(option);
      }
  } else {
    fields.appendChild(input);
    input.setAttribute('type', formData[i].type);
    input.setAttribute('id', formData[i].id);
    input.setAttribute('label', formData[i].label);
    input.setAttribute('placeholder', formData[i].label);
  }


}
