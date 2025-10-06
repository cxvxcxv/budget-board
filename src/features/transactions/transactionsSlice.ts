import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface ITransaction {
	id: string;
	type: 'income' | 'expense';
	amount: number;
	category: string;
	note?: string;
	date: string
}

interface ITransactionsState {
	list: ITransaction[];
}

const initialState: ITransactionsState = {
	list: [],
}

const transactionSlice = createSlice({
	name: 'transactions',
	initialState, 
	reducers: {
		addTransaction: (state, action: PayloadAction<ITransaction>) => {
			state.list.push(action.payload)
		},
		removeTransaction: (state, action: PayloadAction<string>) => {
			state.list = state.list.filter(transaction => transaction.id !== action.payload)
		},
		clearAll: state => {
			state.list = []
		} 
	}
})

export const { addTransaction, removeTransaction, clearAll } = transactionSlice.actions
export default transactionSlice.reducer