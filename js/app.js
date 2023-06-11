const personas = [];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona)
        texto += `<li>${persona.tipodocumento} |
                      ${persona.documento} |
                      ${persona.nombre} |
                      ${persona.apellido} |
                      ${persona.pais} |
                      ${persona.ciudad} |
                      ${persona.direccion} |</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agrgarPersona(){
    const forma = document.forms['forma'];
    const tipodocumento = forma['tipodocumento'];
    const documento = forma['documento'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const pais = forma['pais'];
    const ciudad = forma['ciudad'];
    const direccion = forma['direccion'];
    if(documento.value != '' && nombre.value != '' && apellido.value != ''  && ciudad.value != '' && direccion.value != ''){
        const persona = new Persona(tipodocumento.value,
                                    documento.value, 
                                    nombre.value, 
                                    apellido.value,
                                    pais.value,
                                    ciudad.value,
                                    direccion.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay información que agregar');
    }

}