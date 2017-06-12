console.log("hey?")






var randomOne=""


function makeNewQuote(){

	function randomQuote(){
		var quotesArr= [
			{text: "failed"},
			{text: "weak"},
			{text: "rigged"},
			{text: "dumb"},
			{text: "stupid"},
			{text: "overrated"},
			{text: "sad"},
			{text: "the worst"},
			{text: "no-good"},
			{text: "total"},
			{text: "lousy"},
			{text: "false"},
			{text: "major"},
			{text: "complete"},
			{text: "unfair"},
			{text: "complete"},
			{text: "nasty"},
			{text: "massive"},
			{text: "foul"},
			{text: "pathetic"},
			{text: "huge"},
			{text: "horrible"},
			{text: "bad"



			}
		]


		var quotesArr2= [
			{text: "desperate"},
			{text: "biased"},
			{text: "irrelevant"},
			{text: "incompotent"},
			{text: "dopey"},
			{text: "rotten"},
			{text: "inaccurate"},
			{text: "fraudulent"},
			{text: "biased"},
			{text: "dishonest"},
			{text: "disloyal"},
			{text: "nasty"},
			{text: "lazy"},
			{text: "wrong"},
			{text: "crooked"},
			{text: "incompetent"},
			{text: "miserable"},
			{text: "boring"},
			{text: "wacky"},
			{text: "arrogant"},
			{text: "ridiculous"},
			{text: "terrible"},
			{text: "desperate"},
			{text: "zero-talent"},
			{text: "sloppy"},
			{text: "disgusting"},
			{text: "broken"},
			{text: "laughable"},
			{text: "weak"



			}
		]

		var quotesArr3= [
			{text: "failure"},
			{text: "disaster"},
			{text: "fraud"},
			{text: "dummy"},
			{text: "dope"},
			{text: "loser"},
			{text: "liar"},
			{text: "phony"},
			{text: "hypocrite"},
			{text: "mess"},
			{text: "moron"},
			{text: "jerk"},
			{text: "waste"},
			{text: "disgrace"},
			{text: "joke"},
			{text: "hypocrite"},
			{text: "total embarassment"},
			{text: "sack"},
			{text: "sad case"},
			{text: "basketcase"},
			{text: "nut job"},
			{text: "wacko"},
			{text: "clown"},
			{text: "low-life"},
			{text: "atheist"},
			{text: "lightweight"},
			{text: "scum"},

			{text: "traitor"



			}
		]

		// console.log(quotesArr)
		randomOne= quotesArr[Math.floor(Math.random() * quotesArr.length)]
		console.log(randomOne)

		randomTwo= quotesArr2[Math.floor(Math.random() * quotesArr2.length)]
		console.log(randomTwo)

		randomThree= quotesArr3[Math.floor(Math.random() * quotesArr3.length)]
		console.log(randomThree)

	}



randomQuote()
	var myButton= document.getElementById("quoteButton");
	var myQuoteInner= document.getElementById("quote")
	myQuoteInner.innerHTML= randomOne.text + " "+ randomTwo.text + " "+ randomThree.text







}
