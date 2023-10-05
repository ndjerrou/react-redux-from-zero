import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  return (
    <div>
      Count : {counter}
      <div>
        <button onClick={handleClick}>+1</button>
      </div>
    </div>
  );
};

export default Counter;
