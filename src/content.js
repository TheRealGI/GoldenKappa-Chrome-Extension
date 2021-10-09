// defining the srcset attribute --> golden kappa
const goldenKappaElementSrcSet = "https://static-cdn.jtvnw.net/emoticons/v2/80393/default/dark/1.0 1x," +
                                 "https://static-cdn.jtvnw.net/emoticons/v2/80393/default/dark/2.0 2x,"+
                                 "https://static-cdn.jtvnw.net/emoticons/v2/80393/default/dark/3.0 4x";

// defining the src attribute --> golden kappa
const goldenKappaElementSrc = "https://static-cdn.jtvnw.net/emoticons/v2/80393/default/dark/1.0";

// Creating observer which reacts to DOM changes --> only to when Kappa is written in Chat
// callback --> Manipulate the DOM so the Kappa transforms to golden Kappa
var observer = new WebKitMutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if(mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach(function (addedMutation) {
        let kappaElement = addedMutation.querySelectorAll("img[alt='Kappa']");
        if(kappaElement.length > 0) {
          kappaElement.forEach( function(element) {
            element.src = goldenKappaElementSrc;
            element.srcset = goldenKappaElementSrcSet;
          })
        }
      });
    }
  })
 });

 // Instantiate the Observer when the relevant DOM is generated
addObserverIfDesiredNodeAvailable();


function addObserverIfDesiredNodeAvailable() {
  var targetNode = document.querySelector("div.Layout-sc-nxg1ff-0.lgtHpz.chat-scrollable-area__message-container");
  if(!targetNode) {
      //The node we need does not exist yet.
      //Wait 500ms and try again
      window.setTimeout(addObserverIfDesiredNodeAvailable,500);
      return;
  }

  observer.observe(targetNode, {
    attributes: false,
    childList: true,
    characterData: false,
    subtree:true
  });
}

