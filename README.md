# Fuga do Botão - Interatividade Divertida!

## Descrição
Este projeto cria uma experiência interativa divertida para o usuário, onde múltiplos botões "fujões" aparecem na tela. Quando o usuário passa o mouse sobre qualquer botão, ele se move aleatoriamente pela tela. Após um número pré-determinado de fugas, os botões param de se mover e mostram uma mensagem de despedida engraçada.

## Funcionalidades
- **Botões Fujões**: Vários botões "Não!" aparecem na tela e se movem aleatoriamente sempre que o usuário passa o mouse sobre eles.
- **Limite de Fugidas**: Após um número máximo de fugas, os botões param de se mover e uma mensagem "Ok, parei 😅" é exibida.
- **Interface Amigável**: A interface usa cores suaves e animações para proporcionar uma experiência divertida e visualmente agradável.

## Como Funciona
- **Criação de Botões**: O código cria um número definido de botões que ficam visíveis na tela.
- **Movimentação Aleatória**: Quando o usuário passa o mouse sobre qualquer botão, ele se move aleatoriamente para uma nova posição na tela.
- **Contagem de Fugidas**: O número de fugas é contado e, ao atingir o número máximo de fugas, todos os botões param de se mover e mostram uma mensagem de "Ok, parei 😅".

## Tecnologias Usadas
- **HTML**: Para a estrutura do conteúdo da página.
- **CSS**: Para o estilo e animações da página e botões.
- **JavaScript**: Para a interatividade e lógica de movimentação dos botões e contagem de fugas.

## Como Rodar o Projeto

1. **Clone o Repositório**:
    ```bash
    git clone https://github.com/seu-usuario/fuga-botao.git
    ```
2. **Abra o arquivo `index.html` no seu navegador** para visualizar o funcionamento do projeto.

## Personalização
- **Alterar o número de fugas**: Para modificar o número de botões e fugas, edite a variável `maxFugas` no arquivo JavaScript.
    ```javascript
    const maxFugas = 10;  // Número máximo de fugas
    ```
- **Alterar o estilo dos botões**: Modifique o estilo dos botões no CSS para adaptá-los ao seu design preferido.
- **Cor do fundo e dos botões**: As cores do fundo e dos botões podem ser personalizadas nas propriedades CSS correspondentes.

## Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.
