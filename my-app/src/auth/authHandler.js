import storage from "../dados/storage";

const tokenValidation = () => {
  const token = storage.getToken();
  return token ? true : false;
};

export default { tokenValidation };
