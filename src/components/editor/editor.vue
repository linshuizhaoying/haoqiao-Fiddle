<style lang="sass">

</style>

<template>

	<div id="{{type}}"></div>
</template>

<script>
module.exports = {
  props: ['type'],

  ready:function(){
  	var that = this;
  	//console.log(that.type);
    //选中目标节点
	  var _html = document.getElementById(that.type);
    //设置默认内容
	  var _value = {
	  	html:function(){
	  		return "<div class='test'>LinshuiZhaoying</div>"
	  	},
	  	css:function(){
	  		return ".test{color:red}"
	  	},
	  	javascript:function(){
	  		return "var LinshuiZhaoying = document.querySelectorAll('.test');for (var i = 0; i < LinshuiZhaoying.length; i++) { LinshuiZhaoying[i].addEventListener('click', function(event) { alert('ok')});}"
	  	}
	  };
    //根据传来的参数进行赋值
	  _html.value = _value[that.type]();

    //配置文件
	  var _config = {
	   // mode: "text/html",
	    mode: "text/html",
	    lineNumbers: true,
	    lineWrapping: true,
	    extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
	    foldGutter: true,
	    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
	    keyMap: "sublime",
	    profile: 'xhtml' /* define Emmet output profile */
	  };

	  var _modes = {
	  	html:function(){
	  		return "text/html"
	  	},
	  	css:function(){
	  		return "css"
	  	},
	  	javascript:function(){
	  		return "javascript"
	  	}
	  };
	  _config.mode = _modes[that.type]();

    //将其绑定到window下,方便后面调用
	  window["editor_"+that.type] = CodeMirror.fromTextArea(_html,_config);


	  emmetCodeMirror(window["editor_"+that.type], {
	      'Tab': 'emmet.expand_abbreviation_with_tab',
	      'Cmd-Alt-B': 'emmet.balance_outward'
	  });

    //设置界面风格
	  window["editor_"+that.type].setOption("theme", "mdn-like");

    //每当内容改变自动渲染
    window["editor_"+that.type].on('change', function () {
      that.render();
    });
    


  },
  methods: {
   render:function(){
      // Base template
      var base_tpl =
          "<!doctype html>\n" +
          "<html>\n\t" +
          "<head>\n\t\t" +
          "<meta charset=\"utf-8\">\n\t\t" +
          "<title>Test</title>\n\n\t\t\n\t" +
          "</head>\n\t" +
          "<body>\n\t\n\t" +
          "</body>\n" +
          "</html>";
      
      var sourceCode = function() {
        var html =  window.editor_html.getValue(),
            css = window.editor_css.getValue(),
            js = window.editor_javascript.getValue(),
            src = '';
        
        // HTML
        src = base_tpl.replace('</body>', html + '</body>');
        var outcss =  '<link rel="stylesheet" href="' + $('#out-css option:selected').val() + '">';

        // 内部CSS
        css = '<style>' + css + '</style>';
        src = src.replace('</head>', css + outcss + '</head>');
        
        // 内部Javascript
        js = '<script>' + js + '<\/script>';
        var outjs = '<script src="' + $('#out-js option:selected').val() +'"><\/script>';
        src = src.replace('</body>', js + outjs + '</body>');
        
        return src;
      };
      
      var render = function() {
        var source = sourceCode();
        
        var iframe = document.querySelector('#output iframe'),
            iframe_doc = iframe.contentDocument;
        
        iframe_doc.open();
        iframe_doc.write(source);
        iframe_doc.close();
      };

      render();

   }
  },
  data: function () {
    return {
     
    }
 },
 components: {

  }
}
</script>