function calcularEntrada()
{
    var n1=parseInt(document.getElementById('cantidadTicket').value);
    var n2=document.getElementById('Categoria').value;
    const valorTkt= 200;

    switch (n2) {
        case '1':
            n2= 0.8;
            break;
        case '2':
            n2= 0.5;
            break;
        case '3':
            n2= 0.15;
            break;
        default:
            break;
    }
    var resultado = (n1*valorTkt)*n2;

    document.getElementById('totalPrecio').value = resultado;
}