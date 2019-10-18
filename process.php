        <!--         for send e-mail_php -->
        <?php
            //add the recipient's address here
        $myemail = 'b99601016@gmail.com';
        echo "here";

        //grab named inputs from html then post to #thanks
        if (isset($_POST['email'])) {
        //$name = strip_tags($_POST['name']);
        $email = strip_tags($_POST['email']);
//        echo $_POST["email"];
//        echo "<stong>Email:</strong> ".$email."<br>";
        //$message = strip_tags($_POST['message']);

//        echo "<span class=\"alert alert-success\" >Your message has been received, and we will get                 back to you as soon as possible. Here is what you submitted:</span><br><br>";
//        echo "<stong>Name:</strong> ".$name."<br>";   
//        echo "<stong>Email:</strong> ".$email."<br>"; 
//        echo "<stong>Message:</strong> ".$message."<br>";

        //generate email and send!
        $to = $myemail;
        $email_subject = "Foodle testflight download request";
        $email_body = "The email as below wants to donwnload foodle in testflight. ".
        "Email: $email";
        $headers = "From: $myemail\n";
        $headers .= "Reply-To: $email";
//        $headers = "From: foodleweb\n";
//        $headers .= "Reply-To: $myemail";
        mail($to,$email_subject,$email_body,$headers);
        }
        echo "end";
        ?>