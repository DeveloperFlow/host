var _$ = function(){ 
   /* starting from this section is the data you can edit*/ 
   var editableTitle = "save 5% with code" /*coupon title*/ 
   var editableOffer = "Shop using Target's discount code and get 5% off your purchase at checkout" /*the offer*/ 
   var editableCouponLink = "https://jasper.ai/free-trial?fpr=bonus100" /*redirect link*/
   var editableLinkName = "jasper" /*the name of the website for redirect*/ 
   var editableLogo = "https://developerflow.github.io/host/1/Jasper_Logo.jpg"   /*set the path to the image that you want to be in the box*/ 
   var editableImage = editableLogo 
   var editableCoupon = "FTAP"  /*the coupon code*/
   var editableCouponBtn = "Show coupon" /*the button that the user clicks to open the tab*/
   var editableCopyCoupon = "Copy" /*the button that was formally "copy code"*/
   var editableInstruction = "Copy and paste this code at " /*the instruction at the open tab, previously "copy and paste this link at"*/
   
    /*this is where the section ends, from this point you cannot edit the data*/ 
  var storagekey = "dev_flow_storage"
  var interface
  genInter(); checkTab()
         function genInter(){ 
             var container = document.getElementById("dev-flow-coupon-script") 
             interface = document.createElement("div") 
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
             couponLink.innerHTML = editableCouponBtn
  
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
             interface.onclick = function(redir){ 
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
                     destination.innerHTML = editableInstruction 
                    
                     var coupon = document.createElement("div"); 
                     coupon.className = "dev-flow-copy-coupon" 
                     var couponText = document.createElement("span") 
                     couponText.innerHTML = editableCoupon 
                     var copyCoupon = document.createElement("a") 
                     copyCoupon.className = "dev-flow-copy-coupon-btn" 
                     copyCoupon.innerHTML = editableCopyCoupon
  
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
                     coupon.appendChild(couponText); coupon.appendChild(copyCoupon) 
  
                     close.appendChild(closeBtn) 
  
                     curtain.onclick = function(){remove(tab)} 
                     closeBtn.onclick = curtain.onclick 
                      addEvent(window,"resize",adjust)
                     copyCoupon.onclick = function(){copy(  
                          editableCoupon,  
                          function(){  
                            location.href = editableCouponLink
                          }
                      )} 
                 } 
                 function adjust(){ 
                     if(window.innerWidth < bs){ 
                         tab.id = "dev-flow-ss"
                         console.log(window.innerWidth)
                     } 
                     else{
                        console.log(window.innerWidth,"big screen")
                        tab.id = "" 
                     } 
                 } 
                 document.body.appendChild(tab)
                 addEvent(window,"load",adjust)
                 adjust()
                 if(redir !== false){
                   try{localStorage.setItem(storagekey,"open tab")
                    open(location.href)
                    location.href = editableCouponLink
                   }
                   catch(err){open(editableCouponLink)}
                 }
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
         function copy(text,cb,errCb){
           if(!errCb){errCb = cb}
             try{ 
                 navigator.clipboard.writeText(text).then(cb) 
             } 
             catch(err){errCb()} 
         }
         function checkTab(){
           var isOpen
           try{
             isOpen = localStorage.getItem(storagekey)
             localStorage.removeItem(storagekey)
           }
           catch(err){}
           if(isOpen){interface.onclick(false)}
         }
     }()