var resultField = $("#result")

function insertNumber(number){

    var existingNumbers = resultField.val()

    resultField.val(existingNumbers + number)
}

function clearResult(){
    resultField.val("")
}

function calculate(){
    var result = eval(resultField.val())
    resultField.val(result)
}

function deleteNumber(){
    var prsentValue = resultField.val()
    if(prsentValue != ''){
        resultField.val(prsentValue.slice(0, -1))
    }
}