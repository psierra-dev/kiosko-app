import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";

//Regex
const phoneRegex = new RegExp("(381)[0-9-]{7,7}");
const stringRegex = new RegExp("^[A-z]+$");
const passwordregExpr =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

const schema = {
  name_user: yup
    .string("Solo letra")
    .matches(stringRegex, "Nombre no valido")
    .required("Escribe tu nombre"),
  lastname_user: yup
    .string("Solo letra")
    .matches(stringRegex, "Apellido no valido")
    .required("Escribe tu apellido"),
  name_kiosko: yup.string().required("Escribe el nombre de tu kiosko"),
  email: yup
    .string()
    .email("Escribe un email valido")
    .required("Escribe un email por favor"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es requerida"),
  direction: yup.string().required("Escribe una direccion"),
  phone: yup.string().phone("", "", "Debe ser un numero de telefono valido"),
  description: yup.string(),
  name_product: yup
    .string()
    .required("Este campo es requerido")
    .min(3, "Debe tener al menos tres caracteres."),
  str_string: yup
    .string()
    .min(2, "Este campo es requerido")
    .required("Este campo es requerido"),
};

const {
  name_user,
  lastname_user,
  name_kiosko,
  name_product,
  email,
  password,
  direction,
  description,
  str_string,
  phone,
} = schema;

export const schemaFormCart = yup
  .object({
    direction,
    description,
    phone,
  })
  .required();

export const schemaLogin = yup
  .object({
    email,
    password,
  })
  .required();

export const schemaCreateProduct = yup
  .object({
    name_product,
    category_name: str_string,
    unit_measurement: str_string,
    file: yup.string().required("Este campo es requerido"),
  })
  .required();
export const schemaRegister = yup
  .object({
    name_user: schema.name_user,
    lastname_user: schema.lastname_user,
    email: schema.email,
    password: schema.password,
  })
  .required();

export const schemaRegisterStore = yup
  .object({
    name_user: schema.name_user,
    Nombre_Del_Kiosko: schema.Nombre_Del_Kiosko,
    Apellido: schema.Apellido,
    Email: schema.Email,
    Telefono: schema.Telefono,
    Contraseña: schema.Contraseña,
    Direccion: schema.Direccion,
  })
  .required();
export const schemaUpdateStore = yup
  .object({
    name_kiosko,
    direction,
    phone,
    file: yup.string().required("Este campo es requerido"),
  })
  .required();

export const schemaUpdateProduct = yup.object({
  Stock: yup.string(),
  Precio: yup.string(),
});
