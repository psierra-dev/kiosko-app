import { Path, FieldError, ValidationRule } from "react-hook-form";
import { StyledItemForm, StyledWrapperInput } from "../ItemsForm/ItemsForm";

type InputProps = {
  label: string;
  name: Path<TFormValues | TFormUpdateProduct | TCreateProduct>;
  register: any;
  required: boolean;
  pattern?: ValidationRule<RegExp>;
  errors?: FieldError | undefined;
  type: string;
  valueInp?: string;
  placeholder?: string;
  value?: string;
};

const Input = ({
  label,
  register,
  required,
  errors,
  type,
  name,
  placeholder,
  value,
}: InputProps) => {
  return (
    <>
      <StyledWrapperInput>
        <label>{label}</label>
        {type === "textarea" ? (
          <textarea {...register(name)} cols={30} rows={10}></textarea>
        ) : (
          <StyledItemForm
            type={type}
            {...register(name, { required })}
            placeholder={placeholder}
            defaultValue={value}
            $error={errors !== undefined}
          />
        )}

        {errors !== undefined && <p className="message">{errors.message}</p>}
      </StyledWrapperInput>
    </>
  );
};

export default Input;
