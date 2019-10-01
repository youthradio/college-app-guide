<template>
  <div :class="[`question-${id}`, 'break-question']">
    <main>
      <h3 class="questionstyle">
        {{ questionData.headline }}
      </h3>
      <p class="pre-input">
        <label
          v-for="(option,i) in questionData.options"
          :key="`option-${i}`"
        >
          <input v-model="innervalue" :name="questionData.topic" type="radio" :value="option">
          <span>{{ option.option }}</span>
        </label>
      </p>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      require: true,
      default: null
    },
    questionData: {
      type: Object,
      require: true,
      default: null
    },
    value: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      innervalue: null
    }
  },
  watch: {
    innervalue () {
      this.$emit('input', this.innervalue)
    }
  }

}
</script>

<style lang="scss" scoped>
// Unique colors for both Subheader and Break question
.question-0{
  background-color: #FFDB5A;
}
.question-1{
  background-color: #F7825D;
}
.question-2{
  background-color: #ED5B5B;
}
.question-3{
  background-color: #3C76CB;
}
.question-4{
  background-color: #3CC2CB;
}
.break-question {
  border-radius: 1rem;
  padding: 1rem;
  display: block;
}
.break-question label{
  display: block;
}
.questionstyle{
  font-size: 1rem;
}
h3 {
  text-align: center;
}
main{
  max-width: 30rem;
}
</style>
