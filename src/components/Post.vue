<template>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="../assets/img/cat_0.png"
          class="d-block mx-lg-auto img-fluid"
          alt="cat"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">{{ title }}</h1>
        <p class="lead">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Из ряда вон выходящий катарсис: сомнение или даосизм?");
const text = ref(`Принцип восприятия, по определению, ментально дискредитирует
          дедуктивный метод, отрицая очевидное. Отвечая на вопрос о
          взаимоотношении идеального ли и материального ци, Дай Чжень заявлял,
          что позитивизм прост.`);
</script>
