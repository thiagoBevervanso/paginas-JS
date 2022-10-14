

function alerta(){
    alert("Alerta");
}

function consoleAlerta(){
    console.log("Alerta");
}

function soma()
{
    x=eval (document.prova.c1.value)+eval(document.prova.c2.value)+eval(document.prova.c3.value);
    document.prova.c4.value=x;
}

function multiplica()
{
    y=eval(document.prova.c1.value)*eval(document.prova.c2.value)*eval(document.prova.c3.value);
    document.prova.c4.value=y;
}

function campo_obrigatorio(x)
    {
        if(x.value=="")
        {
            alert("O campo "+ x.name + " não pode ficar em branco")
        }
    }
function abre1()
{
    window.open("https://www.google.com");
}
function abre2()
{
    window.open("https://www.google.com", "simples", "width=350", "heigh=400");
}
function abre3()
{
    window.open()
    {window.open("https://www.google.com", "simples", "menubar,scrollbars,width=300,height=200");
}
}