var i = 0;

var myVar = setInterval(myTimer, 3000);

function myTimer() {

    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < els.length) {

        unsubBtn =  els[i].querySelector("[aria-label^='Unsubscribe from']")
        unsubBtn.click();

        setTimeout(function () {

            var confirmBtn = unsubBtn.querySelector("button");
            confirmBtn.click();

        }, 2000);

        setTimeout(function () {

            els[i].parentNode.removeChild(els[i]);

        }, 2000);

    }

    i++;

    console.log(i + " Channels Unsubscribed\n");

    console.log(els.length + " remaining");

}
