import http from "./base";
const get = (id: number) => {
  return http.get(`/todos/${id}`);
};

export { get };
