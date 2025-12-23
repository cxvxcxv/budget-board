// import { selectBalance, setBalance } from '../model/balanceSlice';

export const BalanceInput = () => {
  // const dispatch = useAppDispatch();
  // const balance = useAppSelector(selectBalance);
  // const [value, setValue] = useState(balance);

  // useEffect(() => {
  //   setValue(balance);
  // }, [balance]);

  // const handleBlur = () => {
  //   dispatch(setBalance(Number(value) || 0));
  // };

  return (
    <div className="space-y-1">
      <label className="block text-sm text-text-dimmed">Balance</label>
      <input
        type="number"
        // value={value}
        // onChange={e => setValue(e.target.value)}
        // onBlur={handleBlur}
        className="w-full p-2 text-white rounded-lg bg-white/10"
      />
    </div>
  );
};
