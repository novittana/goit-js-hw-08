var throttle = require('lodash.throttle');
const feedbackFormEl = document.querySelector('.feedback-form');
const userInfo = {};

const fillFeedbackFormFields = () => {
  try {
    const userInfoFromLS = JSON.parse(localStorage.getItem('userData'));

    if (userInfoFromLS === null) {
      return;
    }

    for (const prop in userInfoFromLS) {
      feedbackFormEl.elements[prop].value = userInfoFromLS[prop];
    }
  } catch (error) {
    console.error(error);
  }
};

fillFeedbackFormFields();

const onFeedbackForm = event => {
  const { target } = event;

  const fieldValue = target.value;
  const fieldName = target.name;

  userInfo[fieldName] = fieldValue;

  localStorage.setItem('userData', JSON.stringify(userInfo));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('userData')));
  feedbackFormEl.reset();
  localStorage.removeItem('userData');
};

feedbackFormEl.addEventListener('input', throttle(onFeedbackForm, 500));
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
