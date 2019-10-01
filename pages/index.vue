<template>
  <div class="container">
    <MenuHeader />

    <article>
      <template>
        <div class="questions">
          <div class="centertext">
            For my entire life, I’ve been asked to write about everything from the American Revolution to the Atomic Theory. The one thing I was never asked to write about was myself.
          </div>
          <div class="centertext">
            For assignments in English or History, the focus was always on factual information. While I’m grateful that I learned how to write those types of papers, they did little to prepare me for writing all the personal essays required for college applications. How have I contributed to my community? What was my greatest failure? How is my identity meaningful? I felt like I didn’t know myself well enough to answer those questions.
          </div>
          <div class="centertext">
            Which is a serious problem and not just for the essay. In my experience, college counselors — if you’re lucky enough to have access to one — focus on helping you learn as much as you can about the universities out there without first making sure you know a thing or two about yourself.
          </div>
          <div class="centertext">
            Over the application process, I reflected on my life and thought about who I was and who I want to be.This helped me to decide not only what to write for those personal essays, but also where I wanted to go to school.
          </div>
          <div class="centertext">
            Follow along on my journey, and do some self-discovery of your own.
          </div>

          <div class="centertext">
            <strong class="question-0">Location</strong>
            <div>
              When I was looking into different colleges, one important factor was location.
              At first, I wasn’t happy with my decision to stay close to home.
              Throughout high school, I always thought that I would go to college somewhere hundreds of miles away so I could be on my own.
              But I realized that I can be in a completely different environment with new people and still be independent, even if I’m in the same area.
              I made my decision based on my health and my family. In my junior year I had serious health problems. I’m doing much better now, but it’s more convenient for me to stay close to home so I can see the same doctors.
              I also realized that it will be helpful to see my family on a regular basis and have a support system when I’m feeling overwhelmed.
            </div>
          </div>
          <QuestionBreak :id="0" v-model="answeredQuestions[0]" :question-data="questionsData[4]" />
          <div class="centertext">
            <strong class="question-1">Academic Rigor</strong>
            <div>
              I knew from the beginning that I wanted to go an academically rigorous school where I would be challenged socially, intellectually, and otherwise.
              In high school, I tried my best to participate in a range of activities and challenge myself academically by taking AP or honors classes that interested me.
              I’m really looking forward to taking more writing classes because there weren’t many offered in school. I want to push myself to become better at creative and academic writing in ways that I couldn’t have before.
            </div>
          </div>
          <QuestionBreak :id="1" v-model="answeredQuestions[1]" :question-data="questionsData[1]" />

          <div class="centertext">
            <strong class="question-2">College Application Support</strong>
            <div>
              In my school, there was one college counselor, so I didn’t get that much one-on-one time to discuss my application and ended up doing a lot of my own research.
              I was able to learn a lot about different scholarships and programs offered at colleges I was interested in — but it took a lot of self-directed work.
            </div>
            <br>
            Even though I learned a lot by doing my own research, the information would’ve been a lot more useful if I had started earlier.
            If I had started taking college more seriously when I started high school and asked for guidance and help, my entire college application process would’ve been a lot smoother.
            That said, if you have a short amount of time, there’s still a lot you can do by talking to your counselors, other students and doing your own research.
          </div>
          <QuestionBreak :id="2" v-model="answeredQuestions[2]" :question-data="questionsData[0]" />
          <div class="centertext">
            <strong class="question-3">Cost</strong>
            <div>
              When considering which school I wanted to go to, cost was one of my biggest worries.
              I had to think about my sister, who is two years older and attends an expensive private school.
              This was part of the reason why I mostly applied to public schools.
              At first I doubted this decision, but I realized that many of the differences between private and public schools weren’t significant enough to negatively affect my education.
            </div>
            <br>
            Because public schools in general are cheaper, and I also got some financial aid, the cost was reduced to a manageable level.
            I’ll be able to graduate from college with minimal-to-no debt and still get a good education.
          </div>
          <QuestionBreak :id="3" v-model="answeredQuestions[3]" :question-data="questionsData[3]" />

          <div class="centertext">
            <strong class="question-4">Campus Size</strong>
            <div>
              I always knew that I didn’t want to go to a small college.
              I gravitated towards medium-sized or larger schools, mostly because my high school wasn’t very large and I felt like I knew all my classmates.
              I was looking forward to college where I could be in an environment with a larger variety of people, and where there would be no chance that I could know everyone.
            </div>
            <br>
            Some people feel trapped in small schools, and some people feel lost in large schools.
            I had to understand how I interacted with others and how I would feel in different environments before I decided where I wanted to be.
          </div>
          <QuestionBreak :id="4" v-model="answeredQuestions[4]" :question-data="questionsData[2]" />

          <div class="centertext">
            Throughout the college application process I had to think about my academic experiences, my personal experiences, and how I’ve grown.
            It was a jarring experience because I had never been asked to reflect on myself in that way.
            But I’m glad I did because after it all ended and I decided where I was going to go, I felt like I knew myself a lot better and had more confidence to pursue my goals.
          </div>

          <div class="buttonContainer">
            <button v-if="isReadyToResult" class="result-button sticky" @click="processResult">
              See Result
            </button>
          </div>

          <div class="resultContainer" ref="result">
            <div v-if="showResult == true" class="resultDiv">
              <h1> Here's what you said... </h1>
              <ul>
                <li v-for="statement in resultStatements" :key="statement">
                  {{ statement }}
                </li>
              </ul>

              <div class="centertext finalText">
                Share your results through social media, or even printing for a counselor!
              </div>

              <div class="buttonArray">
                <button @click="printPage">
                  Print
                </button>
              </div>
            </div>
          </div>
          </questionbreak>
        </div>
      </template>
    </article>
  </div>
