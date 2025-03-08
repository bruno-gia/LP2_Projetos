# Configuração Inicial

## Configurar nome e e-mail globalmente
git config --global user.name "bruno-gia"
git config --global user.email "b_gia@hotmail.com"

## Verificar configurações
git config --list

# Inicialização e Clonagem

## Inicializar um repositório Git
git init

# Clonar um repositório remoto
git clone <url-do-repositorio>

# Controle de Versão

## Verificar status do repositório
git status

## Adicionar arquivos ao controle de versão
git add <arquivo>
## Adicionar todos os arquivos modificados
git add .

## Criar um commit
git commit -m "Mensagem do commit"

## Exibir histórico de commits
git log

# Trabalho com Branches

## Listar branches
git branch

## Criar uma nova branch
git branch <nome-da-branch>

## Trocar para outra branch
git checkout <nome-da-branch>

## Criar e mudar para uma nova branch
git checkout -b <nome-da-branch>

## Mesclar uma branch na branch atual
git merge <nome-da-branch>

## Remover uma branch
git branch -d <nome-da-branch>

# Repositório Remoto

# Adicionar um repositório remoto
git remote add origin <url-do-repositorio>

# Verificar repositórios remotos
git remote -v

# Enviar alterações para o repositório remoto
git push origin <branch>

# Atualizar repositório local com alterações remotas
git pull origin <branch>

Reset e Reversão

# Resetar um arquivo para a última versão commitada
git checkout -- <arquivo>

# Reverter um commit
git revert <id-do-commit>

# Resetar para um commit específico (perde alterações locais)
git reset --hard <id-do-commit>

# Stash (Guardar Alterações Temporariamente)

## Guardar alterações sem commitar
git stash

## Listar stashes salvos
git stash list

## Recuperar o último stash
git stash pop