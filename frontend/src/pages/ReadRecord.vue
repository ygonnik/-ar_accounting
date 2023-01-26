<template lang="">
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Модель</th>
        <th class="text-left">Номер</th>
        <th class="text-left">Цвет</th>
        <th class="text-left">Комментарий</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in this.getRecords" :key="record.id">
        <td>{{ record.model }}</td>
        <td>{{ record.number }}</td>
        <td>{{ record.color }}</td>
        <td>{{ record.comment }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
import { mapGetters } from "vuex";
import store from "@/store";
export default {
  beforeCreate() {
    store.dispatch("fetchRecords").then((response) => {
      if (response.status === 200) {
        store.commit("setRecords", response.data);
      } else {
        alert("Ошибка при чтении");
      }
    });
  },
  computed: {
    ...mapGetters({
      getRecords: "getRecords",
    }),
  },
};
</script>
<style lang=""></style>
