
// This Section imports data from google spreadsheets (being used as a backend)
// Generates new rows inside the table with the imported data

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
     entry+='<td><a target="_blank" style="text-decoration: none;color: #212529;" href="'+ searchUrl +'">'+this.gsx$changepct.$t+'</a></td>';
     entry+='</tr>';
     $('#results-table tr:last').after(entry);
  });
 });

// This allows you to click a row in the table to highlight it
 $(document).on("click", 'tr', function(){
    $(this).toggleClass( "selected" );
});
