$(function() {
    $('.level-slider').slick({
        dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
      });
});
var clickCount = 0;
var messages = [
  "Congratulations! You clicked 20 times.",
  "Great job! You reached 20 clicks.",
  "Wow! You made it to 20 clicks.",
  "Awesome! 20 clicks achieved.",
  "Well done! 20 clicks completed."
];

function countClicks() {
  clickCount++;
  if (clickCount === 20) {
    displayPopup();
    clickCount = 0;
  }
}

function displayPopup() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  var message = messages[randomIndex];
  alert(message);
}









document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');

        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');

        document.body.style.paddingTop = '0';
      }
  });
});







function updateTime() {
  var timeDiv = document.getElementById("time");
  var currentDate = new Date();

  if (timeDiv.getAttribute("data-display") === "date") {
    var formattedDate = currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDate();
    timeDiv.textContent = formattedDate;
    timeDiv.setAttribute("data-display", "time");
  } else {
    var hours = currentDate.getHours().toString().padStart(2, "0");
    var minutes = currentDate.getMinutes().toString().padStart(2, "0");
    var formattedTime = hours + ":" + minutes;
    timeDiv.textContent = formattedTime;
    timeDiv.setAttribute("data-display", "date");
  }
}








window.onload = function() {
  updateTime();
  setInterval(updateTime, 5000);
};

if (!localStorage.getItem('alertShown')) {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert("ce site n'est pas vraiment optimisé pour la navigation sur téléphone. nous faisons de notre mieux.");
  } else {

  }
  localStorage.setItem('alertShown', true);
}









function translateText(text, targetLanguage) {
  var apiKey = 'YOUR_API_KEY';
  var apiUrl = 'https://translate.api.cloud.yandex.net/translate/v2/translate';

  var requestData = {
    sourceLanguageCode: 'en', // Assuming the source language is English
    targetLanguageCode: targetLanguage,
    texts: [text]
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': 'Api-Key ' + apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
    .then(response => response.json())
    .then(data => {
      var translatedText = data.translations[0].text;
      // Use the translated text as needed
      console.log('Translated text:', translatedText);
    })
    .catch(error => {
      console.error('Translation error:', error);
    });
}





window.addEventListener('DOMContentLoaded', function() {
  // Retrieve the language preference from storage
  // For example, using localStorage:
  var savedLanguage = localStorage.getItem('languagePreference');

  // Apply the default language selection if a preference is saved
  if (savedLanguage) {
    var dropdownButton = document.getElementById('languageDropdown');
    dropdownButton.innerText = getLanguageName(savedLanguage); // Set the selected language name on the button
    translateWebsite(savedLanguage); // Translate the website to the default language
  }
});

function getLanguageName(languageCode) {
  // Function to map language codes to language names
  // Add more language code to name mappings as needed
  switch (languageCode) {
    case 'fr':
      return 'Français';
    case 'ar':
      return 'العربية';
    case 'en':
      return 'English';
    default:
      return 'Français';
  }
}

function translateWebsite(targetLanguage) {
  // Get all the text to be translated on the page (e.g., using DOM selectors)
  var pageText = document.body.innerText;

  // Use the translation service API to translate the text to the target language
  // Replace 'API_KEY' with your actual API key or credentials
  var translationServiceURL = 'https://translation-service.com/translate?key=API_KEY&sourceLanguage=auto&targetLanguage=' + targetLanguage;

  // Make an API request to translate the text
  fetch(translationServiceURL, {
    method: 'POST',
    body: JSON.stringify({ text: pageText }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Replace the page content with the translated text
    document.body.innerText = data.translatedText;

    // Save the selected target language as the default language (e.g., using cookies or local storage)
    // Replace 'selectedLanguage' with your actual storage mechanism
    selectedLanguage = targetLanguage;
    // Save the language preference
    // For example, using localStorage:
    localStorage.setItem('languagePreference', selectedLanguage);
  })
  .catch(error => {
    console.error('Translation error:', error);
  });
}
















function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }
   









  function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }






  window.fbAsyncInit = function() {
    FB.init({
      appId            : '924759205449859',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v17.0'
    });
  };