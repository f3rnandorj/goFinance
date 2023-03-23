import { FormProvider as Form, UseFormReturn } from "react-hook-form";

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onPress?: VoidFunction;
};

export default function FormProvider({ children, onPress, methods }: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onPress}>{children}</form>
    </Form>
  );
}
