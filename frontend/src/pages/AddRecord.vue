<template>
  <v-form
    ref="form"
    v-model="valid"
    class="ma-auto mt-3 w-50"
    justify="center"
    fluid
    lazy-validation
  >
    <v-text-field
      v-model="model"
      :rules="modelRules"
      label="Модель"
      required
    ></v-text-field>

    <v-text-field
      v-model="number"
      :rules="numberRules"
      label="Номер"
      required
    ></v-text-field>

    <v-select
      v-model="color"
      :items="colors"
      :rules="[(v) => !!v || 'Выберите цвет']"
      label="Цвет"
      required
    ></v-select>

    <v-textarea v-model="comment" label="Комментарий"></v-textarea>

    <v-btn color="success" class="me-4" @click="validate"> Добавить </v-btn>

    <v-btn color="error" class="me-4" @click="reset"> Сбросить </v-btn>
  </v-form>
</template>
<script>
import { router } from "@/router";
import store from "@/store";
// import {mapActions} from 'vuex'
export default {
  data: () => ({
    valid: true,
    model: "",
    modelRules: [(v) => !!v || "Введите модель"],
    number: "",
    numberRules: [
      (v) => !!v || "Введите номер",
      (v) =>
        /[АВЕКМНОРСТУХавекмнорстух]\d{3}[АВЕКМНОРСТУХавекмнорстух]{2}\d{2,3}rus/.test(
          v
        ) || "Неверный формат номера",
    ],
    color: null,
    colors: ["Черный", "Белый", "Зеленый", "Красный"],
    comment: "",
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        const newRecord = {
          model: this.model,
          number: this.number,
          color: this.color,
          comment: this.comment,
        };
        store.dispatch("createRecord", newRecord).then((response) => {
          if (response.status === 200) {
            store.commit("pushRecord", response);
            alert("Успешно добавлено");
            router.push("/");
          } else {
            alert("Ошибка при добавлении");
          }
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  computed: {
    // ...mapActions({
    //   fetchRecords: "fetchRecords",
    // }),
  },
};
</script>
<style lang=""></style>
