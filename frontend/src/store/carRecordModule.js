import axios from "axios";
export const carRecordModule = {
  state: () => ({
    records: [],
  }),
  mutations: {
    setRecords(state, payload) {
      state.records = payload;
    },
    pushRecord(state, payload) {
      state.records.push(payload);
    },
  },
  getters: {
    getRecords(state) {
      return state.records;
    },
  },
  actions: {
    fetchRecords() {
      return axios.get("http://127.0.0.1:8000/api/readrecords");
    },
    createRecord(context, { model, number, color, comment }) {
      return axios.post("http://127.0.0.1:8000/api/addrecord", {
        model: model,
        number: number,
        color: color,
        comment: comment,
      });
    },
  },
};
