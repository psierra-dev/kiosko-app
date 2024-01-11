import React from "react";
import { FieldError, Path } from "react-hook-form";
import { StyledItemForm, StyledWrapperInput } from "../ItemsForm/ItemsForm";

type Props = {
  label: string;
  name: Path<TFormValues | TCreateProduct>;
  register: any;
  required: boolean;
  errors?: FieldError | undefined;
  options: string[];
};

const Select = ({
  register,
  name,
  label,
  required,
  options,
  errors,
}: Props) => {
  console.log(errors, "errorsSelect");
  return (
    <StyledWrapperInput>
      <label>{label}</label>
      <StyledItemForm as="select" {...register(name, required)}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </StyledItemForm>

      {errors !== undefined && <p className="message">{errors.message}</p>}
    </StyledWrapperInput>
  );
};

export default Select;
