import FormUpdate from "@components/Comercio/Edit/FormUpdate";
import StyledEdit from "@components/Comercio/Edit/style";
import { getLayout } from "@components/Layouts/ComercioLayout";
import useStore from "@hooks/useStore";
import useUser from "@hooks/useUser";

const EditPage = () => {
  const { data: user } = useUser();
  const { store, isLoading, mutate } = useStore(user?.id, "seller");
  return (
    <StyledEdit>
      {isLoading && <p>Cargando</p>}
      {store && <FormUpdate store={store} mutate={mutate} />}
    </StyledEdit>
  );
};

EditPage.getLayout = getLayout;
export default EditPage;
