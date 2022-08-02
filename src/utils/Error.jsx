export function checkInputField(input, setInputError) {
  const alphanumericRegex = /^[a-zA-Z ]+$/;

  if (input.length === 0) {
    setInputError("Your input is empty");
    return false;
  }

  if (!input.match(alphanumericRegex)) {
    setInputError("Your input contains numbers");
    return false;
  }

  setInputError("");
  return true;
}

export function checkResponseData(data, setInputError) {
  if (Object.keys(data).length === 0) {
    setInputError("Company doesnt exist");
    return false;
  }
  return true;
}

function dateIsValid(date) {
  return date instanceof Date && !isNaN(date);
}

export function checkDate(date, setDateError){

 if(!dateIsValid(new Date(date)))
 {
  setDateError('Invalid Date')
  return false
 }
 setDateError('')
 return true
}

export function checkIfArrayContainsElement(data, array, setInputError) {
  if (array.filter((item) => item.name === data.name).length > 0) {
    setInputError("Company already exists");
    return false;
  }
  return true;
}
