
import styles from "./ClockComponent.module.css"
import { useEffect,useState } from "react";




type ClockComponentProps = {
    tempo : number
    

}

function useCountdown(tempo : number){
   const [seconds, setSeconds] = useState(tempo);


   useEffect(()=>{
    if(seconds <=0) return;
    const timer = setInterval(()=>{
        setSeconds((s) => s-1);
    },1000);
    return() => clearInterval(timer);
    }, [seconds]);
   return seconds
}
const ClockComponent = ({ tempo }: ClockComponentProps) => {
    const seconds = useCountdown(tempo);
    const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

 
  return (
   
    <p className={styles.clock}>
     Tempo rimasto : <br />
     {h}:{m}:{s}
    </p>
  );
};

export default ClockComponent;