<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name="flip"
                mode="out-in">
                    <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'">
                    </component>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Question from './components/Question.vue';
    import Answer from './components/Answer.vue';

    export default {
        data() {
            return {
                mode: 'app-question'
            }
        },
        methods: {
          answered(isCorrect) {
              if (isCorrect) {
                  this.mode = 'app-answer';
              } else {
                  this.mode = 'app-question';
                  alert('Wrong, try again!');
              }
          }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer
        }
    }
</script>

<style>
  .flip-enter {
    transform: scaleX(0) translateZ(0);
    opacity: 0;
  }

  .flip-enter-active {
    transition: all .4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  .flip-leave {
    transform: scaleX(0) translateZ(0);
    opacity: 0;
  }

  .flip-leave-active {
    transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
</style>
