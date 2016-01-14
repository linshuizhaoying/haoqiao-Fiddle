<style>
.html,.css,.javascript,.output{
  display: inline-block;
  width: 50%;
}
.output iframe{
  height: 300px;
  width: 100%;
}
.link{
  display: inline-block;
  margin-left: 40px;
}
</style>

<template>
  <div class="link">
    <h3>Javascript文件</h3>
    <select name="javascript" id="out-js">
      <option value="./tools/js/jquery-2.1.4.min.js">
        Jquery-2.1.4
      </option>
      <option value="./tools/js/zepto.min.js">
        Zepto.min
      </option>
    </select>
  </div>
  <div class="link">
    <h3>Css文件</h3>
    <select name="javascript" id="out-css">
      <option value="./tools/css/animate.css">
        Animate
      </option>
    </select>
  </div>
  <section>
    
    <div class="html">
      <h3>HTML</h3>
      <editor type="html"></editor>
    </div>
    <div class="css">
      <h3>CSS</h3>
      <editor type="css"></editor>
    </div>
    <div class="javascript">
      <h3>JavaScript</h3>
      <editor type="javascript"></editor>
    </div>
    <div class="output" id="output">
      <h3>输出</h3>
      <iframe></iframe>
    </div>
  </section>
  

</template>

<script>

module.exports = {
  data:{
    
  },
  ready:function(){
     console.log($('#out-js option:selected').val());
     console.log($('#out-css option:selected').val());
  },
  methods: {
  
  },
  components: {
    'editor': require('./components/editor/editor.vue'),
  }
}
</script>