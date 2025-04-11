function enviarFormulario() {
    console.log("ENTROU NA FUNÇÃO");
    const nome = document.getElementById("nome").value;
    const empresa = document.getElementById("empresa").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("empresa", empresa);
    formData.append("email", email);
    formData.append("telefone", telefone);

    fetch("enviar.php", {
        method: "POST",
        body: formData
    })
        .then((response) => response.text())
        .then((result) => {
            if (result === "OK") {
                document.getElementById("formulario").reset();
                const mensagem = encodeURIComponent(
                    `Olá! Meu nome é ${nome} e quero saber mais sobre os serviços de marketing digital da Leads Hunters.`
                );
                window.open(`https://wa.me/5531988210186?text=${mensagem}`, "_blank");
            } else {
                alert("Erro ao enviar formulário. Tente novamente.");
            }
        })
        .catch((error) => {
            console.error("Erro:", error);
            alert("Erro ao enviar formulário.");
        });

    console.log("EXECUTOU COM SUCESSO A FUNÇÃO");
    return false; // impede o envio normal do form
}

function scrollParaFormulario() {
    const formulario = document.getElementById("formulario");
    if (formulario) {
        formulario.scrollIntoView({ behavior: "smooth" });
    }
}
