export const initialState = {
  version: process.env.PACKAGE_VERSION,
};

export default (state = initialState, action) => {
  return state;
};
