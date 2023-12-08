<template>
  <div class="container">
    <div class="row $gray-200">
      <div class="col-lg-12">
        <h2 class="text-center">Комментарии</h2>
      </div>
      <div class="col-lg-6">
        <div id="comment-field">
          <TheComment
            v-for="comment in comments"
            :key="comment.id"
            :comment="comment"
          />
        </div>
      </div>

      <Form />
    </div>
  </div>
</template>

<script setup>
import Form from "./Form.vue";
import TheComment from "./TheComment.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const comments = computed(() => store.getters.getAllComments);
</script>
