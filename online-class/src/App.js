import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

const Status = {
	LOGIN: 1,
	SIGNUP: 2,
	MAIN: 3,
};
class App extends Component {

	set setRouter(newRouter){
		this.setState({'router':newRouter});
	}

	renderSwitch(router){
		switch(router){
			case Status.LOGIN :
				console.log("Hello : " + router);
				return <SignIn onClickHandler={this.openHomePage}/>
				break;
			case Status.SIGNUP :
				return <SignUp/>
  		}

	}
	constructor(){
		super();
		this.state = {
			router : Status.LOGIN
		}

	}

	openHomePage = () => {
		this.setRouter = Status.SIGNUP ;
	}
	render(){

	  return (
	  	<div className = "App">
		  	<p></p>
		  	{this.renderSwitch(this.state.router)}
	  		
	  	</div>

	  );
	}
}


/*function App() {
  return (
  	<div>
  		<p>Hossein</p>
		<SignIn />
  	</div>

  );
}*/
export default App;
