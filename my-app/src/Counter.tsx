import './Counter.css' 
import react, {useState} from 'react';

interface counterProps{
    num: number;
}
const Counter: react.FC<counterProps> = ({num}) => {
    const [count, setCount] = useState(0);
    const inc = () => setCount(prev => prev+ 1);
    const dec = () => setCount(prev => prev- 1);
    return(
        <div  className={'counter'}>
            {count}
            <button onClick={dec}>-</button>
          <button onClick={inc}>+</button>
          
        </div>
)

}


export default Counter;