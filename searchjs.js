$( document ).ready(function() {
	
	$("input").value = "";
	
	$("#search").click(function(){
		if(document.getElementById("field1_star3").checked = true){
			document.location.href = 'result.html';
			document.getElementById("field1_star3").checked = false;
			document.getElementById("checkBox").checked = false;
		}

	    if(document.getElementById("resto").value == "Choongman"){
			document.location.href = 'result3.html';
			document.getElementById("resto").value == "";
		}
        $("#field1_star3").checked = false;
		$("input").value = "";
    });
	
	
	var config = {
    apiKey: "AIzaSyCU0hGcKbTnnezEtKL0QnsEqDDPX-SVfzY",
    databaseURL: "https://resto-3e57f.firebaseio.com/",
    };
    firebase.initializeApp(config);
	var database = firebase.database();
	var answersRef = database.ref('answers');
	
	answersRef.on('value', function (snapshot) {
    answersObject = snapshot.val()
    renderAnswers(answersObject)
    console.log(answersObject);
	})
	function addMessage(country, answer) {
		var messageObject = {
		country: country,
		answer: answer,
		}
		answersRef.push(messageObject)
    }
	function renderAnswers(answers) {
    const htmls = Object.values(answers).map(function (answerz) {
    return `
      <div>
      <b>${answerz.country}</b> : <i>${answerz.answer}</i>
      </div>
    `
    })
    $('.answers').html(htmls)
	

});