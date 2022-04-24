<?php

        $conn = mysqli_connect("localhost", "root", "", "depoteaportal");
          
        if($conn === false){
            die("ERROR: Could not connect. " 
                . mysqli_connect_error());
        }
          
        $Clientname = $_POST['client-name'];
        $Clientcontact = $_POST['client-contact'];
        $Clientemail = $_POST['client-email'];
        $Clientaddress = $_POST['client-address'];
            
        $sql = "INSERT INTO client_info (client_name, client_contact, client_email, client_address)
             VALUES ('$Clientname', '$Clientcontact', '$Clientemail', '$Clientaddress')";
          
        if(mysqli_query($conn, $sql)){
            echo "<h3>Order Pruchase went through." ; 
  
            echo nl2br("\n$Clientname\n $Clientcontact\n "
                . "$Clientemail\n $Clientaddress");
        } else{
            echo "ERROR: Hush! Sorry $sql. " 
                . mysqli_error($conn);
        }
          
        mysqli_close($conn);
?>

