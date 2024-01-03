function clear_console() {
  kill_drop();
  $("#MainTerm").empty();
  attach_bash();
}

function clear_cmd_history() {
  kill_drop();
  commandHistory = [];
  term_echo_okay("Terminal history cleared!");
}

function attach_bash() {
  let bash_str = `
  <section id="beg"></section>

  <div class="term_current_line" id="current_line">
      <span class="term_bash">root@empasquer~# </span>
      <div class="term_input_parent">
      
      <div class="term_input_box" id="core_input" contenteditable="true" spellcheck="false"> 
      <span id="caret" editable="false"></span>
      </div>
      
      </div>
    </div>
  `;

  $("#MainTerm").append(bash_str);

  rebind_bash();
}

function rebind_bash() {
  $(document).ready(function () {
    var $coreInput = $("#core_input");

    $coreInput.on("keyup", function () {
      updateCaretPosition();
    });
  });

  $(function () {
    $("#core_input").on("keydown", function (event) {
      if (event.key === "PageUp" || event.key === "PageDown") {
        // Prevent the default action
        event.preventDefault();
      }

      if (event.key === "Enter") {
        submit_cmd();
        return true;
      }

      if (event.key === "ArrowUp") {
        //$('#core_input').text(getPreviousCommand());

        $("#core_input").html(getPreviousCommand() + '<vv></vv> <span id="caret" editable="false"></span>');
        return false;
      } else if (event.key === "ArrowDown") {
        //$('#core_input').text(getNextCommand());
        $("#core_input").html(getNextCommand() + '<vv></vv> <span id="caret" editable="false"></span>');
        return false;
      }

      updateCaretPosition();
      return true;
    });
  });
}

function addToHistory(command) {
  commandHistory.unshift(command);
  historyIndex = -1;
}

function getPreviousCommand() {
  historyIndex++;
  if (historyIndex < commandHistory.length) {
    return commandHistory[historyIndex];
  } else {
    historyIndex = commandHistory.length - 1;
    return "";
  }
}

function getNextCommand() {
  historyIndex--;
  if (historyIndex >= 0) {
    return commandHistory[historyIndex];
  } else {
    historyIndex = -1;
    return "";
  }
}

function updateCaretPosition() {
  if ($("#caret").length > 0) {
    var contentEditableDiv = $("#core_input");
    var caretPosition = getCaretPosition(contentEditableDiv[0]);

    var caret_fin = caretPosition * 8;
    term_w = $("#MainTerm").width();

    $("#caret").css("left", caretPosition * bias + "px");

    //var $element = $("#caret");

    // Use jQuery's animate method to smoothly change the left property
    //$element.animate({
    //      left:  caretPosition * 8 + "px"
    //  }, 30); // 1000 is the duration in milliseconds

    if (caret_fin + 116 > term_w) {
      $("#caret").remove();
      submit_cmd();
    }

    var multiline = $("#core_input").height() / 16 - 2;

    if (multiline == 2) {
    }
  } else {
    //$('#core_input').empty()
    //$("#core_input").append('<span id="caret" editable="false"></span>');
  }

  //$("#")
}

// Call the updateCaretPosition function every 100ms
//setInterval(updateCaretPosition, 100);

function submit_cmd() {
  //console.log('Enter key pressed');

  let qe = $("#core_input").text();

  $("#beg").append(
    `
        <div class="term_parent_line fw">
        <span class="term_bash">${bash_string} </span>
        <tc>${qe}</tc>    
      </div>
        `
  );

  addToHistory(qe);
  $("#core_input").html('<vv></vv> <span id="caret" editable="false"></span>');
  //setTimeout(function() {$('#core_input').html('<vv></vv> <span id="caret" editable="false"></span>'); }, 10);

  PARSE_CMD(qe);

  //$("#current_line").remove()

  return false; // Prevent the Enter key from being passed to the element
}

function getCaretPosition(element) {
  var caretPos = 0;
  var doc = element.ownerDocument || element.document;
  var win = doc.defaultView || doc.parentWindow;
  var sel;

  if (typeof win.getSelection != "undefined") {
    sel = win.getSelection();
    if (sel.rangeCount > 0) {
      var range = win.getSelection().getRangeAt(0);
      var preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      caretPos = preCaretRange.toString().length;
    }
  } else if ((sel = doc.selection) && sel.type != "Control") {
    var textRange = sel.createRange();
    var preCaretTextRange = doc.body.createTextRange();
    preCaretTextRange.moveToElementText(element);
    preCaretTextRange.setEndPoint("EndToEnd", textRange);
    caretPos = preCaretTextRange.text.length;
  }

  return caretPos;
}

async function term_echo(term_str) {
  $("#beg").append(
    `
    <div class="term_parent_line fw">
    <span class="term_bash" style="color: rgb(255, 0, 140)">》</span>
    ${term_str}   
  </div>
    `
  );
}

async function term_echo_okay(term_str) {
  $("#beg").append(
    `
    <div class="term_parent_line fw">    
    <g>${term_str}</g>
  </div>
    `
  );
}

function hitchEgg() {
  $("#beg").append(
    `
    <div class="term_parent_line fw">    
    <p>Congrats! You know the meaning of life, the universe, and everything.</p>
  </div>
    `
  );
}
function motherlodeEgg() {
  balance += 50000;
  $("#beg").append(
    `
    <div class="term_parent_line fw">    
    <p>Accessing bank account</p>
     <div class="progress">
        <div class="loader"></div>
      </div>
  </div>
    `
  );

  setTimeout(() => {
    $("#beg").append(
      `
    <div class="term_parent_line fw">
      <g>ACCESS GRANTED</g>
    </div>`
    );
  }, 4200);

  setTimeout(() => {
    $("#beg").append(
      `
      <div class="term_parent_line fw">    
      <p>Adding 50 000,- to account now.</p>
           <div class="progress">
          <div class="loader-fast"></div>
        </div>
    </div>
      `
    );
  }, 4300);

  setTimeout(() => {
    $("#beg").append(
      `
    <div class="term_parent_line fw">
      <p>ACCOUNT BALANCE: <g> ${balance},-</g></p>
    </div>`
    );
  }, 5600);
}

async function HELP_PRINT() {
  term_echo("<g>Here you will find a list of commands</g>");
  term_echo("<tc>'cls' or 'clear' to empty the console</tc>");
  term_echo("<tc>'clh' will clear console history</tc>");
  term_echo("<tc>Additional commands:</tc>");
  term_echo("<tc>  ssh root@server.com -p [port]  Connect to a remote server using SSH</tc>");
  kill_drop();
}

attach_bash();
