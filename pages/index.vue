<template>
  <div class="container">
    <header ref="headerImage">
      <img
        :srcset="`${featureImage}x375.jpg 375w,
        ${featureImage}x563.jpg 563w,
        ${featureImage}x1125.jpg 1125w,
        ${featureImage}x1500.jpg 1500w,
        ${featureImage}x1875.jpg 1875w,
        `"
        :src="`${featureImage}x1875.jpg`"
        alt="Elva dressed as a fairy"

        class="img-fluid"
        @load="updateHeaderHeight"
      >
      <div class="title">
        <h2> {{ title }}</h2>
        <h3> by {{ author }}</h3>
        <h5> {{ publishDate }}</h5>
      </div>
      <div class="image-caption">
        <span> {{ imageCaption }}</span>
      </div>
    </header>
    <MenuHeader :offset="headerImageHeight" />
    <article>
      <p>
        For my entire life, I’ve been asked to write about everything from the American Revolution to the Atomic Theory. The one thing I was never asked to write about was myself.
      </p>
      <p>
        For assignments in English or History, the focus was always on factual information. While I’m grateful that I learned how to write those types of papers, they did little to prepare me for writing all the personal essays required for college applications. How have I contributed to my community? What was my greatest failure? How is my identity meaningful? I felt like I didn’t know myself well enough to answer those questions.
      </p>
      <p>
        Which is a serious problem and not just for the essay. In my experience, college counselors — if you’re lucky enough to have access to one — focus on helping you learn as much as you can about the universities out there without first making sure you know a thing or two about yourself.
      </p>
      <p>
        Over the application process, I reflected on my life and thought about who I was and who I want to be.This helped me to decide not only what to write for those personal essays, but also where I wanted to go to school.
      </p>
      <p>
        Follow along on my journey, and do some self-discovery of your own.
      </p>
      <div class="chapter question-0">
        <h4>Location</h4>
      </div>
      <p>
        When I was looking into different colleges, one important factor was location.
        At first, I wasn’t happy with my decision to stay close to home.
        Throughout high school, I always thought that I would go to college somewhere hundreds of miles away so I could be on my own.
        But I realized that I can be in a completely different environment with new people and still be independent, even if I’m in the same area.
        I made my decision based on my health and my family. In my junior year I had serious health problems. I’m doing much better now, but it’s more convenient for me to stay close to home so I can see the same doctors.
        I also realized that it will be helpful to see my family on a regular basis and have a support system when I’m feeling overwhelmed.
      </p>
      <QuestionBreak :id="0" v-model="answeredQuestions[0]" :question-data="questionsData[4]" />
      <div class="chapter question-1">
        <h4>Academic Rigor</h4>
      </div>
      <p>
        I knew from the beginning that I wanted to go an academically rigorous school where I would be challenged socially, intellectually, and otherwise.
        In high school, I tried my best to participate in a range of activities and challenge myself academically by taking AP or honors classes that interested me.
        I’m really looking forward to taking more writing classes because there weren’t many offered in school. I want to push myself to become better at creative and academic writing in ways that I couldn’t have before.
      </p>
      <QuestionBreak :id="1" v-model="answeredQuestions[1]" :question-data="questionsData[1]" />

      <div class="chapter question-2">
        <h4>College Application Support</h4>
      </div>
      <p>
        In my school, there was one college counselor, so I didn’t get that much one-on-one time to discuss my application and ended up doing a lot of my own research.
        I was able to learn a lot about different scholarships and programs offered at colleges I was interested in — but it took a lot of self-directed work.
      </p>
      <p>
        Even though I learned a lot by doing my own research, the information would’ve been a lot more useful if I had started earlier.
        If I had started taking college more seriously when I started high school and asked for guidance and help, my entire college application process would’ve been a lot smoother.
        That said, if you have a short amount of time, there’s still a lot you can do by talking to your counselors, other students and doing your own research.
      </p>
      <QuestionBreak :id="2" v-model="answeredQuestions[2]" :question-data="questionsData[0]" />

      <div class="chapter question-3">
        <h4>Cost</h4>
      </div>
      <p>
        When considering which school I wanted to go to, cost was one of my biggest worries.
        I had to think about my sister, who is two years older and attends an expensive private school.
        This was part of the reason why I mostly applied to public schools.
        At first I doubted this decision, but I realized that many of the differences between private and public schools weren’t significant enough to negatively affect my education.
      </p>
      <p>
        Because public schools in general are cheaper, and I also got some financial aid, the cost was reduced to a manageable level.
        I’ll be able to graduate from college with minimal-to-no debt and still get a good education.
      </p>
      <QuestionBreak :id="3" v-model="answeredQuestions[3]" :question-data="questionsData[3]" />

      <div class="chapter question-4">
        <h4>Campus Size</h4>
      </div>
      <p>
        I always knew that I didn’t want to go to a small college.
        I gravitated towards medium-sized or larger schools, mostly because my high school wasn’t very large and I felt like I knew all my classmates.
        I was looking forward to college where I could be in an environment with a larger variety of people, and where there would be no chance that I could know everyone.
      </p>
      <p>
        Some people feel trapped in small schools, and some people feel lost in large schools.
        I had to understand how I interacted with others and how I would feel in different environments before I decided where I wanted to be.
      </p>
      <QuestionBreak :id="4" v-model="answeredQuestions[4]" :question-data="questionsData[2]" />
      <p>
        Throughout the college application process I had to think about my academic experiences, my personal experiences, and how I’ve grown.
        It was a jarring experience because I had never been asked to reflect on myself in that way.
        But I’m glad I did because after it all ended and I decided where I was going to go, I felt like I knew myself a lot better and had more confidence to pursue my goals.
      </p>

      <div class="buttonContainer">
        <button v-if="isReadyToResult" class="result-button sticky" @click="processResult">
          The Reveal
        </button>
      </div>

      <div ref="result">
        <div v-if="showResult == true" class="resultDiv">
          <ul>
            <li v-for="statement in resultStatements" :key="statement">
              {{ statement }}
            </li>
          </ul>

          <p>
            Share your results through social media, or even printing for a counselor!
          </p>

          <div class="buttonArray">
            <button @click="printPage">
              Print
            </button>
          </div>
        </div>
      </div>
      <div role="credits">
        <ul>
          <li><strong>Interactive creators:</strong> Elisabeth Guta, Mya Gillam, Shanya Williams, Zoe Harwood</li>
          <li><strong>Design:</strong> Marjerrie Masicat</li>
          <li><strong>Code:</strong> Devin Glover, Radamés Ajna</li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>

import CommonUtils from '../mixins/CommonUtils'
import SOCIALDATA from '../social.config'
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
      answeredQuestions: [],
      headerImageHeight: 0
    }
  },
  computed: {
    resultStatements () {
      return this.answeredQuestions.map(response => response.response.replace(/\{\{.*\}\}/g, response.option.toLowerCase()))
    },
    featureImage () {
      return SOCIALDATA.featureImagePath
    },
    title () {
      return SOCIALDATA.title
    },
    author () {
      return SOCIALDATA.author
    },
    imageCaption () {
      return SOCIALDATA.featureImageCaption
    },
    publishDate () {
      return SOCIALDATA.publishDate
    },
    location () {
      return SOCIALDATA.location
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
    updateHeaderHeight () {
      this.headerImageHeight = this.$refs.headerImage.getBoundingClientRect().height
    },
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
.img-fluid{
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
}
// Element unique attributes
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
.chapter {
  display: inline-block;
  color: black;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin-left: -1rem;
  margin-bottom: 1rem;
  &:not(:first-child){
    margin-top: 1rem;
  }
  h4 {
    padding: 0;
    font-weight: 800;
  }
}
header {
  position: relative;
  display: flex;
  height: 80vh;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 45%;
    background-color:rgba(#00B5C3, 0.65);
    z-index: 0;
  }
}
.title{
  position: absolute;
  bottom: 0px;
  // max-width:40%;
  left: 10%;
  z-index: 1;

  h2 {
    font-family: "Days Sans", sans-serif;
    font-weight: 900;
    letter-spacing: 0.64px;
    text-transform: uppercase;
    color: $white;
    word-break: break-word;
    padding-bottom: 0px;
  }
  h3 {
    padding-top: 0px;
    font-weight: 500;
    font-family: "Solano Gothic MVB", sans-serif;
    text-transform: none;
  }
  h5 {
    padding-top: 0px;
    // font-weight: 500;
    // font-family: "Solano Gothic MVB", sans-serif;
    text-transform: uppercase;
  }
}
.image-caption{
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: -1rem;
  z-index: 1;
  span {
    font-weight: 400;
    font-size: 0.5rem;
    line-height: 1rem;
    font-family: 'Roboto Mono', sans-serif;
    text-align: center;
    color: $blue-button;
  }
}
</style>
