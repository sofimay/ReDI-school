<head>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #666
        }

        /* Style the header */

        header {
            background-color: #666;
            padding: 5px;
            text-align: center;
            font-size: 20px;
            color: white;
        }

        nav {
            float: left;
            width: 30%;
            height: 400px;
            background: #666;
            padding: 20px;
        }

            /* Style the list inside the menu */
            nav ul {
                list-style-type: none;
                padding: 0;
                color: #F2E5A2
            }

        article {
            float: left;
            padding: 20px;
            width: 70%;
            background-color: #666;
            height: 400px;
        }

        section:after {
            width: 100%;
            background-color: #666;
            height: 400px;
            text-align: center;
        }

        footer {
            background-color: #777;
            padding: 10px;
            text-align: center;
            color: white;
        }

        /* Responsive layout */
        @media (max-width: 1200px) {
            nav, article {
                width: 100%;
                height: auto;
            }
        }
    </style>
</head>
<body>
