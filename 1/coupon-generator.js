var _$ = function(){
  /* starting from this section is the data you can edit*/
  var editableTitle = "save 5% with code" /*coupon title*/
  var editableOffer = "Shop using Target's discount code and get 5% off your purchase at checkout" /*the offer*/
  var editableCouponLink = "https://jasper.ai/free-trial?fpr=bonus100" /*redirect link*/
  var editableLinkAppearance = "jasper.ai" /*how the link appears in the pop up*/
  var editableLinkName = "jasper" /*the name of the website for redirect*/
  var editableLogo = "https://developerflow.github.io/host/Jasper_Logo.jpg"   /*set the path to the image that you want to be in the box*/
  var editableImage = editableLogo
  var editableCoupon = "FTAP"  /*the coupon code*/
        /*this is where the section ends, from this point you cannot edit the data*/
        
  genInter()
        function genInter(){
            var container = document.getElementById("dev-flow-coupon-script")
            var interface = document.createElement("div")
            interface.className = "dev-flow-offer-card"
    
            var interfaceWrapper = document.createElement("div")
            interfaceWrapper.className = "dev-flow-card-wrapper"
    
            var discountBox = document.createElement("img")
            discountBox.className = "discount-box"
            discountBox.src = editableImage
    
            var offerDetails = document.createElement("div")
            offerDetails.className = "offer-details"
    
            var offerTitle = document.createElement("h3")
            offerTitle.innerHTML = editableTitle
    
            var offer = document.createElement("p")
            offer.innerHTML = editableOffer
    
            var coupon = document.createElement("div")
            coupon.className = "coupon";  coupon.innerHTML = editableCoupon
    
            var couponLink = document.createElement("a")
            couponLink.innerHTML = "Show Coupon"

            interface.appendChild(interfaceWrapper)
    
            interfaceWrapper.appendChild(discountBox); interfaceWrapper.appendChild(offerDetails)
            interfaceWrapper.appendChild(coupon)
    
            offerDetails.appendChild(offerTitle); offerDetails.appendChild(offer);
    
            coupon.appendChild(couponLink);
    
            container.parentElement.insertBefore(interface,container)

            var couponSmall = coupon.cloneNode(true);
            couponSmall.className += " ss"
            interface.appendChild(couponSmall)
    
            var tab; var bs = 700
            interface.onclick = function(){
                if(!tab){
                    tab = document.createElement("div")
                    tab.className = "dev-flow-window"
                    var curtain = tab.cloneNode(true); curtain.className += " dev-flow-curtain"
            
                    var tabContent = document.createElement("div")
                    tabContent.className = "dev-flow-tab"
    
                    var close = document.createElement("div"); close.className = "dev-flow-close"
                    var closeBtn = document.createElement("a"); 
                    closeBtn.className = "dev-flow-close-btn"; closeBtn.innerHTML = "x"
    
                    var title = document.createElement("h2")
                    title.innerHTML = editableTitle
    
                    var destination = document.createElement("div")
                    destination.innerHTML = "Copy and paste this code at "
                    var link = document.createElement("a"); link.href = editableCouponLink
                    link.innerHTML = editableLinkAppearance
    
                    var coupon = document.createElement("div");
                    coupon.className = "dev-flow-copy-coupon"
                    var couponText = document.createElement("span")
                    couponText.innerHTML = editableCoupon
                    var copyCoupon = document.createElement("button")
                    copyCoupon.className = "dev-flow-copy-coupon-btn"
                    copyCoupon.innerHTML = "Copy"
    
                    var continueLink = document.createElement("button")
                    continueLink.innerHTML = "Continue to " + editableLinkName
                    continueLink.className = "dev-flow-continue-link"
                    
                    tab.appendChild(curtain)
                    tab.appendChild(tabContent)
    
                    tabContent.appendChild(close)
                    if(editableLogo && editableLogo.length > 0){
                        var logo = document.createElement("img")
                        logo.src = editableLogo
                        logo.className = "dev-flow-logo"
                        tabContent.appendChild(logo)
                    }
                    tabContent.appendChild(title)
                    tabContent.appendChild(destination)
                    tabContent.appendChild(coupon)
                    tabContent.appendChild(continueLink)
    
                    destination.appendChild(link)
    
                    coupon.appendChild(couponText); coupon.appendChild(copyCoupon)
    
                    close.appendChild(closeBtn)
    
                    curtain.onclick = function(){remove(tab)}
                    closeBtn.onclick = curtain.onclick
                    copyCoupon.onclick = function(){copy(
                        editableCoupon,
                        function(){
                            couponText.style.backgroundColor = "#e6faf6"
                            copyCoupon.style.backgroundColor = "#20b18c"
                            copyCoupon.innerHTML = "Copied"
                        }
                    )}
                    continueLink.onclick = function(){window.open(editableCouponLink)}
                    addEvent(window,"resize",adjust)
                }
                function adjust(){
                    if(window.innerWidth < bs){
                        tab.id = "dev-flow-ss"
                    }
                    else{
                        tab.id = ""
                    }
                }
                document.body.appendChild(tab)
                adjust()
                window.open(editableCouponLink)
            }
        }
        function remove(element){
            /*removes an element from its container*/
            try{element.remove()}
            catch(err){
                try{element.parentElement.removeChild(element)}
                catch(err){}
            }
        }
        function addEvent(element,event,cb){
            try{element.addEventListener(event,cb);}
            catch(err){
                try{element.attachEvent("on"+event.toString(),cb)}
                catch(err){element["on"+event.toString()] = cb;}
            }   
        }
        function copy(text,cb){
            try{
                navigator.clipboard.writeText(text).then(cb)
            }
            catch(err){
                document.execCommand("copy",false,text)
                console.log(document.execCommand)
            }
        }
    }()