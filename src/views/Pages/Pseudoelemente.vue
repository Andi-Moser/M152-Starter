<template>
    <ul>
        <li><a href="https://google.com" target="_blank">Google</a></li>
        <li><a href="/rwd">Responsive Web Design</a></li>
        <li><a href="/document.pdf">Download PDF</a></li>
    </ul>

    <ol>
        <li>
            <a href="https://google.com" target="_blank">
                <span class="link_extern"></span>
                Google
            </a>
        </li>
        <li><a href="/rwd">Responsive Web Design</a></li>
        <li><a href="/document.pdf">Download PDF</a></li>
    </ol>
</template>

<style lang="scss">
ul, ol {
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
    text-align: center;
}

ul li a {
    text-decoration: none;
    color: rgb(255, 110, 53);

    &[target=_blank]::after {
        content: "↗";
        padding-left: 5px;
        font-size: 0.8em;
    }
    &[href*='.pdf']::after {
        content: "↓";
        padding-left: 5px;
        font-size: 0.8em;
    }
}

ol li a {
    display: inline-block;
    margin: 10px 0;
    padding: 10px 10px 10px 25px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: grey;
    color: white;
    text-decoration: 0;
    position: relative;

    &::before {
        content: "";
        display: block;
        width: 15px;
        height: 15px;
        background-color: red;
        position: absolute;
        left: 6px;
        top: 11px;
        border-radius: 50%;
    }

    &[target=_blank]::before {
        background-color: green;
    }
    &[href*='.pdf']::before {
        background-color: yellow;
    }
}
</style>