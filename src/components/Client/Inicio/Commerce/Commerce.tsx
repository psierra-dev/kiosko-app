import { useState } from "react";
import { Modal } from "@mui/material";
import { BiChevronDown } from "react-icons/bi";
import { SCommerce } from "./style";
import "@splidejs/react-splide/css";
import FindLocation from "../../FindLocation";
import useCustomer from "@hooks/useCustomer";
import CustomSlide from "./components/CustomSlide";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";

const Commerce = ({ stores }: { stores: TStore[] }) => {
  const { data, isLoading } = useCustomer();
  const [open, setOpen] = useState(false);

  return (
    <SCommerce>
      <WrapperFlex
        $flexdirection="row"
        $justifycontent="end"
        $padding="0.8rem 0"
      >
        {/**search */}

        <div className="direction">
          <span>{data?.direction || "Seleccione tu úbicacion"}</span>
          <button onClick={() => setOpen(true)} className="btn-location">
            <BiChevronDown />
          </button>
        </div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <FindLocation onCloseModal={() => setOpen(false)} />
        </Modal>
      </WrapperFlex>

      <section className="cont_kioskos">
        {stores.length > 0 ? (
          <CustomSlide stores={stores} />
        ) : (
          <WrapperFlex $justifycontent="center" $alignitems="center">
            <h4>No podemos ofrecerte resultado</h4>
          </WrapperFlex>
        )}
      </section>
    </SCommerce>
  );
};

export default Commerce;
