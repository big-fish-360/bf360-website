<?php
$name= $_POST['fname'];
$emailHelp= $_POST['email'];
$comments=$_POST['msg'];

if(isset($name) && isset($emailHelp))
{
	global $to_email,$vpb_message_body,$headers;
	$to_email="nick.preziosi@bigfish360.com";
	$vpb_message_body = nl2br("Dear Admin,\n
	The user whose detail is shown below has sent this message from ".$_SERVER['HTTP_HOST']." dated ".date('d-m-Y').".\n

	name: ".$name."\n
	Email Address: ".$emailHelp."\n
	Message: ".$comments."\n
	User Ip:".getHostByName(getHostName())."\n
	Thank You!\n\n");

	//Set up the email headers
    $headers    = "From: $name <$emailHelp>\r\n";
    $headers   .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers   .= "Message-ID: <".time().rand(1,1000)."@".$_SERVER['SERVER_NAME'].">". "\r\n";

	 if(@mail($to_email, $vpb_message_body, $headers))
		{
			$status='Success';
			//Displays the success message when email message is sent
			$output="Congrats ".$name.", your email message has been sent successfully! We will get back to you as soon as possible. Thanks.";
		}
		else
		{
			$status='error';
			 //Displays an error message when email sending fails
			$output="Sorry, your email could not be sent at the moment. Please try again or contact this website admin to report this error message if the problem persist. Thanks.";
		}
}
else
{
	echo $name;
	$status='error';
	$output="please fill require fields";
}

echo json_encode(array('status'=> $status, 'msg'=>$output));
?>