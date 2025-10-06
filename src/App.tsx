import { useAppDispatch, useAppSelector } from './app/hooks';
import { addTransaction } from './features/transactions/transactionsSlice';

export const App = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(state => state.transactions.list);
  console.log(transactions);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1f29] via-[#27293d] to-[#1a1b26] p-8 text-white">
      <h1 className="mb-4 text-3xl font-bold">💸 Budget Board</h1>

      <button
        onClick={() =>
          dispatch(
            addTransaction({
              id: Date.now().toString(),
              type: 'income',
              amount: 100,
              category: 'Salary',
              date: new Date().toISOString(),
            }),
          )
        }
        className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
      >
        Add Dummy Transaction
      </button>

      <ul className="mt-4 space-y-2">
        {transactions.map(t => (
          <li
            key={t.id}
            className="rounded-lg bg-white/10 p-3 backdrop-blur-md"
          >
            <span className="font-medium">{t.category}</span> — ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};
