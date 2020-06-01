function updateForm(updatedID, outdatedID1, outdatedID2){
    var updatedElement = document.getElementById(updatedID);
    var outdatedElement1 = document.getElementById(outdatedID1);
    var outdatedElement2 = document.getElementById(outdatedID2);
    outdatedElement1.value = updatedElement.value;
    outdatedElement2.value = updatedElement.value;
}