import { DATA_RECEIVED } from './types';

const initialState = {
  data: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DATA_RECEIVED:
      if (state.data.length === 0 || payload.number % 2 === 0)
        return {
          data: [...state.data, ...payload.data],
          loading: false,
        };
      return state;
    default:
      return state;
  }
}
