import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { FilterStyle } from "./style.filter";

interface Prop {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Filter = ({ name, handleChange }: Prop) => {
  return (
    <FilterStyle>
      <Box sx={{ minWidth: "6em" }}>
        <FormControl fullWidth>
          <NativeSelect
            onChange={handleChange}
            defaultValue={30}
            inputProps={{
              name: name,
              id: "uncontrolled-native",
            }}
          >
            {name === "day" && (
              <>
                <option value={"Hoy"}>Hoy</option>
                <option value={"Ayer"}>Semanas</option>
                <option value={"Meses"}>Meses</option>
              </>
            )}
            {name === "state" && (
              <>
                <option value={"Aprobada"}>Aprobadas</option>
                <option value={"Pendiente"}>Pendientes</option>
                <option value={"Cancelada"}>Canceladas</option>
              </>
            )}
            {name === "pay" && (
              <>
                <option value={"Ambos"}>Ambos</option>
                <option value={"mp"}>Mercado Pago</option>
                <option value={"Efectivo"}>Efectivo</option>
              </>
            )}
          </NativeSelect>
        </FormControl>
      </Box>
    </FilterStyle>
  );
};

export default Filter;
