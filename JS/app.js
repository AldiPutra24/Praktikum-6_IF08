$(document).ready(function () {
    $('#tombol').click(function () { 
        $("h1").hide('slow');;
        
    });
    $('#show').click(function () { 
        $("h1").show('slow');
        
    });

    $('#satu').click(function (e) { 
        $("h1").html(1);
    });
    $('#dua').click(function (e) { 
        $("h1").html(2);
    });
    $('#tiga').click(function (e) { 
        $("h1").html(3);
    });
});