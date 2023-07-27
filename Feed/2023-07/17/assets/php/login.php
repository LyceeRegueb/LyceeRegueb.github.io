<?php
// Start session
session_start();

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the username and password from the form
    $username = $_POST["login_user"];
    $password = $_POST["login_pass"];

    // Read the login.txt file
    $accounts = file('login.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    // Loop through the accounts and check if the submitted username and password match
    $valid_credentials = false;
    foreach ($accounts as $account) {
        list($user, $pass) = explode(':', $account);
        if ($user === $username && $pass === $password) {
            $valid_credentials = true;
            break;
        }
    }

    // If the credentials are valid, set a session variable and redirect to the home page
    if ($valid_credentials) {
        $_SESSION["username"] = $username;
        header("Location: home.php");
        exit;
    } else {
        // If the credentials are not valid, show an error message
        $error_message = "Account not found";
    }
}
?>
<?php if (isset($error_message)) { ?>
    <div class="alert alert-danger"><?php echo $error_message; ?></div>
<?php } ?>