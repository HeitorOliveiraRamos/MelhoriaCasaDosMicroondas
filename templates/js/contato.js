function ficha() {
    if (document.form1.nome.value === "") {
        alert('Preencha seu nome');
        document.form1.nome.focus();
        return false;
    }

    if (document.form1.email.value === "") {
        alert('Falta o email');
        document.form1.email.focus();
        return false;
    }

    if (document.form1.assunto.value === "") {
        alert('Esqueceu assunto!');
        document.form1.assunto.focus();
        return false;
    }

    if (document.form1.telefone.value === "") {
        alert('Esqueceu o telefone!');
        document.form1.telefone.focus();
        return false;
    }

    if (document.form1.mensagem.value === "") {
        alert('Esqueceu mensagem!');
        document.form1.mensagem.focus();
        return false;
    }
}
