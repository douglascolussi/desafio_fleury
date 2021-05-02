Feature: Unidade
 A fim de localizar Unidades
 Com um filtro por facilidade
 Retornar uma Unidade 

Scenario: Filtrando por uma Unidade
 Given que Fulano acessou o site Fleury
  When clicar no menu Unidades
  And abrir filtro por facilidade
  And selecionar "Vacinação"
  And selecionar "Bicicletário e vaga verde"
  And selecionar "Atendimento aos domingos"
  Then validar se a Unidade "República do Líbano I"
