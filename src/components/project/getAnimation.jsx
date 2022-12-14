import Lottie from 'react-lottie';
import data1 from './chat.json'
import data2 from './wheather.json'
import data3 from './covid.json'
import data4 from './keeper.json'
import data6 from './bank.json'
import data5 from './coming.json'

export default function GetAnimation(props){
let data="";
console.log(props.type)
if(props.type=="chat")
{ console.log("yesss");
data=data1;
}
 if(props.type=="wheather")
{
    data=data2;
}
 if(props.type=="covid")
{
    data=data3;
}
if(props.type=="keeper")
{
    data=data4;
}
 if(props.type=="bank")
{
    data=data6;
}
if(props.type=="center")
{
    data=data5;
}

const defaultOptions={
    loop:true,
    autoplay:true,
    animationData:data,
    
    rendererSettings:{
        preserveAspectRatio: "xMidYMid slice",
    },
  }
   if(props.type=="center")
    return <Lottie 
    options={defaultOptions}
   
    style={{transform:"scale(0.8) ",

}}
    height={500}
   width={500}/>
   else
   return <Lottie 
   options={defaultOptions}
  
   style={{transform:"scale(0.8) ",

}}
   height={500}
  width={400}/>

}