<body onload="setTimeout('delayer()', 750)">

<?php
  
include_once('connection.php');
   
function test_input($data) {
      
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
   
if ($_SERVER["REQUEST_METHOD"]== "POST") {
      
    $username = test_input($_POST["username"]);
    $password = test_input($_POST["password"]);
    $stmt = $conn->prepare("SELECT * FROM depotealogin");
    $stmt->execute();
    $users = $stmt->fetchAll();
      
    foreach($users as $user) {
          
        if(($user['username'] == $username) && 
            ($user['password'] == $password)) {
                header("Location: ../adminpage.html");
        }
        else {
            echo "<script language='javascript'>";
            echo "alert('WRONG INFORMATION')";
            echo "</script>";
            echo "<script>";
            echo "function delayer(){
                  window.history.go(-1);
                  }";
            echo "</script>";
        }
    }
}
  
?>