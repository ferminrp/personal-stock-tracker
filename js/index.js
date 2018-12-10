// ID of the Google Spreadsheet
 var spreadsheetID = "1kJQ3SRnx2Xv7nmKQi_KMfIBXZUxWFiUataqF_UKuKgQ";

// Make sure it is public or set to Anyone with link can view
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

console.log(url);

 //connecting to spreadsheet and then parsing the data
  $.getJSON(url, function(data) {
    var obj = data.feed.entry;
    $(obj).each(function(){
      // breaking out columns to more easily interpret
      // Generates a search url to see finance news on google related to this symbol
      var searchUrl = 'https://www.google.com/search?q=' + this.gsx$symbol.$t + '&source=lnms&tbm=nws&sa=X&ved=0ahUKEwiyksjBi47fAhUDgJAKHaqDDUUQ_AUIDygC&biw=1280&bih=579&dpr=1.5';
      var entry = '<tr id="selectable">'
      entry+= '<td>'+this.gsx$strategy.$t+'</td>';
      entry+= '<td>'+this.gsx$symbol.$t+'</td>';
      entry+='<td>'+this.gsx$price.$t+'</td>';
      if (this.gsx$changepct.$t[0] == "-") {
        entry+='<td><a target="_blank" style="text-decoration: none;color: #DC3545;" href="'+ searchUrl +'">'+this.gsx$changepct.$t+'</a></td>';
      } else {
        entry+='<td><a target="_blank" style="text-decoration: none;color: #28A745;" href="'+ searchUrl +'">'+this.gsx$changepct.$t+'</a></td>';
      }
      entry+='</tr>';
      $('#results-table tr:last').after(entry);
   });
  });


  // This allows you to click a row in the table to highlight it
   $(document).on("click", 'tr', function(){
      $(this).toggleClass( "selected" );
  });


// ID of the Google Spreadsheet
var indexspreadsheetID = "1HKbtvWkTQojrbi__-gdT6o21QvqSBPSpsXmftknf-h8";

// Make sure it is public or set to Anyone with link can view
var indexesurl = "https://spreadsheets.google.com/feeds/list/" + indexspreadsheetID + "/od6/public/values?alt=json";

console.log(indexesurl);

//connecting to spreadsheet and then parsing the data
 $.getJSON(indexesurl, function(data) {
   var obj = data.feed.entry;
   $(obj).each(function(){
     var index = this.gsx$shorter.$t
     var change = this.gsx$changepct.$t
     if (index == "DJI") {
       $("#dji").text(change)
       if (change[0] == "-") {
         $("#dji").css("color", "#DC3545");
       }
       else if (change[0] != "-") {
         $("#dji").css("color", "#28A745");
       }
     }
     else if (index == "S&P500") {
       $("#sp500").text(change)
       if (change[0] == "-") {
         $("#sp500").css("color", "#DC3545");
       }
       else if (change[0] != "-") {
         $("#sp500").css("color", "#28A745");
       }
     }
     else if (index == "NASDAQ") {
       $("#NASDAQ").text(change)
       if (change[0] == "-") {
         $("#NASDAQ").css("color", "#DC3545");
       }
       else if (change[0] != "-") {
         $("#NASDAQ").css("color", "#28A745");
       }
     }
     else if (index == "IMV"){
        $("#imv").text(change)
        if (change[0] == "-") {
          $("#imv").css("color", "#DC3545");
        }
        else if (change[0] != "-") {
          $("#imv").css("color", "#28A745");
        }
     }
   });
 });
