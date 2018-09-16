<?php
	$cookie_name = 'counter';
	$file = 'count.txt';
	$count = '';

	if (!isset($_GET['check'])) {
		if (!isset($_COOKIE[$cookie_name])) {
		    $count = strval(file_get_contents($file));
		    file_put_contents($file, $count + 1);
		    setcookie($cookie_name, "checked", time() + 43200);
		}
	}	

	$fh = fopen($file, 'r');
	$countResult = (int)fgets($fh);
	fclose($fh);

	
	// ----------------------------------------------------------------------------------------
	$v4mapped_prefix_hex = '00000000000000000000ffff';
	$v4mapped_prefix_bin = pack("H*", $v4mapped_prefix_hex);

	// Parse
	$addr = $_SERVER['REMOTE_ADDR'];
	$addr_bin = inet_pton($addr);
	if( $addr_bin === FALSE ) {
	  // Unparsable? How did they connect?!?
	  die('Invalid IP address');
	}

	// Check prefix
	if( substr($addr_bin, 0, strlen($v4mapped_prefix_bin)) == $v4mapped_prefix_bin) {
	  // Strip prefix
	  $addr_bin = substr($addr_bin, strlen($v4mapped_prefix_bin));
	}

	// Convert back to printable address in canonical form
	$addr = inet_ntop($addr_bin);
	// ----------------------------------------------------------------------------------------

	$useragent = $_SERVER['HTTP_USER_AGENT'];
	$language = explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']);

	echo $addr . '|' . $useragent . '|' . $countResult . '|' . $language[0];
?>