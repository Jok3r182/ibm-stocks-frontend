export function checkInputField(input, setInputError){
    const alphanumericRegex = /^[a-zA-Z ]+$/
    
    if(input.length === 0){
        setInputError('Your input is empty')
        return false
    }

    if(!input.match(alphanumericRegex)){
        setInputError('Your input contains numbers')
        return false
    }
    
    setInputError('')
    return true
}

export function checkDates(startDate, endDate, setStartDateError, setEndDateError){
    if(startDate>endDate){
        setStartDateError('Start date cant be newer than End date')
        setEndDateError('End date cant be older than Start date')
        return false
    }

    if(startDate===endDate){
        setEndDateError('End date cant equal to Start date')
        setStartDateError('Start date cant be equal to End date')
        return false
    }
    setStartDateError("");
    setEndDateError("");
    return true
}
