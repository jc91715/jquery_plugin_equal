;(function($, window, document,undefined) {

    var EqualHeight = function (ele, opt) {
        this.$ele = $(ele),
        this.heights = [],
        this.height = '',
        this.defaultes = {
            'type':'ave',
            'add':0,
            'selector':''
        },
        this.options = $.extend({}, this.defaultes, opt),
        this.init()
    }
    EqualHeight.prototype = {
        init: function(){
            var self = this
            if(this.options.type!='diff'){
                this.$ele.each(function () {
                    if ($(this).height() > 50) {
                        self.heights.push($(this).height())
                    }
                })
            }

        },
        getHeight:function(heights){
            if(this.options.type=='ave'){
                this.getAve()
            }else if(this.options.type=='max'){
                this.getMax()
            }else if(this.options.type=='diff'){
                this.getDiff()
            }
        },
        getAve: function() {
            var sum = eval(this.heights.join("+"));
            return this.height=~~(sum / this.heights.length * 100) / 100;
        },
        getMax: function(){
            return this.height = Math.max.apply(Math, this.heights)
        },
        getDiff: function () {
            return this.height = this.$ele.height()>$(this.options.selector).height()?this.$ele.height():$(this.options.selector).height()
        },
        run: function () {

            if(this.options.type!='diff'){
                var self = this
                if (this.heights.length != 0) {
                    this.getHeight()
                    this.$ele.each(function () {
                        $(this).height(self.height+self.options.add)
                    })
                }
            }else{
                if($(this.options.selector).length>0){
                    this.$ele.height(this.height+this.options.add)
                    $(this.options.selector).height(this.height+this.options.add)
                }
            }

            return this.$ele;
        }
    }

    $.fn.equalHeight = function(options){
        var equalHeight = new EqualHeight(this,options)
        return equalHeight.run()
    }

})(jQuery, window, document);
