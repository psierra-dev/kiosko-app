import { Path, FieldError, ValidationRule } from "react-hook-form";
import { StyledItemForm, StyledWrapperInput } from "../ItemsForm/ItemsForm";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

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
  isPassword?: boolean;
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
  isPassword,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <StyledWrapperInput>
        <label>{label}</label>
        {type === "textarea" ? (
          <textarea {...register(name)} cols={30} rows={10}></textarea>
        ) : (
          <>
            <StyledItemForm
              type={isPassword ? (showPassword ? "text" : "password") : type}
              {...register(name, { required })}
              placeholder={placeholder}
              defaultValue={value}
              $error={errors !== undefined}
            />
            {isPassword && (
              <button
                className="btn-show"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowPassword(() => !showPassword);
                }}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            )}
          </>
        )}

        {errors !== undefined && <p className="message">{errors.message}</p>}
      </StyledWrapperInput>
    </>
  );
};

export default Input;
