'use strict';
 
/**
 * Html页面多语言化。
 *
 * 在Html页面中只需先引用一个JQuery文件：
 * 例如：<script src="http://libs.baidu.com/jquery/1.8.1/jquery.min.js"></script>
 * 
 * 在引用本JS文件
 * 例如：<script src="./zh-cn.bilingualism.js"></script>
 *
 * 如果你想多语言化一个Html页面，你应该做两件事:
 * 1. 在HTML标签中，加入 data-sw-translate="" 标记
 *      例如：<h6 data-sw-translate="">Hello World</h6>
 * 2. 然后在下面的 window.SwaggerTranslator.learn 中添加中英文对应关系
 *      添加： "Hello World": "你好，世界",
 */
window.SwaggerTranslator = {
    _words: [],
 
    translate: function () {
        var $this = this;
        $('[data-sw-translate]').each(function () {
            $(this).html($this._tryTranslate($(this).html()));
            $(this).val($this._tryTranslate($(this).val()));
            $(this).attr('title', $this._tryTranslate($(this).attr('title')));
        });
    },
 
    _tryTranslate: function (word) {
        return this._words[$.trim(word)] !== undefined ? this._words[$.trim(word)] : word;
    },
 
    learn: function (wordsMap) {
        this._words = wordsMap;
    }
};
 
 
/* jshint quotmark: double */
window.SwaggerTranslator.learn({
    "System overview": "概览",
    "System details": "详情",
    "WiFi mode": "WiFi模式",
    "WiFi channel": "Wifi通道",
    "Flash chip ID": "Flash芯片ID",
    "Flash size": "Flash大小",
    "Microcontroller Console":"处理器控制台",
    "Reset &#xb5;C":"复位&#xb5;C",
    "Clear Log":"清除日志",
    "&nbsp; Baud:":"&nbsp;波特率:", method, url, "->","&nbsp; Fmt:":"&nbsp;格式:", method, url, "->","Console":"控制台","(ENTER to submit, ESC to clear)":"(ENTER提交, ESC清除)",
    "History buffer":"历史缓冲区",
    "(UP/DOWN arrows to select)":"(上/下箭头选择)",
    "WiFi Soft-AP Configuration":"WiFi Soft-AP配置",
    "Soft-AP State":"Soft-AP状态",
    "Change Soft-AP settings!":"更改Soft-AP设置!",
    "Debug Log":"调试日志"
});
 
 
$(function () {
    window.SwaggerTranslator.translate();
});