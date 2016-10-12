//My updating glitches a tonnnn Ask her about iiiittttt!
var textValue;
var textContent = document.getElementById("textArea");
var convertedKey;
$("#inputText").keyup(function(e) {
    textValue = document.getElementById("inputText").value; //The input text box
    if ($("input:checked").val() == "caesarCipher") {
        if (e.keyCode == 8) {
            textContent.textContent = textContent.textContent.substr(0, textContent.textContent.length - 1);
        } else if (e.keyCode == 90) {
            textContent.textContent += "A"
        } else {
            convertedKey = String.fromCharCode(e.keyCode + 1); //The converted Key
            textContent.textContent += convertedKey;
        }
    } else if ($("input:checked").val() == "echo") {
        if (e.keyCode == 8) {
            textContent.textContent = textContent.textContent.substr(0, textContent.textContent.length - 1);
        } else {
            textContent.textContent += String.fromCharCode(e.keyCode); //Ask Boyles about an easier way to do this?
        }
    } else if ($("input:checked").val() == "heiroglyphics") {
        if (e.keyCode == 32) {
            textContent += " "
            console.log("Added space")
        } else if (e.keyCode == 8) {
            textContent.textContent = textContent.textContent.substr(0, textContent.textContent.length - 1);
        } else if (e.keyCode > 64 && e.keyCode < 91) {
            $("#textArea").append("<img src='images/heiroglyphics/" + String.fromCharCode(e.keyCode) + ".gif'>");
            console.log("STUFF" + String.fromCharCode(e.keyCode));
        }
    }
});
$("input[type='radio']").click(function() {
    $("input:checked").prop('checked', false);
    $(this).prop('checked', true)
    textContent.textContent = "";
    document.getElementById("inputText").value = "";
});
