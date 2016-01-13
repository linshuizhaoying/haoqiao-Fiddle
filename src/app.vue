<style>
.html,.css,.javascript,.output{
  display: inline-block;
  width: 50%;
}
.output iframe{
  height: 300px;
  width: 100%;
}
</style>

<template>

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
 
  },
  methods: {
  
  },
  components: {
    'editor': require('./components/editor/editor.vue'),
  }
}
</script>