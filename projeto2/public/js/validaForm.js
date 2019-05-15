function validar(){
    let codigo = $('#codigo').val();
    let texto = $('#nome').val();
    let cursos = $('#cursos').val();

    if(codigo == '' || codigo <= 0){
        $('#codigo').addClass('erro');
        return;
    }
    
    
    $('#codigo').removeClass('erro');
    

    if(texto == '' || texto.length > 10)
    {
        $('#nome').addClass('erro');
        return;
    }
    
    $('#nome').removeClass('erro');

    if( cursos == '')
    {
        $('#cursos').addClass('erro');
        return;
    }

    $('#cursos').removeClass('erro');
    limpa();
    addTable(codigo , texto , cursos);
}

function limpa ()
{
    $('#nome').val('')
    $('#cursos').val('')
    $('#email').val('')
    $('#codigo').val('')
    $('#mensagem').val('')
  
}

function addTable(c , n ,cu){
    $('tbody').append(`<tr id='${c}#${n}#${cu}'>
    <td>${c}</td>    
    <td>${n}</td>
    <td onclick ="removeTabela(this)">X</td>
    <td onclick ="alt(this)">A</td>

    </tr>`);
}

function removeTabela(td){
    $(td.closest('tr')).remove();
}

function alt(td){
    let data = td.closest('tr').id.split('#');

    
   
   $('#codigo').val(data[0])
   $('#nome').val(data[1]) 
   $('#cursos').val(data[2])
}