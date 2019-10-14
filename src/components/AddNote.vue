<template>
  <div>
    <h3>Add Note</h3>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="title" placeholder="add note ..." />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddNote",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["AddNote"]),
    onSubmit() {
      this.AddNote(this.title);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>