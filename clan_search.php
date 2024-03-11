<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <?php
    $url = 'https://biggamesapi.io/api/clans?page=1&pageSize=100&sort=Points&sortOrder=desc';
    $ch = curl_init($url);
    $headr = array();
    $headr[] = 'Accept: application/json';
    // Set additional headers if needed
    // ...

    curl_setopt($ch, CURLOPT_HTTPHEADER, $headr);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);
    // Process and display clan information
    ?>
</head>
<body>
    <h1>Top Clans by Points</h1>
    <ul>
        <?php
        foreach ($data['items'] as $clan) {
            echo '<li>' . $clan['name'] . ' - Points: ' . $clan['points'] . '</li>';
        }
        ?>
    </ul>
</body>
</html>
