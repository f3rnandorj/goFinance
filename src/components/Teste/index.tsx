import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

type FieldType =
  | "short_text"
  | "number"
  | "long_text"
  | "phone_number"
  | "multiple_choice";

interface Field {
  id: string;
  title: string;
  ref: string;
  properties: {
    default_country_code?: string;
    randomize?: boolean;
    allow_multiple_selection?: boolean;
    allow_other_choice?: boolean;
    vertical_alignment?: boolean;
    choices?: Choice[];
  };
  validations: {
    required: boolean;
  };
  type: FieldType;
}

interface Choice {
  id: string;
  ref: string;
  label: string;
}

interface Props {
  field: Field;
}

const FormField: React.FC<Props> = ({ field }) => {
  switch (field.type) {
    case "short_text":
      return <TextInput style={styles.input} placeholder={field.title} />;
    case "number":
      return (
        <TextInput
          style={styles.input}
          placeholder={field.title}
          keyboardType="numeric"
        />
      );
    case "long_text":
      return (
        <TextInput
          style={styles.textArea}
          placeholder={field.title}
          multiline={true}
        />
      );
    case "phone_number":
      return (
        <View>
          <Text>{field.title}</Text>
          <TextInput
            style={styles.input}
            placeholder="+55 (11) 99999-9999"
            keyboardType="phone-pad"
          />
        </View>
      );
    case "multiple_choice":
      return (
        <View>
          <Text>{field.title}</Text>
          {field.properties.choices?.map((choice) => (
            <View key={choice.id} style={styles.checkboxContainer}>
              <Text style={styles.checkboxLabel}>{choice.label}</Text>
              <TextInput
                style={styles.checkboxInput}
                placeholder=""
                keyboardType="numeric"
              />
            </View>
          ))}
        </View>
      );
    default:
      return <TextInput style={styles.input} placeholder={field.title} />;
  }
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
    height: 120,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkboxLabel: {
    marginRight: 8,
  },
  checkboxInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    width: 80,
  },
});

export default FormField;
