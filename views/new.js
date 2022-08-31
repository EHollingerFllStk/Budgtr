<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Create a new budget</title>
</head>
<nav>
    <a href="/budget/new">Create a New Budget Page</a>
</nav>

<body>
    <h1>New Budget Page</h1>
    <form action="/budget" method="POST">
        Date: <input type="text" name="date"><br/>
        Name: <input type="text" name="name"><br />
        From: <input type="text" name="from"><br />
        Price: <input type="number" name="Price"><br />
        Tags: <input type="text" name="tags"><br />
        from::
        Is Ready To Eat: <input type="checkbox" name="readyToEat"><br />
        <input type="submit" value="Create Fruit">
    </form>
</body>

</html>