</template></div>
</template>
    </article>
  </div>
</template>

<script>

import CommonUtils from '../mixins/CommonUtils'
import ROWS_DATA from '~/data/data.json'
import MenuHeader from '~/components/MenuHeader.vue'
import QuestionBreak from '~/components/QuestionBreak.vue'

export default {
  components: {
    MenuHeader,
    QuestionBreak
  },
  mixins: [
    CommonUtils
  ],
  data () {
    return {
      isReadyToResult: false,
      showResult: false,
      answeredQuestions: []
    }
  },
  computed: {
    resultStatements () {
      return this.answeredQuestions.map(response => response.response.replace(/\{\{.*\}\}/g, response.option.toLowerCase()))
    }
  },
  watch: {
    answeredQuestions () {
      this.isReadyToResult = true
    }
  },
  asyncData (ctx) {
    // const slug = await ctx.params.slug
    return {
      questionsData: ROWS_DATA.content
    }
  },
  mounted () {
  },
  methods: {
    processResult () {
      this.showResult = true
      // nextTick() waits for the next update cycle, very useful for focusing on new DOM objects.
      this.$nextTick(() => this.$refs.result.scrollIntoView({ behavior: 'smooth' }))
    },
    printPage () {
      window.print()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/css/vars";
@import "~@/css/base";
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

// Element unique attributes
strong {
  display: inline-block;
  color: black;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin-left: -1rem;
  margin-bottom: 1rem;
}
.buttonContainer{
  width: 100%;
  text-align: center;
}
.result-button{
  transition: 0.3s;
  font-weight: 600;
  font-size: 1rem;
  background-color: #3CCB98;
  padding: 1rem;
  border: 2px solid #3CCB98;
  border-radius: 1rem;
  margin-bottom: -1rem;
}
.result-button:hover{
  transition: 0.3s;
  font-weight: 600;
  font-size: 1rem;
  background-color: #3CCB98;
  padding: 1rem;
  border: 2px solid grey;
  border-radius: 1rem;
  box-shadow: 0px 0px 6px black;
}
.resultContainer{
  background-color: #1AFFA3;
  text-align: center;
  border-radius: 1rem;
}
.quotes-container {
  position: relative;
  display: flex;
  justify-content: center;
  // height: 90vh;
  // align-items: center;
}
.mute-bar {
  position: relative;
  right: 0px;
  top: 0px;
  z-index: 10;
  margin-top: auto;
  margin-bottom: auto;
}
.scroll-text{
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
}
.flex{
  display: flex;
  width: 100%;
    justify-content: center;

}
.fixed {
  position: fixed;
  justify-content: flex-end;
  right: 0px;
  top: 0px
}
.chapter {
  position: relative;
  height: 100vh;
  transition: opacity 0.3s ease-out;
}
.sticky_sentinel--top {
  position: absolute;
  left: 0;
  right: 0;
  background-color: red;
  visibility: hidden;
  height: 40px;
  bottom: 100%;
}
.progress {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 10px;
  background-color: lighten($color: $dark, $amount: 20%);
  width: 0%;
  z-index: -1;
}
.center {
  text-align: center;
}
.full-height{
  display: flex;
  flex-direction:column;
  // justify-content: space-between;
  min-height: calc(100vh - 68px);
}
.centertext{
  padding: 1rem 0 1rem 0;
}
.end{
  min-height: 100vh;
}
ul{
  list-style-type: none;
  font-size: 0.8rem;
  padding: 1rem;
  margin:auto;
}
.credits{
  font-size: 0.8rem;
}
</style>
