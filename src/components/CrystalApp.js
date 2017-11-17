import React from 'react';
import WinsAndLosses from './WinsAndLosses';
import Header from './Header';
import Score from './Score';
import Options from './Options';
import ScoreModal from './ScoreModal';

export default class CrystalApp extends React.Component {
        // initial values for wins, losses, counter, and crystals
    state = {
        target: 0,
        wins: 0,
        losses: 0,
        counter: 0,
        blue: 0,
        red: 0,
        yellow: 0,
        green: 0
    }

    componentDidMount = () => {
        let targetNumber = Math.floor((Math.random() * 120) + 20);
        this.setState(() => ({ target: targetNumber }));
        console.log(targetNumber);

        let blueCrystal = Math.floor((Math.random() * 12) + 1);
        this.setState(() => ({ blue: blueCrystal }));
        let redCrystal = Math.floor((Math.random() * 12) + 1);
        this.setState(() => ({ red: redCrystal }));
        let yellowCrystal = Math.floor((Math.random() * 12) + 1);
        this.setState(() => ({ yellow: yellowCrystal }));
        let greenCrystal = Math.floor((Math.random() * 12) + 1);
        this.setState(() => ({ green: greenCrystal }));

        // let crystals = new Map([['blue', 0], ['red', 0], ['yellow', 0], ['green', 0]]);
        // for (let [key, value] of crystals) {
        // let crystals = Object.assign({}, this.state.crystals);    //creating copy of object
        // value = Math.floor((Math.random() * 12) + 1);                        //updating value
        // this.setState({crystals});
        // console.log(crystals.blue);
        // }
    }      

    

// reset the game
// function reset() {
// 			counter = 0;

// 			var crystals = {
// 				blue: 0,
// 				red: 0,
// 				yellow: 0,
// 			 	green: 0
// 			};

// 			for (var prop in crystals) {
// 				// randomly generate a value between 1 and 12 for each crystal
// 				var randomvalue = Math.floor((Math.random() * 12) + 1);
// 				crystals[prop] = randomvalue;
// 				$("." + prop).attr("data-crystalvalue", randomvalue);
// 			}
// 			// randomly generate a value between 19 and 120 for the target
// 			targetNumber = Math.floor((Math.random() * 120) + 20);

// 		  $("#target").html("Target Number: " + targetNumber);

// 			$("#current-total").html("Current Total: " + counter);
//    };

// 	 // on button click
//   $(".button").on("click", function() {

// 		    var crystalValue = ($(this).attr("data-crystalvalue"));
// 		    crystalValue = parseInt(crystalValue);
// 		    // Every click, from every crystal adds to the global counter.
// 		    counter += crystalValue;
// 				// dynamically add teh current value to the DOM
// 		    $("#current-total").html("Current Total: " + counter);
// 				// if the user wins, alert the user, increase win total, and reset game
// 			 	if (counter === targetNumber) {
// 			 		alert("You Win!");
// 			 		wins++;
// 			      $("#wins").html("Wins: " + wins);
// 			      reset();
// 			    }
// 					// if the user loses, alert the user, increase loss total, and reset game
// 		    else if (counter > targetNumber) {
// 		    	alert("You Lose!");
// 		    	losses++;
// 		       $("#losses").html("Losses: " + losses);
// 		       reset();
// 		    }
//   });
    
    render() {
        const subtitle = 'Click on a crystal to to reach the target number, but be careful not to go over';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <div>
                        <h1>{this.state.target}</h1>
                        <h1>{this.state.counter}</h1>
                    </div>
                    <div>
                        <button value={this.state.blue}>{this.state.blue}</button>
                        <button value={this.state.red}>{this.state.red}</button>
                        <button value={this.state.yellow}>{this.state.yellow}</button>
                        <button value={this.state.green}>{this.state.green}</button>
                    </div>
                    <Score 
                    />
                    <div className="widget">
                        <Options
                        />
                    </div>
                    <div>
                        <WinsAndLosses />
                    </div>
                </div>
                 <ScoreModal
                 />
            </div>
        );
    }
}