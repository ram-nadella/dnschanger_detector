CloudFlare.define("dnschanger_detector", ["cloudflare/dom"], function(dom){
    window.dnsChangerPresent = function(){
        var message = dom.createElement("div");
        dom.setAttribute(message, "style", 'z-index: 100000; width:100%; text-align:center; position: absolute; top: 0; left: 0; margin: 0 0 20px 0; padding: 10px; background-color: #f0f0f0; color: #404040; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; border-bottom: 1px solid #a5a5a5;');
        var warning = dom.createElement("p");
        dom.setAttribute(warning, "style", 'font-size: 16px; font-weight: bold; color: #be2424; margin-bottom: 5px;');
        warning.innerHTML = 'Your computer has DNS settings that mean you probably have the DNS Changer malware.';
        message.appendChild(warning);
        var info = dom.createElement("p");
        dom.setAttribute(info, "style", 'font-size: 12px;');
        info.innerHTML = 'Please visit <a href="http://www.dcwg.org/fix/" target="blank">http://www.dcwg.org/fix/.</a> for help fixing your DNS. <strong>You may lose access to the Internet after July 9, 2012 if you don\'t fix this.</strong><br/> For additional information regarding the DNS changer malware, please visit the <a href="http://www.fbi.gov/news/stories/2011/november/malware_110911" target="blank">FBI\'s website</a>.<br/> <span class="powered">DNS Changer warning powered by <a href="http://www.cloudflare.com/">CloudFlare</a>.</span></p>';
        message.appendChild(info);
        document.body.appendChild(message);
    }
    var test_site = "http://www.dns-ok.us/test.js"
    var script = dom.createElement("script")
    dom.setAttribute(script, "type", "text/javascript")
    dom.setAttribute(script, "src", test_site)
})

CloudFlare.require(["dnschanger_detector"], function(){dnsChangerPresent()})