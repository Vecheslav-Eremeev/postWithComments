<template>
  <div class="col-lg-6">
    <form class="was-validated" @submit.prevent="addComment">
      <div class="form-group">
        <label for="comment-name">Имя:</label>
        <input
          v-model.trim="name"
          type="name"
          class="form-control"
          id="comment-name"
          placeholder="Имя"
          required
        />
        <div class="invalid-feedback">Пожалуйста, введите ваше имя.</div>
      </div>
      <div class="form-group">
        <label for="comment-body">Ваш Комментарии:</label>
        <textarea
          v-model.trim="text"
          type="text"
          class="form-control"
          id="comment-body"
          placeholder="Комментарии"
          required
        ></textarea>
        <div class="invalid-feedback">
          Пожалуйста, введите сообщение в текстовое поле.
        </div>
      </div>
      <div class="form-group form-check text-right">
        <button type="submit" id="comment-add" class="btn btn-success">
          add Comment
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const name = ref("");
const text = ref("");
const store = useStore();

function addComment() {
  if (name.value !== "" && text.value !== "") {
    const comment = {
      id: Date.now(),
      data: new Date(Date.now()).toLocaleDateString(),
      name: name.value,
      text: text.value,
      like: false,
    };
    store.dispatch("addComment", comment);
    name.value = "";
    text.value = "";
  }
}
</script>
