<template>
  <div class="mainMenuBottom">
    <span v-link="{ path: '/puzzle' }" class="mainMenuButton mainMenuButton-puzzle">
      <svg class="icon" viewbox="0 0 450 450">
        <path
              d="
                 M425 425 m-71 -1
                 q-5 -5 0 -10 a20 10 0 1 0 -30 0 q5 5 0 10
                 h-60 q-10 0 -10 -10 v-60
                 q-5 -5 -10 0 a10 20 0 1 1 0 -30 q5 5 10 0
                 v-60 q0 -10 10 -10 h60
                 q5 -5 0 -10 a20 10 0 1 1 30 0 q-5 5 0 10
                 h60 q10 0 10 10 v60
                 q-5 5 -10 0 a10 20 0 1 0 0 30 q5 -5 10 0
                 v60 q0 10 -10 10 h-60

                 M200 425 m-71 -1
                 q-5 -5 0 -10 a20 10 0 1 0 -30 0 q5 5 0 10
                 h-60 q-10 0 -10 -10 v-60
                 q-5 -5 -10 0 a10 20 0 1 1 0 -30 q5 5 10 0
                 v-60 q0 -10 10 -10 h60
                 q5 -5 0 -10 a20 10 0 1 1 30 0 q-5 5 0 10
                 h60 q10 0 10 10 v60
                 q-5 5 -10 0 a10 20 0 1 0 0 30 q5 -5 10 0
                 v60 q0 10 -10 10 h-60

                 M425 200 m-71 -1
                 q-5 -5 0 -10 a20 10 0 1 0 -30 0 q5 5 0 10
                 h-60 q-10 0 -10 -10 v-60
                 q-5 -5 -10 0 a10 20 0 1 1 0 -30 q5 5 10 0
                 v-60 q0 -10 10 -10 h60
                 q5 -5 0 -10 a20 10 0 1 1 30 0 q-5 5 0 10
                 h60 q10 0 10 10 v60
                 q-5 5 -10 0 a10 20 0 1 0 0 30 q5 -5 10 0
                 v60 q0 10 -10 10 h-60
                 "/>
      </svg>
      <span>Puzzle<br>mode</span>
    </span>

    <span v-link="{ path: '/free' }" class="mainMenuButton mainMenuButton-free">
      <svg class="icon" viewbox="0 0 112 400">
        <path d="
                 M15 1
                 h-14
                 v398
                 h14
                 v-398
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 m30 -150
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 m30 -210
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 m30 -150
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 m30 -210
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 m30 -150
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 m30 -210
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 m30 -150
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 h30 v30 h-30 v-30 m0 60
                 m30 -210
                 "/>
      </svg>
      <span>Free<br>mode</span>
    </span>
  </div>
</template>

<script lang="babel">
  export default {
    props: [ 'menu', 'smallButtons', 'showTitle' ],
    created: function() {
      this.menu = 'medium';
      this.smallButtons = false;
      setTimeout(() => this.showTitle = true);
    }
  }
</script>

<style lang="less">
  @import 'services/color';

  body {
    background-color: @background-color;
  }

  .mainMenuBottom {
    display: flex;
    justify-content: center;
    padding-top: 7vh;
  }

  .mainMenuButton {
    font-size: 2vw;
    display: flex;
    align-items: center;
    color: @iconColor;
  }

  .mainMenuButton:hover {
    cursor: pointer;
    color: @iconHoverColor;
  }

  .mainMenuButton .icon{
    display: inline;
    opacity: 1;
  }

  .mainMenuButton-puzzle .icon{
    margin-right: 1vw;
  }

  .mainMenuButton-free svg {
    margin-right: 2.5vw;
    transform: rotate(30deg);
  }

  .mainMenuButton svg{
    width: 7vw;
    height: 7vw;
  }
</style>
