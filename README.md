# Descrição
Pequeno projeto que faz requisições para a api do GitHub, 
onde o usuário informa o login de um usuário qualquer da
plataforma e a requisição é feita, recuperando as seguintes 
informações do usuário buscado:
- name: Nome;
- html_url: O link que leva ao github;
- avatar_url: A imagem de perfil;
- bio: Descrição.

Com essas informações, um pequeno card é montado e mostrado.

## Outras informações
Foram utilizadas(os), para este projeto:
- Flexbox para o layout;
- XMLHttpRequest para a requisição;
- URL base para a requisição: "https://api.github.com/users/${NOME_DO_USUÁRIO}"
- CSS;
- JavaScript puro;
- HTML;

Fiz este projeto com o intuito de testar parte do conhecimento
que adquiri de Objetos JSON da MDN Mozilla.
