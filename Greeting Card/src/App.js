import "./styles.css";

var curr = new Date();
var currTime = curr.getHours();
var gretting ='';

if(currTime>=12 && currTime<=17)
{
  gretting = 'Good Afternoon';
}
else if (currTime>17 && currTime<=21)
{
  gretting = 'Good Evening';
}
else if(currTime>=6 && currTime<12){
   gretting = 'Good Morning'; 
}
else{
  gretting = 'Good Night';
}

const styles = {
     color:'blue',
     backgroundColor:'lightGreen',
     justifyContent:'center',
     width:'50%',
     marginLeft:'350px',
     borderRadius:'5px'
}

export default function App() {
  return (
    <div className="App">
      <h1 style={styles}>Hello Sir/Madam, {gretting}</h1>
      
    </div>
  );
}
