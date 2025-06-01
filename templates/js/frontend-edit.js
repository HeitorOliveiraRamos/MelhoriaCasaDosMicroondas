//Quando o usuário clica em um texto, esse texto vira um campo de input.
//Ao clicar fora do input ou pressionar Enter, o valor é salvo e o campo volta a ser texto.
//Pressionar Esc cancela a edição.

document.querySelectorAll(".editable").forEach(element => {
  element.addEventListener("click", () => {
    const input = document.createElement("input");
    input.value = element.textContent;
    input.className = "editable-input";
    element.replaceWith(input);
    input.focus();

    const save = () => {
      const span = document.createElement("span");
      span.className = "editable";
      span.textContent = input.value;
      input.replaceWith(span);
      // Reanexar o listener para que o novo span também seja editável
      span.addEventListener("click", element.click);
    };

    input.addEventListener("blur", save);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") save();
      if (e.key === "Escape") input.replaceWith(element);
    });
  });
});
