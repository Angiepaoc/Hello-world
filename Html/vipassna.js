<!DOCTYPE html>
<html>
<head>
  <title>Multiplication Table</title>
</head>
<body style="margin-left: 30%">
 <h1 style="margin-left: 90px"> Multiplication Table  </h1>
    <p>How many rows for your multiplication table?</p>
 <input type="number" id="txtrows" >
    <p>How many columns for your multiplication table?</p>
 <input type="number" id="txtcols" >
    <br/>
 <input type="button" id="ok" value="accept" style="margin-top: 20px">
    <br/>
 <p id="table"></p>
  <script type="text/javascript">
    var button = document.getElementById("ok");
    var txtrowsn = document.getElementById("txtrows");
    var txtcolsn = document.getElementById("txtcols");
    var tablen = document.getElementById("table");
    button.addEventListener("click",generatetable);
    function generatetable(){
         var rows = parseInt(txtrowsn.value);
         var cols = parseInt(txtcolsn.value);
    if(rows == "" || rows == null)
   		 rows = 10;
    if(cols== "" || cols== null)
   		 cols = 10;
    createTable(rows, cols);
    }
      function createTable(rows, cols)
    {
      var j=1;
      var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
      for(i=1;i<=rows;i++)
      {
    	output = output + "<tr>";
        while(j<=cols)
        {
  		  output = output + "<td>" + i*j + "</td>";
   		  j = j+1;
   		}
   		 output = output + "</tr>";
   		 j = 1;
    }
    output = output + "</table>";
    table.innerHTML = output;
    }
  </script>
</body>
</html>
