export const fieldJson = {
  fields: [
    {
      id: "F6ApuDGop7X2",
      title: "Seu Nome",
      ref: "aaa59ce6-17ac-4203-9dc6-6978dd783a81",
      properties: {},
      validations: {
        required: false,
      },
      type: "short_text",
    },
    {
      id: "42uu4u1a9Wcv",
      title: "Número da OS",
      ref: "44bbb172-7519-4197-b751-49e16273341b",
      properties: {},
      validations: {
        required: false,
      },
      type: "number",
    },
    {
      id: "4SgiOURQgeFx",
      title: "Nome do Cliente",
      ref: "55f35cdb-feec-43bc-a1b5-f2eb9c29415c",
      properties: {},
      validations: {
        required: false,
      },
      type: "long_text",
    },
    {
      id: "h9SsLLAuXWmH",
      title: "Telefone do Cliente",
      ref: "10e91835-86a6-4907-ad44-80d80748affd",
      properties: {
        default_country_code: "BR",
      },
      validations: {
        required: false,
      },
      type: "phone_number",
    },
    {
      id: "tABBV7rVyJKu",
      title: "Nome do responsável pela apresentação do imóvel",
      ref: "2bfbada7-5665-4dad-8f10-7a9d7be38657",
      properties: {},
      validations: {
        required: false,
      },
      type: "long_text",
    },
    {
      id: "8zN1UN0ZUVp0",
      title: "Telefone do responsável pela apresentação do imóvel",
      ref: "56d99bc1-8038-4dd1-8881-e7d388734f3c",
      properties: {
        default_country_code: "BR",
      },
      validations: {
        required: false,
      },
      type: "phone_number",
    },
    {
      id: "2khxxh0nwnXi",
      title: "Características Região - Usos Predominantes",
      ref: "9c262b88-88d4-4c35-ac34-f42d210ad15e",
      properties: {
        randomize: false,
        allow_multiple_selection: true,
        allow_other_choice: true,
        vertical_alignment: true,
        choices: [
          {
            id: "l6tAato0qwOo",
            ref: "2029a76a-b7c6-4295-bd42-9f95f47d4216",
            label: "Residencial Unifamiliar",
          },
          {
            id: "iaeDLj2BUL0u",
            ref: "a2c04668-350c-4788-a693-79fb70371f8c",
            label: "Residencial Multifamiliar",
          },
          {
            id: "B6nWhzBeSLQy",
            ref: "bab412e0-f041-4bcb-88ab-ab29ce67faed",
            label: "Comercial",
          },
          {
            id: "CMei3Dds00TO",
            ref: "ee9fb298-a3d3-4418-9063-ea4f9835e352",
            label: "Industrial",
          },
          {
            id: "kAO5bQI3vur4",
            ref: "b036b6be-bef6-4c82-8765-c6fbbea3aa25",
            label: "Institucional",
          },
        ],
      },
      validations: {
        required: false,
      },
      type: "multiple_choice",
    },
  ],
};
