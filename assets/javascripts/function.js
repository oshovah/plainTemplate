// My Function

// Get Mail-Adress
function mailAdress(mailVar) {
  var email = mailVar;
  $(".mail-" + email).html("<a title='E-mail' href='mailto:" + email + "&commat;" + "glunz.ch" + "'>" + email + "<span class='sonderzeichen'>&commat;</span>" + "glunz.ch" + "</a>");
}

