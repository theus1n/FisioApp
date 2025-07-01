# App Fisioterapia - React Native

Aplicativo mobile desenvolvido em **React Native** com **Expo** para auxiliar no acompanhamento de pacientes de fisioterapia. Pacientes podem fazer login, acessar seus exercícios personalizados, ver sua agenda e receber feedbacks da fisioterapeuta.

## Funcionalidades

- Login seguro com autenticação baseada em Google Sheets
- Visualização de exercícios personalizados por paciente
- Exibição de descrições e detalhes dos exercícios
- Modal com informações do paciente
- Integração com Google Sheets (via Google Apps Script)
- Navegação entre telas (React Navigation)
- Estilo moderno e responsivo

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Google Sheets API (via Apps Script)](https://developers.google.com/apps-script)
- [React Navigation](https://reactnavigation.org/)
- [Lucide React Native Icons](https://lucide.dev/)

## Estrutura de Pastas

```
.
├── App.tsx
├── context/
│   └── AuthContext.tsx
├── screens/
│   ├── LoginScreen.tsx
│   ├── HomeScreen.tsx
│   ├── ExerciseScreen.tsx
│   └── FeedbackScreen.tsx
├── assets/
│   └── (imagens, ícones, etc.)
└── ...
```

## Autenticação

O login é feito com os dados armazenados em uma planilha do Google Sheets. Após o login, as informações do paciente são armazenadas no contexto global para uso nas outras telas.

```json
[
  {
    "nome": "Matheus",
    "sobrenome": "Teixeira",
    "nascimento": "",
    "login": "matheus.teixeira",
    "senha": "",
    "pacienteId": "matheus1"
  }
]
```

## Integração com Google Sheets

O aplicativo utiliza **Google Apps Script** para transformar dados das planilhas em uma API RESTful.

### Estrutura das Planilhas

- `Pacientes`: IDs de cada paciente (ex: `matheus1`)
- `Exercicios`: Lista de todos os exercícios com `id`, `nome` e `descrição`
- `Relação`: Relaciona o `pacienteId` ao(s) `exercicioId(s)`

## Próximas Funcionalidades planejadas

- Upload de vídeos demonstrativos dos exercícios
- Feedback por voz da fisioterapeuta
- Notificações de agenda
- Acompanhamento de progresso do paciente

## Créditos

Desenvolvido por [Matheus Wagner Teixeira](https://github.com/theus1n) para auxiliar o atendimento remoto e personalizado em fisioterapia.
